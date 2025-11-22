// Array de problemas de física para identificar la unidad SI correcta.
const problemasFisica = [
    // La respuesta correcta SIEMPRE es el índice de la unidad correcta.
    {
        problema: {
            titulo: "Fuerza",
            formula: "$$ F = m \cdot a $$",
            texto: "Calcula la **Fuerza** necesaria para mover un objeto de **15 \\mathrm{kg}** con una aceleración de **4 \\mathrm{m/s^2}**.",
            resultado: "60"
        },
        opciones: [
            { texto: "kg·m", esCorrecta: false, explicacion: "Incorrecto. La unidad de la Fuerza en el SI es el Newton, equivalente a kg·m/s²." },
            { texto: "Pascal (Pa)", esCorrecta: false, explicacion: "Incorrecto. El **Pascal (Pa)** es la unidad de la Presión." },
            { texto: "Newton (N)", esCorrecta: true, explicacion: "¡Correcto! La Fuerza se mide en Newton (N), equivalente a kg·m/s²." },
            { texto: "Joule (J)", esCorrecta: false, explicacion: "Incorrecto. El Joule es la unidad de la Energía." }
        ],
        respuestaCorrectaTexto: "Newton (N)"
    },
    {
        problema: {
            titulo: "Trabajo / Energía",
            formula: "$$ W = F \\cdot d $$",
            texto: "Calcula el **Trabajo** realizado por una fuerza de **$10 \\text{ N}$** al desplazar un objeto **$5 \\text{ m}$**.",
            resultado: "50"
        },
        opciones: [
            { texto: "$$ \\text{Vatio (W)} $$", esCorrecta: false, explicacion: "Incorrecto. El Vatio es la unidad de la Potencia." },
            { texto: "$$ \\text{Joule (J)} $$", esCorrecta: true, explicacion: "¡Correcto! El Trabajo se mide en **Joule (J)**, que es equivalente a $\\text{N} \\cdot \\text{m}$." },
            { texto: "$$ \\text{Tesla (T)} $$", esCorrecta: false, explicacion: "Incorrecto. El Tesla es la unidad de la Inducción Magnética." },
            { texto: "$$ \\text{Coulomb (C)} $$", esCorrecta: false, explicacion: "Incorrecto. El Coulomb es la unidad de la Carga Eléctrica." }
        ],
        respuestaCorrectaTexto: "Joule (J)"
    },
    {
        problema: {
            titulo: "Presión",
            formula: "$$ P = F / A $$",
            texto: "Calcula la **Presión** ejercida por una fuerza de **$200 \\text{ N}$** sobre un área de **$0.5 \\text{ m}^2$**.",
            resultado: "400"
        },
        opciones: [
            { texto: "$$ \\text{Newton (N)} $$", esCorrecta: false, explicacion: "Incorrecto. El Newton es la unidad de la Fuerza." },
            { texto: "$$ \\text{Pascal (Pa)} $$", esCorrecta: true, explicacion: "¡Correcto! La Presión ($P=F/A$) se mide en **Pascal (Pa)**, que es equivalente a $\\text{N}/\\text{m}^2$." },
            { texto: "$$ \\text{Joule (J)} $$", esCorrecta: false, explicacion: "Incorrecto. El Joule es la unidad de la Energía." },
            { texto: "$$ \\text{Hertz (Hz)} $$", esCorrecta: false, explicacion: "Incorrecto. El Hertz es la unidad de la Frecuencia." }
        ],
        respuestaCorrectaTexto: "Pascal (Pa)"
    },
    {
        problema: {
            titulo: "Potencia",
            formula: "$$ P = W / t $$",
            texto: "Calcula la **Potencia** consumida si se realiza un **Trabajo** de **$1000 \\text{ J}$** en **$10 \\text{ s}$**.",
            resultado: "100"
        },
        opciones: [
            { texto: "$$ \\text{Voltio (V)} $$", esCorrecta: false, explicacion: "Incorrecto. El Voltio es la unidad del Potencial Eléctrico." },
            { texto: "$$ \\text{Vatio (W)} $$", esCorrecta: true, explicacion: "¡Correcto! La Potencia ($P=W/t$) se mide en **Vatio (W)**, que es equivalente a $\\text{J}/\\text{s}$." },
            { texto: "$$ \\text{Ohmio } (\\Omega) $$", esCorrecta: false, explicacion: "Incorrecto. El Ohmio es la unidad de la Resistencia Eléctrica." },
            { texto: "$$ \\text{Ampere (A)} $$", esCorrecta: false, explicacion: "Incorrecto. El Ampere es la unidad de la Corriente Eléctrica." }
        ],
        respuestaCorrectaTexto: "Vatio (W)"
    },
    {
        problema: {
            titulo: "Velocidad / Rapidez",
            formula: "$$ v = \\Delta x / \\Delta t $$",
            texto: "Calcula la **Velocidad** promedio de un coche que recorre **$150 \\text{ metros}$** en **$30 \\text{ segundos}$**.",
            resultado: "5"
        },
        opciones: [
            { texto: "$$ \\text{m}/\\text{s} $$", esCorrecta: true, explicacion: "¡Correcto! La Velocidad se mide en **metros por segundo ($\\text{m}/\\text{s}$)**, que es la unidad fundamental para distancia/tiempo." },
            { texto: "$$ \\text{m}/\\text{s}^2 $$", esCorrecta: false, explicacion: "Incorrecto. $\\text{m}/\\text{s}^2$ es la unidad de la Aceleración." },
            { texto: "$$ \\text{Segundo (s)} $$", esCorrecta: false, explicacion: "Incorrecto. El Segundo es la unidad del Tiempo." },
            { texto: "$$ \\text{Joule (J)} $$", esCorrecta: false, explicacion: "Incorrecto. El Joule es la unidad de la Energía." }
        ],
        respuestaCorrectaTexto: "m/s"
    },
    {
        problema: {
            titulo: "Cantidad de Movimiento",
            formula: "$$ p = m \\cdot v $$",
            texto: "Determina la **Cantidad de Movimiento** de un objeto de **$2 \\text{ kg}$** que viaja a **$8 \\text{ m/s}$**.",
            resultado: "16"
        },
        opciones: [
            { texto: "$$ \\text{Newton (N)} $$", esCorrecta: false, explicacion: "Incorrecto. El Newton es la unidad de Fuerza." },
            { texto: "$$ \\text{kg} \\cdot \\text{m}/\\text{s} $$", esCorrecta: true, explicacion: "¡Correcto! La Cantidad de Movimiento ($p=m \\cdot v$) se mide en **$\\text{kg} \\cdot \\text{m}/\\text{s}$**." },
            { texto: "$$ \\text{Newton} \\cdot \\text{segundo} $$", esCorrecta: false, explicacion: "Incorrecto, aunque $\\text{N} \\cdot \\text{s}$ es equivalente, $\\text{kg} \\cdot \\text{m}/\\text{s}$ es la unidad SI base." },
            { texto: "$$ \\text{Joule (J)} $$", esCorrecta: false, explicacion: "Incorrecto. El Joule es la unidad de la Energía o Trabajo." }
        ],
        respuestaCorrectaTexto: "kg \\cdot m/s"
    },
    {
        problema: {
            titulo: "Frecuencia",
            formula: "$$ f = 1 / T $$",
            texto: "Si un evento ocurre **$5$ veces** en **$1$ segundo**, ¿cuál es su **Frecuencia** en $\\text{s}^{-1}$?",
            resultado: "5"
        },
        opciones: [
            { texto: "$$ \\text{Joule (J)} $$", esCorrecta: false, explicacion: "Incorrecto. El Joule es la unidad de la Energía." },
            { texto: "$$ \\text{Hertz (Hz)} $$", esCorrecta: true, explicacion: "¡Correcto! La Frecuencia ($f=1/T$) se mide en **Hertz (Hz)**, que es equivalente a $\\text{s}^{-1}$." },
            { texto: "$$ \\text{Segundo (s)} $$", esCorrecta: false, explicacion: "Incorrecto. El Segundo es la unidad del Periodo." },
            { texto: "$$ \\text{Ohmio } (\\Omega) $$", esCorrecta: false, explicacion: "Incorrecto. El Ohmio es la unidad de la Resistencia Eléctrica." }
        ],
        respuestaCorrectaTexto: "Hertz (Hz)"
    },
    // INICIO: Problemas adicionales
    {
        problema: {
            titulo: "Carga Eléctrica",
            formula: "$$ Q = I \\cdot t $$",
            texto: "Determina la **Carga Eléctrica** que pasa por un circuito con una corriente de **$2 \\text{ A}$** durante **$30 \\text{ s}$**.",
            resultado: "60"
        },
        opciones: [
            { texto: "$$ \\text{Voltio (V)} $$", esCorrecta: false, explicacion: "Incorrecto. El Voltio es la unidad del Potencial Eléctrico." },
            { texto: "$$ \\text{Ohmio } (\\Omega) $$", esCorrecta: false, explicacion: "Incorrecto. El Ohmio es la unidad de la Resistencia Eléctrica." },
            { texto: "$$ \\text{Faradio (F)} $$", esCorrecta: false, explicacion: "Incorrecto. El Faradio es la unidad de la Capacidad Eléctrica." },
            { texto: "$$ \\text{Coulomb (C)} $$", esCorrecta: true, explicacion: "¡Correcto! La Carga Eléctrica ($Q=I \\cdot t$) se mide en **Coulomb (C)**, equivalente a $\\text{A} \\cdot \\text{s}$." }
        ],
        respuestaCorrectaTexto: "Coulomb (C)"
    },
    {
        problema: {
            titulo: "Resistencia Eléctrica",
            formula: "$$ R = V / I $$",
            texto: "Calcula la **Resistencia** de un conductor si una diferencia de potencial de **$12 \\text{ V}$** genera una corriente de **$3 \\text{ A}$**.",
            resultado: "4"
        },
        opciones: [
            { texto: "$$ \\text{Voltio (V)} $$", esCorrecta: false, explicacion: "Incorrecto. El Voltio es la unidad del Potencial Eléctrico." },
            { texto: "$$ \\text{Vatio (W)} $$", esCorrecta: false, explicacion: "Incorrecto. El Vatio es la unidad de la Potencia." },
            { texto: "$$ \\text{Ohmio } (\\Omega) $$", esCorrecta: true, explicacion: "¡Correcto! La Resistencia ($R=V/I$) se mide en **Ohmio ($\\Omega$)**, equivalente a $\\text{V}/\\text{A}$." },
            { texto: "$$ \\text{Ampere (A)} $$", esCorrecta: false, explicacion: "Incorrecto. El Ampere es la unidad de la Corriente Eléctrica." }
        ],
        respuestaCorrectaTexto: "Ohmio ($\\Omega$)"
    },
    {
        problema: {
            titulo: "Aceleración",
            formula: "$$ a = \\Delta v / \\Delta t $$",
            texto: "Calcula la **Aceleración** de un vehículo que pasa de **$10 \\text{ m/s}$** a **$30 \\text{ m/s}$** en **$5 \\text{ s}$**.",
            resultado: "4"
        },
        opciones: [
            { texto: "$$ \\text{m}/\\text{s} $$", esCorrecta: false, explicacion: "Incorrecto. $\\text{m}/\\text{s}$ es la unidad de la Velocidad." },
            { texto: "$$ \\text{Segundo (s)} $$", esCorrecta: false, explicacion: "Incorrecto. El Segundo es la unidad del Tiempo." },
            { texto: "$$ \\text{m}/\\text{s}^2 $$", esCorrecta: true, explicacion: "¡Correcto! La Aceleración ($a=\\Delta v / \\Delta t$) se mide en **metros por segundo al cuadrado ($\\text{m}/\\text{s}^2$)**." },
            { texto: "$$ \\text{Newton (N)} $$", esCorrecta: false, explicacion: "Incorrecto. El Newton es la unidad de la Fuerza." }
        ],
        respuestaCorrectaTexto: "m/s$^2$"
    },
    {
        problema: {
            titulo: "Potencial Eléctrico",
            formula: "$$ V = W / Q $$",
            texto: "Determina el **Potencial Eléctrico** si se realiza un Trabajo de **$100 \\text{ J}$** para mover una carga de **$5 \\text{ C}$**.",
            resultado: "20"
        },
        opciones: [
            { texto: "$$ \\text{Ohmio } (\\Omega) $$", esCorrecta: false, explicacion: "Incorrecto. El Ohmio es la unidad de la Resistencia Eléctrica." },
            { texto: "$$ \\text{Ampere (A)} $$", esCorrecta: false, explicacion: "Incorrecto. El Ampere es la unidad de la Corriente Eléctrica." },
            { texto: "$$ \\text{Voltio (V)} $$", esCorrecta: true, explicacion: "¡Correcto! El Potencial Eléctrico ($V=W/Q$) se mide en **Voltio (V)**, equivalente a $\\text{J}/\\text{C}$." },
            { texto: "$$ \\text{Vatio (W)} $$", esCorrecta: false, explicacion: "Incorrecto. El Vatio es la unidad de la Potencia." }
        ],
        respuestaCorrectaTexto: "Voltio (V)"
    }
    // FIN: Problemas adicionales
];

