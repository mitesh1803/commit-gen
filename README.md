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

Tired of writing boring or repetitive commit messages? **Commit-Gen** analyzes your staged git changes using Google's powerful Gemini AI and generates clean, descriptive, and conventional commit messages. All you have to do is pick your favorite!

---

## 🚀 Features

- **🧠 Smart Analysis**: Uses the Gemini AI model to understand the context of your staged git diffs.
- **🎯 Multiple Options**: Generates several high-quality commit messages for you to choose from.
- **🕹️ Interactive CLI**: Beautiful spinners and interactive prompts powered by `nanospinner` and `inquirer`.
- **⚡ Quick & Easy**: Commit changes without ever leaving your terminal.
- **🔑 Secure Config**: Securely saves your Gemini API key locally for seamless future use.

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

### 1. Get an API Key
Get your free Gemini API key from [Google AI Studio](https://aistudio.google.com/apikey).

### 2. Stage Your Changes
Stage the files you want to commit using git:

```bash
git add .
```

### 3. Run Commit-Gen
If installed globally:
```bash
commit-gen
```
*(If using npx: `npx @mitesh_1803/commit-gen`)*

### 4. Follow the Prompts
- On your **first run**, the CLI will ask for your Gemini API key and securely save it in `~/.commit-gen-config`.
- It will read your staged changes and generate a list of commit options.
- Use your **arrow keys** to select the perfect commit message.
- Press **Enter**, and the tool will automatically commit your changes! 🎉

## 📖 CLI Options

```text
Usage: commit-gen [options]

Options:
  --version   Show version number
  --help      Show the help message
```
## ⚙️ How it works

1. Reads your staged changes with `git diff --staged`
2. Sends the diff to Gemini AI
3. Returns 3 conventional commit message suggestions
4. You pick one with arrow keys
5. Tool runs `git commit` automatically

## 🛠️ Built with

- [Google Gemini AI](https://aistudio.google.com) — commit message generation
- [Inquirer.js](https://github.com/SBoudrias/Inquirer.js) — interactive prompts
- [Nanospinner](https://github.com/usmanyunusov/nanospinner) — terminal spinners
- [TypeScript](https://www.typescriptlang.org) — type safety

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check out the [issues page](https://github.com/YOUR_USERNAME/YOUR_REPO/issues) if you want to contribute.

## 📄 License

This project is licensed under the [ISC License](LICENSE).
