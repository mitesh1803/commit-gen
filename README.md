# commit-gen

A CLI tool that automatically generates high-quality git commit messages using Google's Gemini AI based on your staged changes. It adheres to the Conventional Commits format to keep your git history clean and readable.

## Features

- 🧠 Analyzes your staged changes (`git diff --staged`) using the Gemini 2.5 Flash model.
- 💬 Generates exactly 3 commit message options for you to choose from.
- 📝 Enforces the [Conventional Commits](https://www.conventionalcommits.org/) format (`feat:`, `fix:`, `chore:`, etc.).
- 🚀 Interactive CLI prompt allows you to seamlessly select your preferred message.
- ✅ Automatically commits your staged changes with the selected message.

## Prerequisites

- Node.js (v16+)
- Git installed and initialized in your repository
- A [Google Gemini API Key](https://aistudio.google.com/app/apikey)

## Installation

Install the package globally via npm:

```bash
npm install -g @mitesh_1803/commit-gen
```

Alternatively, you can run it directly using `npx`:

```bash
npx @mitesh_1803/commit-gen
```

## Setup

The tool requires a valid Gemini API key to function. Set the `GEMINI_API_KEY` environment variable in your terminal session:

```bash
export GEMINI_API_KEY=your_gemini_api_key_here
```

*(Tip: You can add this line to your `~/.bashrc` or `~/.zshrc` to make it persistent).*

## Usage

1. Make changes to your codebase.
2. Stage the files you want to commit:
   ```bash
   git add <files>
   # or
   git add .
   ```
3. Run the commit generator:
   ```bash
   commit-gen
   ```
4. Use your arrow keys to select the best commit message from the generated options, and press Enter.
5. Your changes are automatically committed!

## License

ISC
test
