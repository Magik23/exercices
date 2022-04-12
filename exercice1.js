const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Entrez le premier nombre : ', (reponse1) => {
    rl.question('Entrez le deuxieme nombre : ', (reponse2) => {
        var resultat = (+reponse1) + (+reponse2);
        console.log(`La somme des deux nombres est : ${resultat}`);
        rl.close();
    });
});