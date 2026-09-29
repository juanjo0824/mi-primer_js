// ==========================================
// CONTADOR DINÁMICO
// ==========================================

// Variable que almacena el valor del contador
let contador = 0;

// ==========================================
// SELECCIONAR ELEMENTOS HTML
// ==========================================

const valorPantalla = document.querySelector("#valor");

const btnIncrementar = document.querySelector("#btn-incrementar");

const btnRestar = document.querySelector("#btn-restar");

const btnReiniciar = document.querySelector("#btn-reiniciar");

// ==========================================
// FUNCIÓN PARA ACTUALIZAR EL COLOR
// ==========================================

function actualizarColor() {

    if (contador > 0) {

        valorPantalla.style.color = "#16a34a";

    } else if (contador < 0) {

        valorPantalla.style.color = "#dc2626";

    } else {

        valorPantalla.style.color = "#0f172a";
    }
}

// ==========================================
// FUNCIÓN PARA ACTUALIZAR LA PANTALLA
// ==========================================

function actualizarPantalla() {

    valorPantalla.textContent = contador;

    actualizarColor();
}

// ==========================================
// BOTÓN SUMAR
// ==========================================

btnIncrementar.addEventListener("click", () => {

    contador++;

    actualizarPantalla();

});

// ==========================================
// BOTÓN RESTAR
// ==========================================

btnRestar.addEventListener("click", () => {

    contador--;

    actualizarPantalla();

});

// ==========================================
// BOTÓN REINICIAR
// ==========================================

btnReiniciar.addEventListener("click", () => {

    contador = 0;

    actualizarPantalla();

});

// ==========================================
// INICIAR EL PROGRAMA
// ==========================================

actualizarPantalla();