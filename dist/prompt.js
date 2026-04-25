import inquirer from "inquirer";
export async function promptForCommitMessage(messages) {
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
//# sourceMappingURL=prompt.js.map