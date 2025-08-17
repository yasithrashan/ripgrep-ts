# Ripgrep Wrapper

A simple Node.js/TypeScript wrapper for the `ripgrep` (rg) command-line tool that provides search functionality with Promise-based interface.

## Prerequisites

- [ripgrep](https://github.com/BurntSushi/ripgrep) must be installed and available in your PATH
- Node.js with TypeScript support

### Installing ripgrep

**macOS (Homebrew):**
```bash
brew install ripgrep
```

**Ubuntu/Debian:**
```bash
sudo apt install ripgrep
```

**Windows:**
```bash
winget install BurntSushi.ripgrep.MSVC
```

## Usage

### Basic Example

```typescript
import { ripgrep } from "./ripgrep";

async function main() {
    const matches = await ripgrep('login', './test');

    for (const line of matches) {
        console.log(line);
    }
}

main();
```

### API

#### `ripgrep(pattern: string, dir?: string): Promise<string[]>`

Searches for a pattern in files using ripgrep.

**Parameters:**
- `pattern` (string) - The search pattern/regex to find
- `dir` (string, optional) - Directory to search in (defaults to current directory ".")

**Returns:**
- Promise that resolves to an array of strings in vimgrep format
- Each result includes: `filename:line:column:content`
- Returns empty array if no matches found

**Example output:**
```
./src/auth.ts:15:8:const login = async (username, password) => {
./src/utils.ts:42:12:// Handle login redirect
./test/auth.test.ts:23:5:it('should handle login correctly', () => {
```

## Features

- **Promise-based**: Easy integration with async/await
- **Error handling**: Properly handles ripgrep exit codes
- **Empty results**: Returns empty array when no matches found (exit code 1)
- **Vimgrep format**: Results include filename, line number, column, and content
- **TypeScript**: Full TypeScript support with proper types

## Notes

- The wrapper uses the `--vimgrep` flag to ensure consistent output format
- Pattern should be properly escaped if it contains special characters
- Directory path is passed directly to ripgrep, so relative and absolute paths work