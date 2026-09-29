// ==========================================
// VARIABLES Y TIPOS DE DATOS
// ==========================================

// Nombre del estudiante
const nombre = "Juan Jose";

// Año de nacimiento
const añoNacimiento = 2006;

// Obtener automáticamente el año actual
const añoActual = new Date().getFullYear();

// Calcular la edad
const edad = añoActual - añoNacimiento;

// Otros ejemplos de tipos de datos
const ciudad = "San Gil";
const altura = 1.70;
const estudianteActivo = true;

// ==========================================
// OPERACIONES MATEMÁTICAS
// ==========================================

const numero1 = 10;
const numero2 = 5;

const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicacion = numero1 * numero2;
const division = numero1 / numero2;
const residuo = numero1 % numero2;

// ==========================================
// MOSTRAR INFORMACIÓN EN CONSOLA
// ==========================================

console.log("===== INFORMACIÓN DEL ESTUDIANTE =====");

console.log("Nombre: " + nombre);
console.log("Año de nacimiento: " + añoNacimiento);
console.log("Año actual: " + añoActual);
console.log("Edad: " + edad + " años");
console.log("Ciudad: " + ciudad);
console.log("Altura: " + altura);
console.log("¿Está activo?: " + estudianteActivo);

console.log("===== OPERACIONES MATEMÁTICAS =====");

console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
console.log("Residuo: " + residuo);

console.log("=====================================");