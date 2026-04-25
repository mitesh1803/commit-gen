#!/usr/bin/env node
import "dotenv/config";
import { getStagedDiff } from "./git.js";
import { generateCommitMessages } from "./ai.js";
import { execSync } from "child_process";
import { promptForCommitMessage } from "./prompt.js";
async function main() {
    try {
        const diff = getStagedDiff();
        const messages = await generateCommitMessages(diff);
        const chosen = await promptForCommitMessage(messages);
        console.log('chosen:', chosen);
        execSync(`git commit -m "${chosen}"`, { stdio: "inherit" });
        console.log(`\nSuccessfully committed: ${chosen}`);
    }
    catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
}
main();
//# sourceMappingURL=index.js.map