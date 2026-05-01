#!/usr/bin/env node
import "dotenv/config";
import { getStagedDiff } from "./git.js";
import { generateCommitMessages } from "./ai.js";
import { execSync } from "child_process";
import { input, promptForCommitMessage } from "./prompt.js";
import os from "os";
import path from "path";
import fs from "fs";
import { createSpinner } from "nanospinner";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pkg = require("../package.json");

async function ensureApiKey() {
  const configPath = path.join(os.homedir(), ".commit-gen-config");
  if (process.env.GEMINI_API_KEY) return;

  if (fs.existsSync(configPath)) {
    const key = fs.readFileSync(configPath, "utf-8").trim();
    process.env.GEMINI_API_KEY = key;
    return;
  }
  const key = (await input("Enter your Gemini API key:")).trim();
  if (!key) {
    throw new Error("API key cannot be empty");
  }
  fs.writeFileSync(configPath, key);
  process.env.GEMINI_API_KEY = key;
}

async function main() {
  try {
    const args = process.argv.slice(2);

    if (args.includes("--version")) {
      // print version from package.json and exit
      console.log(pkg.version);
      process.exit(0);
    }

    if (args.includes("--help")) {
      console.log(`Usage: commit-gen [options]

  AI-powered git commit message generator .

  Options:
  --version   Show version number
  --help      Show this help message

  Steps:
  1. Stage your changes:  git add .
  2. Run:                 npx @mitesh_1803/commit-gen
  3. Pick a commit message with arrow keys
  4. Done! Changes are committed automatically.

  Setup:
  No basic setup required.
  If ollama model fail:
  Get your Gemini API key from https://aistudio.google.com/apikey
  The tool will ask for it on first run.`);
      process.exit(0);
    }
    await modelCall();
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

async function modelCall( ) {
  
    const diff=getStagedDiff()
    const s1 = createSpinner("Connecting to Ollama...").start()
try {
  const messages = await generateCommitMessages(diff)
  s1.success({ text: "Messages generated via Ollama" })
  
  const chosen = await promptForCommitMessage(messages)
  execSync(`git commit -m "${chosen}"`, { stdio: "inherit" })
  console.log(`\nSuccessfully committed: ${chosen}`)

} catch (error) {
  s1.error({ text: "Ollama unavailable, switching to Gemini..." })
  
  const s2 = createSpinner("Checking Gemini API key...").start()
  await ensureApiKey()
  s2.success({ text: "API key ready" })

  const s3 = createSpinner("Generating commit messages...").start()
  const messages = await generateCommitMessages(diff)  
  s3.success({ text: "Messages generated via Gemini" })

  const chosen = await promptForCommitMessage(messages)
  execSync(`git commit -m "${chosen}"`, { stdio: "inherit" })
  console.log(`\nSuccessfully committed: ${chosen}`)
}
}
main();
