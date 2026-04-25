import { execSync } from 'child_process'

export function getStagedDiff(): string {
  try {
    const diff = execSync(
      "git diff --staged -- . ':(exclude)package-lock.json' ':(exclude)yarn.lock' ':(exclude)pnpm-lock.yaml' ':(exclude)node_modules'", 
      { maxBuffer: 1024 * 1024 * 10 }
    ).toString()
    
    if (!diff.trim()) {
      console.log('No staged files (excluding lockfiles/node_modules). Run git add first.')
      process.exit(1)
    }
    
    return diff
  } catch (error: any) {
    console.error('Error getting git diff:', error.message)
    process.exit(1)
  }
}