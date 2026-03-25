// =============================================
//   JUEGO: ADIVINA EL NUMERO
//   Numero aleatorio entre 1 y 20
//   El ciclo repite hasta que el usuario acierte
// =============================================
 
const numeroSecreto = Math.floor(Math.random() * 20) + 1;
let intentos = 0;
let adivinado = false;
 
console.log("=== ADIVINA EL NUMERO (1 - 20) ===");
 
// INICIO DEL CICLO: repite hasta adivinar
while (!adivinado) {
  const entrada = prompt("Ingresa un numero entre 1 y 20:");
  const intento = parseInt(entrada);
 
  // Validar que sea un numero valido
  if (isNaN(intento) || intento < 1 || intento > 20) {
    console.log("Numero invalido. Ingresa un numero entre 1 y 20.");
    continue;
  }
 
  intentos++;
 
  // DECISION: comparar intento con el numero secreto
  if (intento < numeroSecreto) {
    console.log(`${intento} --> El numero es MAYOR. Intenta de nuevo.`);
  } else if (intento > numeroSecreto) {
    console.log(`${intento} --> El numero es MENOR. Intenta de nuevo.`);
  } else {
    adivinado = true;
    console.log(`¡CORRECTO! El numero era ${numeroSecreto}. Lo lograste en ${intentos} intento(s).`);
  }
}
 
console.log("=== FIN DEL JUEGO ===");