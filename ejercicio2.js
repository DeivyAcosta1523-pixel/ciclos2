// Simula si el estudiante trae carné (true/false)
function ingresoEstudiantes(carnets) {
  let contador = 0;
  while (contador < carnets.length) {
    const traeCarnet = carnets[contador];
    if (traeCarnet) {
      console.log("Estudiante", contador + 1, "→ INGRESA");
    } else {
      console.log("Estudiante", contador + 1, "→ DENEGADO (sin carné)");
    }
    contador = contador + 1;
  }
  console.log("Proceso completado");
}

// Ejemplo de uso
ingresoEstudiantes([true, false, true, true, false]);
