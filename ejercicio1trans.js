function numerosPrimos() {
  let numero = 2; // empezamos desde 2 porque el 1 no es primo

  while (numero <= 50) {
    let esPrimo = true;
    let divisor = 2;

    // probamos divisores desde 2 hasta numero-1
    while (divisor < numero) {
      if (numero % divisor === 0) {
        esPrimo = false;
        break; // si encontramos un divisor, ya no es primo
      }
      divisor = divisor + 1;
    }

    if (esPrimo) {
      console.log("Número primo:", numero);
    }

    numero = numero + 1; // pasamos al siguiente número
  }
}

// Llamamos la función
numerosPrimos();

