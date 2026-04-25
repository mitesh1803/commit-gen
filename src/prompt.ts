import inquirer from "inquirer";

export async function promptForCommitMessage(messages: string[]): Promise<string> {
  const answer = await inquirer.prompt([
    {
      type: "list",
      name: "message",
      message: "Pick a commit message",
      choices: messages,
    },
  ]);
  return answer.message;
}


export async function input(message: string): Promise<string> {
  const answer = await inquirer.prompt({
    type: "input",
    name: "apikey",
    message: "Enter your Gemini API key:",
  })
  return answer.apikey  
}