// ... (Resto de variables de Sonidos) ...
const SCorrecto = new Audio('Sonidos/SCorrecto.mp3');
const SError = new Audio('Sonidos/SError.mp3');
const SFinal = new Audio('Sonidos/SFinal.mp3');

SCorrecto.volume = 0.6;
SError.volume = 0.5;
SFinal.volume = 0.8;
SCorrecto.preload = 'auto';
SError.preload = 'auto';
SFinal.preload = 'auto';


// ---------------------------------------------------------------------
// 1. VARIABLES DE ESTADO Y REFERENCIAS
// ---------------------------------------------------------------------

const NUM_QUESTIONS_TO_PLAY = 10; // Aumentado a 10 problemas
let problemasMezclados = [];
let indiceActual = 0;
let score = 0;
let juegoTerminado = false;
let timerPista; // Variable para el temporizador de la pista automática

// Referencias a elementos del DOM (IDs del HTML)
const contenedorPuntaje = document.getElementById('contenedorPuntaje');
const contenedorProblema = document.getElementById('ProblemaFisico');
const contenedorOpciones = document.querySelector('.d-flex.justify-content-center.gap-3');
const btnPista = document.getElementById('btnPista');
const errorCuerpo = document.getElementById('errorCuerpo');
const mensajeFinal = document.getElementById('mensajeFinal');

