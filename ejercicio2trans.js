function tablaMultiplicar() {
  let repetir = true;

  while (repetir) {
    // Pedimos al usuario un número
    let numero = parseInt(prompt("Ingresa un número para ver su tabla de multiplicar:"));

    // Mostramos la tabla hasta el 12
    let multiplicador = 1;
    while (multiplicador <= 12) {
      console.log(numero, "x", multiplicador, "=", numero * multiplicador);
      multiplicador = multiplicador + 1;
    }

    // Preguntamos si quiere otra tabla
    let respuesta = prompt("¿Quieres consultar otra tabla? (si/no)");
    if (respuesta.toLowerCase() !== "si") {
      repetir = false;
      console.log("Programa terminado.");
    }
  }
}

// Llamamos la función
tablaMultiplicar();
