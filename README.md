<div align="center">
  <h1>✨ Commit-Gen</h1>
  <p><b>AI-powered git commit message generator using Gemini API</b></p>
  
  <p>
    <a href="https://www.npmjs.com/package/@mitesh_1803/commit-gen">
      <img src="https://img.shields.io/npm/v/@mitesh_1803/commit-gen.svg?color=blue&style=for-the-badge" alt="npm version" />
    </a>
    <img src="https://img.shields.io/node/v/@mitesh_1803/commit-gen.svg?style=for-the-badge" alt="node version" />
    <img src="https://img.shields.io/badge/License-ISC-green.svg?style=for-the-badge" alt="License" />
  </p>
</div>

<br />

Tired of writing boring commit messages? **Commit-Gen** analyzes your staged
git changes using a **local Ollama LLM** (with Gemini as fallback) and generates
clean, conventional commit messages. Pick your favorite with arrow keys!

---

## 🚀 Features

- 🤖 **Local LLM First**: Uses your own Ollama instance on EC2 for privacy and speed
- ☁️ **Gemini Fallback**: Automatically falls back to Gemini if Ollama is unavailable
- 🧠 **Smart Analysis**: Understands context of your staged git diffs
- 🎯 **Multiple Options**: Generates 3 high-quality commit messages to choose from
- 🕹️ **Interactive CLI**: Spinners and arrow key prompts via `nanospinner` and `inquirer`
- ⚡ **Quick & Easy**: Commit without ever leaving your terminal
- 🔑 **Secure Config**: Saves your Gemini API key locally for future use.

## 📦 Installation

You don't even need to install it! You can run it directly using `npx`:

```bash
npx @mitesh_1803/commit-gen
```

Alternatively, you can install it globally to use the `commit-gen` command anywhere:

```bash
npm install -g @mitesh_1803/commit-gen
```

## 🛠️ Setup & Usage

### Option A — Using Ollama (Primary, Recommended)

Run your own local LLM on any server using Ollama(I have used AWS EC2 Instance).

1. **Install Ollama on your server:**

```bash
curl -fsSL https://ollama.ai/install.sh | sh
```

2. **Pull the model:**

```bash
ollama pull qwen2.5-coder:1.5b
```

3. **Start Ollama on all interfaces:**

```bash
OLLAMA_HOST=0.0.0.0 ollama serve
```

4. **Set your Ollama URL in `.env`:**

---

### Option B — Using Gemini (Fallback)

If Ollama is unavailable, the tool automatically falls back to Gemini.

1. Get your free API key from [Google AI Studio](https://aistudio.google.com/apikey)
2. On first run the tool will ask for your key and save it to `~/.commit-gen-config`

---

### Running the tool

**Stage your changes:**

```bash
git add .
```

**Run:**

```bash
commit-gen
# or
npx @mitesh_1803/commit-gen
```

**What happens:**

- Spinner shows while connecting to Ollama
- If Ollama fails → automatically switches to Gemini
- Pick from 3 commit messages with arrow keys
- Press Enter → committed automatically 🎉

### 4. Follow the Prompts

- It will read your staged changes and generate a list of commit options.
- Use your **arrow keys** to select the perfect commit message.
- Press **Enter**, and the tool will automatically commit your changes! 🎉
- If ollama fail,the CLI will ask for your Gemini API key and securely save it in `~/.commit-gen-config`.

## 📖 CLI Options

```text
Usage: commit-gen [options]

Options:
  --version   Show version number
  --help      Show the help message
```

## ⚙️ How it works

1. Reads your staged changes with `git diff --staged`
2. Tries your Ollama instance first (fast, private, local LLM)
3. If Ollama unavailable → falls back to Gemini API automatically
4. Returns 3 conventional commit message suggestions
5. You pick one with arrow keys
6. Tool runs `git commit` automatically

## 🛠️ Built with

- [Ollama](https://ollama.ai) — local LLM runner (primary)
- [Google Gemini AI](https://aistudio.google.com) — cloud fallback
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) — interactive prompts
- [Nanospinner](https://github.com/usmanyunusov/nanospinner) — terminal spinners
- [TypeScript](https://www.typescriptlang.org) — type safety
-

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check out the [issues page](https://github.com/mitesh1803/commit-gen/issues)

## 📄 License

This project is licensed under the [ISC License](LICENSE).
