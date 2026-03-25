let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt("Ingresa un número:"));

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

console.log("Cantidad de pares: " + pares);
console.log("Cantidad de impares: " + impares);