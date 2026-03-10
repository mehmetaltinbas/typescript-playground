import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

export async function readUserInput(query: string): Promise<string> {
    return new Promise((resolve, reject) => {
        rl.question(query, (answer) => {
            resolve(answer);
            rl.close();
        });
    });
}
