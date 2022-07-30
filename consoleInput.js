const readline = require('readline');

const question = question => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question(question, answer => {
            rl.close();
            return resolve(answer);
        });
    });
};

async function main() {
    while(true){
        const answer = await question('입력: ');
        if(answer === '묵호아님') break;

        console.log(answer);
    }
}

main();
