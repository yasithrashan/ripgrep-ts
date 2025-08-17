import { ripgrep } from "./ripgrep";

async function main() {
    const matches = await ripgrep('login', './test')

    for (const line of matches) {
        console.log(line);
    }
}

main();