// Referencias a Modales de Bootstrap
const modalIntroduccion = new bootstrap.Modal(document.getElementById('modalIntroduccion'));
const modalCorrecto = new bootstrap.Modal(document.getElementById('modalCorrecto'), { keyboard: false });
const modalError = new bootstrap.Modal(document.getElementById('modalError'));
const modalFinal = new bootstrap.Modal(document.getElementById('modalFinal'), { backdrop: 'static', keyboard: false });


// ---------------------------------------------------------------------
// 2. FUNCIONES DE UTILIDAD (SIN CAMBIOS)
// ---------------------------------------------------------------------

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Renderiza dinámicamente el contenido del problema en el HTML y ACTUALIZA EL TÍTULO.
 */
function renderizarProblema(problema) {

    const contenedor = document.getElementById("ProblemaFisico");

    contenedor.innerHTML = `
        <div class="card shadow-lg border-0 bg-light">
            <div class="card-body">

                <h4 class="fw-bold text-primary mb-3 d-flex align-items-center">
                    <i class="bi bi-lightning-charge-fill me-2"></i> ${problema.titulo}
                </h4>

                <p class="text-center fs-5 mb-3">
                    ${problema.formula}
                </p>

                <p class="fs-5">
                    ${problema.texto}
                </p>

                <div class="resultado text-center mt-4 p-3 rounded bg-primary bg-opacity-10">
                    <p class="h4 m-0">
                        Resultado: <strong>${problema.resultado}</strong>
                    </p>
                </div>

            </div>
        </div>
    `;

    MathJax.typesetPromise();

}

