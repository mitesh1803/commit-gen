
import { execSync } from 'child_process'

export function getStagedDiff(): string {
  const diff = execSync('git diff --staged').toString()
  
  if (!diff) {
    console.log('No staged files. Run git add first.')
    process.exit(1)
  }
  
  return diff
}