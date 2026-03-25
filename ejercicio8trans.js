let usuarioCorrecto = "admin";
let contraseñaCorrecta = "1234";

let intentos = 0;
let acceso = false;

while (intentos < 3 && acceso === false) {
    let usuario = prompt("Ingrese el usuario:");
    let contraseña = prompt("Ingrese la contraseña:");

    if (usuario === usuarioCorrecto && contraseña === contraseñaCorrecta) {
        console.log("Bienvenido");
        acceso = true;
    } else {
        intentos++;
    }
}

if (acceso === false) {
    console.log("Acceso denegado");
}