function actualizarPuntaje() {
    if (contenedorPuntaje) {
        contenedorPuntaje.innerHTML = `<i class="bi bi-star-fill text-warning"></i> Puntaje: ${score}/${NUM_QUESTIONS_TO_PLAY}`;
    }
}

function setBotonesDisabled(disabled) {
    if (contenedorOpciones) {
        contenedorOpciones.querySelectorAll('.btn-option').forEach(btn => {
            btn.disabled = disabled;
        });
    }

    if (btnPista) {
        btnPista.disabled = disabled;
        if (disabled) {
            btnPista.classList.add('disabled', 'opacity-50');
        } else {
            btnPista.classList.remove('disabled', 'opacity-50');
        }
    }
}

/**
 * Limpia las clases de resultado y animación de los botones.
 */
function limpiarClasesResultado() {
    if (contenedorOpciones) {
        contenedorOpciones.querySelectorAll('.btn-option').forEach(btn => {
            btn.classList.remove('correct', 'incorrect', 'ayuda-correcta', 'btn-secondary');
            // Aseguramos que regresen al color principal (Bootstrap 5.x)
            btn.classList.add('btn-primary');
        });
    }
}

// ---------------------------------------------------------------------
// 3. LÓGICA DEL JUEGO
// ---------------------------------------------------------------------

