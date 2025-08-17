import { exec } from "child_process";

export function ripgrep(pattern: string, dir: string = "."): Promise<string[]> {
    return new Promise((resolve, reject) => {
        exec(`rg --vimgrep "${pattern}" ${dir}`, (err, stdout, stderr) => {
            if (err) {
                if (err.code === 1) return resolve([]);
                return reject(stderr);
            }

            const results = stdout.trim().split("\n").filter(Boolean);
            resolve(results);
        });
    });
}
