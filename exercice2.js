for (var nombre = 1; nombre <= 100; nombre++) {
    var message = ""; // Message à afficher, initialement vide
    if (nombre % 3 === 0) {
        // Nombre multiple de 3 : on ajoute "Fizz" au message
        message += 'Fizz';
    }
    if (nombre % 5 === 0) {
        // Nombre multiple de 5 : on ajoute "Buzz" au message
        message += 'Buzz';
    }
    if (message === "") {
        // Si message est vide, le nombre n'est pas multiple de 3, ni de 5 :
        // le message affiché sera le nombre
        message = nombre;
    }
    console.log(message);
}