/**
 * Carga el problema actual en la interfaz.
 */
function cargarProblema() {
    // Limpiar el temporizador anterior
    clearTimeout(timerPista);

    if (indiceActual >= NUM_QUESTIONS_TO_PLAY) {
        finalizarJuego();
        return;
    }

    modalFinal.hide();

    const problema = problemasMezclados[indiceActual];

    // 1. Renderizar el problema y la fórmula
    renderizarProblema(problema.problema);

    // 2. Crear botones de opción
    if (contenedorOpciones) {
        contenedorOpciones.innerHTML = '';
    }

    let opcionesParaMezclar = [...problema.opciones];
    shuffle(opcionesParaMezclar);

    opcionesParaMezclar.forEach((opcion) => {
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-option', 'btn-lg', 'shadow-sm', 'btn-primary');
        button.innerHTML = opcion.texto;
        button.setAttribute('data-correct', opcion.esCorrecta);
        button.setAttribute('data-explicacion', opcion.explicacion);
        button.addEventListener('click', () => verificarRespuesta(button));
        if (contenedorOpciones) {
            contenedorOpciones.appendChild(button);
        }
    });

    setBotonesDisabled(false);
    limpiarClasesResultado();

    if (typeof MathJax !== 'undefined') {
        MathJax.typesetPromise([contenedorOpciones]);
    }

    // 🚩 CORRECCIÓN 3: Iniciar el temporizador de 40 segundos para la pista automática
    timerPista = setTimeout(() => {
        // Verifica si el juego no ha terminado y la respuesta no se ha dado
        if (!juegoTerminado) {
            mostrarPista();
            // Deshabilitamos la pista del botón para que no se pueda usar dos veces
            if (btnPista) {
                btnPista.disabled = true;
                btnPista.classList.add('disabled', 'opacity-50');
            }
        }
    }, 40000); // 40 segundos
}

/**
 * Verifica si la respuesta seleccionada es correcta.
 */
