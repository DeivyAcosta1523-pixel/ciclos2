// Suma de 1 a 100 con interrupción
let suma = 0;

for (let i = 1; i <= 100; i++) {

    // Verificar condición de parada
    if (i > 90 && i % 2 === 0) {
        break;
    }

    suma += i;
}

console.log("La suma es: " + suma);