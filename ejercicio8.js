for (let i = 1; i <= 5; i++) {
    let nombre = prompt("Ingrese el nombre:");
    let edad = parseInt(prompt("Ingrese la edad:"));

    if (edad >= 18) {
        console.log("Mayor de edad: " + nombre + " (" + edad + " años)");
    }
}