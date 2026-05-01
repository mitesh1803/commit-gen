import "dotenv/config";
import { GoogleGenAI } from "@google/genai";

export async function tryOllama(diff: string): Promise<string[]> {
  const maxRetries = 3;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await fetch("http://51.21.181.250:11434/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "qwen2.5-coder:1.5b",
          prompt: `
            You are a git commit message expert.
            Given this git diff, generate exactly 3 commit messages.
            Follow conventional commits format: feat:, fix:, chore:, refactor: etc.
            Keep each under 72 characters.
            Return only a JSON array of 3 strings, nothing else.
            No markdown, no backticks, just the raw JSON array.

            Git diff:
            ${diff}
          `,
          stream: false,
        }),
      });

      const data = (await response.json()) as { response?: string };
      const text = (data.response ?? "").replace(/```json|```/g, "").trim();
      const messages = JSON.parse(text);
      return messages;
    } catch (error) {
      if (attempt === maxRetries) throw error;
      console.log(`Ollama busy, retrying... (${attempt}/${maxRetries})`);
      await new Promise((r) => setTimeout(r, 2000));
    }
  }

  throw new Error("Failed to generate commit messages after retries");
}
export async function tryGemini(diff: string): Promise<string[]> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.log("GEMINI_API_KEY is missing in .env file");
    process.exit(1);
  }
  const ai = new GoogleGenAI({ apiKey });
  const maxRetries = 3;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `
          You are a git commit message expert.
          Given this git diff, generate exactly 3 commit messages.
          Follow conventional commits format: feat:, fix:, chore:, refactor: etc.
          Keep each under 72 characters.
          Return only a JSON array of 3 strings, nothing else.
          No markdown, no backticks, just the raw JSON array.

          Git diff:
          ${diff}
        `,
      });

      const text = (response.text ?? "").replace(/```json|```/g, "").trim();
      const messages = JSON.parse(text);
      return messages;
    } catch (error) {
      if (attempt === maxRetries) throw error;
      console.log(`Gemini busy, retrying... (${attempt}/${maxRetries})`);
      await new Promise((r) => setTimeout(r, 2000));
    }
  }
  throw new Error("Failed to generate commit messages after retries");
}
export async function generateCommitMessages(diff: string): Promise<string[]> {
  try {
    const messages = await tryOllama(diff);
    return messages;
  } catch (error) {
    console.log("Ollama failed, falling back to Gemini...");
  }
  return await tryGemini(diff);
}