function verificarRespuesta(botonClickeado) {
    if (juegoTerminado) return;

    // Detener el temporizador de la pista
    clearTimeout(timerPista);

    setBotonesDisabled(true);

    const esCorrecta = botonClickeado.getAttribute('data-correct') === 'true';
    const explicacion = botonClickeado.getAttribute('data-explicacion');
    const problema = problemasMezclados[indiceActual];

    if (esCorrecta) {
        score++;
        actualizarPuntaje();

        SCorrecto.currentTime = 0;
        SCorrecto.play();

        modalCorrecto.show();

        setTimeout(() => {
            modalCorrecto.hide();
            indiceActual++;
            cargarProblema();
        }, 1500);

    } else {
        // La explicación ya contiene la corrección, ya que proviene de la opción clicada.
        if (errorCuerpo) {
            // Buscamos la explicación de la respuesta correcta para el modal de error
            const respuestaCorrectaObj = problema.opciones.find(op => op.esCorrecta);

            errorCuerpo.innerHTML = `<p class="text-white">❌ **Tu respuesta es incorrecta.**</p>
                                     <p class="mt-3 text-white">**Unidad correcta:** ${respuestaCorrectaObj.texto}.</p>
                                     <p class="mt-3 text-white">**Explicación:** ${respuestaCorrectaObj.explicacion}</p>`;
        }

        SError.currentTime = 0;
        SError.play();
        modalError.show();

        function handleModalHidden() {
            indiceActual++;
            cargarProblema();
            document.getElementById('modalError').removeEventListener('hidden.bs.modal', handleModalHidden);
        }
        document.getElementById('modalError').addEventListener('hidden.bs.modal', handleModalHidden);
    }
}

/**
 * Implementa la funcionalidad de Pista: ilumina el botón correcto.
 */


function finalizarJuego() {
    clearTimeout(timerPista); // Asegurar que el temporizador finalice
    SFinal.currentTime = 0;
    SFinal.play();
    juegoTerminado = true;
    setBotonesDisabled(true);

    if (mensajeFinal) {
        mensajeFinal.innerHTML = `Tu puntaje final fue de <strong>${score}/${NUM_QUESTIONS_TO_PLAY}</strong>. ¡Excelente trabajo en unidades de física!`;
    }

    modalFinal.show();
}

/**
 * Inicializa el juego.
 */
function inicializarJuego() {
    indiceActual = 0;
    score = 0;
    juegoTerminado = false;

    problemasMezclados = [...problemasFisica];
    shuffle(problemasMezclados);
    problemasMezclados = problemasMezclados.slice(0, NUM_QUESTIONS_TO_PLAY);

    actualizarPuntaje();



    cargarProblema();
}

// ---------------------------------------------------------------------
// 4. LISTENERS DE EVENTOS (EJECUCIÓN)
// ---------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    // ... (listeners existentes) ...

    // 1. Mostrar el modal de introducción al inicio
    modalIntroduccion.show();

    // 2. Listener para el botón de 'Comenzar' en el modal de introducción
    // Asegúrate de usar el ID si lo has cambiado en el HTML a 'btnEmpezar'
    // Si usas el código anterior, este selector funciona:
    const btnEmpezar = document.querySelector('#modalIntroduccion .btn-success');
    if (btnEmpezar) {
        btnEmpezar.addEventListener('click', () => {
            modalIntroduccion.hide(); // Ocultar el modal antes de iniciar
            inicializarJuego();
        });
    }

    // 3. Listener para el botón de pista
    if (btnPista) {
        // Usamos la misma función mostrarPista para el clic manual.
        btnPista.addEventListener('click', mostrarPista);
    }

    // 4. Listener para el botón de 'Repetir' en el modal final
    const btnRepetir = document.getElementById('btnRepetir');
    if (btnRepetir) {
        btnRepetir.addEventListener('click', () => {
            modalFinal.hide();
            inicializarJuego();
        });
    }
});