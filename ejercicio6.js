// =============================================
//   VENTA DE 15 BOLETOS DE CINE
//   Si el comprador es menor de edad Y la
//   pelicula es para adultos → rechazar venta
// =============================================
 
// Datos de los 15 compradores (nombre, edad)
// La pelicula es para adultos: true
const peliculaAdultos = true;
 
const compradores = [
  { nombre: "Ana",      edad: 15 },
  { nombre: "Luis",     edad: 22 },
  { nombre: "Maria",    edad: 12 },
  { nombre: "Carlos",   edad: 30 },
  { nombre: "Sofia",    edad: 17 },
  { nombre: "Pedro",    edad: 25 },
  { nombre: "Laura",    edad: 14 },
  { nombre: "Jorge",    edad: 19 },
  { nombre: "Valeria",  edad: 16 },
  { nombre: "Miguel",   edad: 28 },
  { nombre: "Isabella", edad: 13 },
  { nombre: "Diego",    edad: 21 },
  { nombre: "Camila",   edad: 11 },
  { nombre: "Andres",   edad: 35 },
  { nombre: "Paula",    edad: 17 },
];
 
let vendidos   = 0;
let rechazados = 0;
 
console.log("======= INICIO =======");
 
for (let i = 0; i < compradores.length; i++) {
  const c = compradores[i];
 
  // DECISION: ¿menor de edad Y pelicula para adultos?
  if (c.edad < 18 && peliculaAdultos) {
    console.log(`${c.nombre} (${c.edad} años) --> RECHAZADO`);
    rechazados++;
  } else {
    console.log(`${c.nombre} (${c.edad} años) --> VENDIDO`);
    vendidos++;
  }
}
 
console.log("======= FIN =======");
console.log(`Vendidos:   ${vendidos}`);
console.log(`Rechazados: ${rechazados}`);