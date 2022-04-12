const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Entrez le premier nombre : ', (reponse1) => {
    rl.question('Entrez le deuxieme nombre : ', (reponse2) => {
        var somme = parseInt(reponse1) + parseInt(reponse2);
        if(reponse1 == 50 || reponse2 == 50 || somme == 50)
           console.log('True')
        else
            console.log('False')
        rl.close();
    });
});