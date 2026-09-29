// ==========================================
// ESTRUCTURAS CONDICIONALES
// ==========================================

const edadUsuario = 16;

console.log("===== CONDICIONALES =====");

if (edadUsuario >= 18) {
    console.log("Puedes registrarte en el torneo de mayores.");
} else if (edadUsuario >= 13) {
    console.log("Bienvenido a la categoría juvenil.");
} else {
    console.log("Lo siento, necesitas ser mayor de 13 años.");
}

// ==========================================
// COMPARADORES
// ==========================================

const numeroA = 10;
const numeroB = 5;

console.log("===== COMPARADORES =====");

console.log("¿10 es mayor que 5?: " + (numeroA > numeroB));
console.log("¿10 es igual a 5?: " + (numeroA === numeroB));
console.log("¿10 es diferente de 5?: " + (numeroA !== numeroB));
console.log("¿10 es menor o igual a 5?: " + (numeroA <= numeroB));

// ==========================================
// FUNCIÓN
// ==========================================

function calcularPuntajeTotal(puntosNivel1, puntosNivel2) {

    const total = puntosNivel1 + puntosNivel2;

    return "Puntaje Final: " + total;
}

// Llamar la función
const resultadoJugador = calcularPuntajeTotal(450, 320);

console.log("===== FUNCIÓN =====");
console.log(resultadoJugador);

// ==========================================
// OTRA FUNCIÓN
// ==========================================

function saludar(nombre) {

    return "Hola " + nombre + ", bienvenido a JavaScript.";
}

const mensaje = saludar("Juan Jose");

console.log(mensaje);