// Array de problemas de física para identificar la unidad SI correcta.
const problemasFisica = [
    {
        problema: {
            titulo: "Fuerza",
            formula: "$$ F = m \\cdot a $$",
            texto: "Calcula la <strong>Fuerza</strong> necesaria para mover un objeto de <strong>15 kg</strong> con una aceleración de <strong>4 m/s²</strong>.",
            resultado: "60"
        },
        opciones: [
            { texto: "kg·m", esCorrecta: false, explicacion: "Incorrecto. Aunque contiene las magnitudes de masa y distancia, le falta el término tiempo. La fuerza requiere unidades de <strong>kg·m/s²</strong>" },
            { texto: "Pascal", esCorrecta: false, explicacion: "Incorrecto. El Pascal es unidad de <strong>presión</strong>, no de fuerza." },
            { texto: "Newton", esCorrecta: true, explicacion: "¡Correcto! La fuerza se expresa en <strong>Newtons (N)</strong>, equivalentes a <strong>kg·m/s²</strong> según la segunda ley de Newton." },
            { texto: "Joule", esCorrecta: false, explicacion: "Incorrecto. El Joule es la unidad de <strong>energía</strong> o trabajo." }
        ],
        respuestaCorrectaTexto: "Newton"
    },

    {
        problema: {
            titulo: "Trabajo / Energía",
            formula: "$$ W = F \\cdot d $$",
            texto: "Calcula el <strong>Trabajo</strong> realizado por una fuerza de <strong>10 N</strong> al desplazar un objeto <strong>5 m</strong>.",
            resultado: "50"
        },
        opciones: [
            { texto: "Vatio", esCorrecta: false, explicacion: "Incorrecto. El Vatio es la unidad de <strong>potencia</strong> (J/s), no de trabajo." },
            { texto: "Joule", esCorrecta: true, explicacion: "¡Correcto! El trabajo se mide en <strong>Joules (J)</strong>, resultado de multiplicar una fuerza (N) por una distancia (m)." },
            { texto: "Tesla", esCorrecta: false, explicacion: "Incorrecto. El Tesla es la unidad del <strong>campo magnético</strong>." },
            { texto: "Coulomb", esCorrecta: false, explicacion: "Incorrecto. El Coulomb es la unidad de <strong>carga eléctrica</strong>." }
        ],
        respuestaCorrectaTexto: "Joule"
    },

    {
        problema: {
            titulo: "Presión",
            formula: "$$ P = F / A $$",
            texto: "Calcula la <strong>Presión</strong> ejercida por una fuerza de <strong>200 N</strong> sobre un área de <strong>0.5 m²</strong>.",
            resultado: "400"
        },
        opciones: [
            { texto: "Newton", esCorrecta: false, explicacion: "Incorrecto. El Newton mide <strong>fuerza</strong>, no presión." },
            { texto: "Pascal", esCorrecta: true, explicacion: "¡Correcto! La presión se mide en <strong>Pascales (Pa)</strong>, que equivalen a <strong>N/m²<strong> según su definición." },
            { texto: "Joule", esCorrecta: false, explicacion: "Incorrecto. El Joule es unidad de <strong>energía</strong>." },
            { texto: "Hertz", esCorrecta: false, explicacion: "Incorrecto. El Hertz mide <strong>frecuencia</strong>." }
        ],
        respuestaCorrectaTexto: "Pascal"
    },

    {
        problema: {
            titulo: "Potencia",
            formula: "$$ P = W / t $$",
            texto: "Calcula la <strong>Potencia</strong> consumida si se realiza un <strong>Trabajo</strong> de <strong>1000 J</strong> en <strong>10 s</strong>",
            resultado: "100"
        },
        opciones: [
            { texto: "Voltio", esCorrecta: false, explicacion: "Incorrecto. El Voltio mide <strong>potencial eléctrico</strong>, no potencia." },
            { texto: "Vatio", esCorrecta: true, explicacion: "¡Correcto! La potencia se expresa en <strong>Vatios (W)</strong>, equivalentes a Joules por segundo." },
            { texto: "Ohmio", esCorrecta: false, explicacion: "Incorrecto. El Ohmio es la unidad de <strong>resistencia eléctrica</strong>." },
            { texto: "Ampere", esCorrecta: false, explicacion: "Incorrecto. El Ampere mide <strong>corriente eléctrica</strong>." }
        ],
        respuestaCorrectaTexto: "Vatio"
    },

    {
        problema: {
            titulo: "Velocidad / Rapidez",
            formula: "$$ v = \\Delta x / \\Delta t $$",
            texto: "Calcula la <strong>Velocidad</strong> promedio de un coche que recorre <strong>150 m</strong> en <strong>30 s</strong>.",
            resultado: "5"
        },
        opciones: [
            { texto: "m/s", esCorrecta: true, explicacion: "¡Correcto! La velocidad en el SI se expresa en <strong>metros por segundo (m/s)</strong>." },
            { texto: "m/s²", esCorrecta: false, explicacion: "Incorrecto. m/s² representa <strong>aceleración</strong>, no velocidad." },
            { texto: "Segundo", esCorrecta: false, explicacion: "Incorrecto. Esta es la unidad de <strong>tiempo</strong>." },
            { texto: "Joule", esCorrecta: false, explicacion: "Incorrecto. El Joule es la unidad de <strong>energía</strong>." }
        ],
        respuestaCorrectaTexto: "m/s"
    },

    {
        problema: {
            titulo: "Cantidad de Movimiento",
            formula: "$$ p = m \\cdot v $$",
            texto: "Determina la <strong>Cantidad de Movimiento</strong> de un objeto de <strong>2 kg</strong> que viaja a <strong>8 m/s</strong>.",
            resultado: "16"
        },
        opciones: [
            { texto: "Newton", esCorrecta: false, explicacion: "Incorrecto. El Newton mide <strong>fuerza</strong>, no cantidad de movimiento." },
            { texto: "kg·m/s", esCorrecta: true, explicacion: "¡Correcto! La cantidad de movimiento se mide en <strong>kg·m/s</strong>, resultado directo de multiplicar masa por velocidad." },
            { texto: "Newton·seg", esCorrecta: false, explicacion: "Casi. Es una unidad equivalente, pero la unidad fundamental en el SI es <strong>kg·m/s</strong>." },
            { texto: "Joule", esCorrecta: false, explicacion: "Incorrecto. El Joule es unidad de <strong>energía</strong>." }
        ],
        respuestaCorrectaTexto: "kg · m/s"
    },

    {
        problema: {
            titulo: "Frecuencia",
            formula: "$$ f = 1 / T $$",
            texto: "Si un evento ocurre <strong>5 veces</strong> en <strong>1 segundo</strong>, ¿cuál es su <strong>Frecuencia</strong> en s<sup>-1</sup>)?",
            resultado: "5"
        },
        opciones: [
            { texto: "Joule", esCorrecta: false, explicacion: "Incorrecto. El Joule mide <strong>energía</strong>, no repetición de eventos." },
            { texto: "Hertz", esCorrecta: true, explicacion: "¡Correcto! La frecuencia se mide en <strong>Hertz (Hz)</strong>, equivalente a eventos por segundo s<sup>-1</sup>." },
            { texto: "Segundo", esCorrecta: false, explicacion: "Incorrecto. El segundo mide <strong>tiempo</strong>." },
            { texto: "Ohmio", esCorrecta: false, explicacion: "Incorrecto. El Ohmio es unidad de <strong>resistencia</strong>." }
        ],
        respuestaCorrectaTexto: "Hertz"
    },

    {
        problema: {
            titulo: "Carga Eléctrica",
            formula: "$$ Q = I \\cdot t $$",
            texto: "Determina la <strong>Carga Eléctrica</strong> que pasa por un circuito con una corriente de <strong>2 A</strong> durante <strong>30 s</strong>.",
            resultado: "60"
        },
        opciones: [
            { texto: "Voltio", esCorrecta: false, explicacion: "Incorrecto. El Voltio mide <strong>diferencia de potencial</strong>." },
            { texto: "Ohmio", esCorrecta: false, explicacion: "Incorrecto. El Ohmio mide <strong>resistencia eléctrica</strong>." },
            { texto: "Faradio", esCorrecta: false, explicacion: "Incorrecto. El Faradio mide <strong>capacitancia</strong>." },
            { texto: "Coulomb", esCorrecta: true, explicacion: "¡Correcto! La carga eléctrica se mide en <strong>Coulombs (C)</strong>, resultado de multiplicar corriente (A) por tiempo (s)." }
        ],
        respuestaCorrectaTexto: "Coulomb"
    },

    {
        problema: {
            titulo: "Resistencia Eléctrica",
            formula: "$$ R = V / I $$",
            texto: "Calcula la <strong>Resistencia</strong> de un conductor si una diferencia de potencial de <strong>12 V</strong> genera una corriente de <strong>3 A</strong>.",
            resultado: "4"
        },
        opciones: [
            { texto: "Voltio", esCorrecta: false, explicacion: "Incorrecto. Esto mide <strong>voltaje</strong>, no resistencia." },
            { texto: "Vatio", esCorrecta: false, explicacion: "Incorrecto. Esto mide <strong>potencia</strong>." },
            { texto: "Ohmio", esCorrecta: true, explicacion: "¡Correcto! La resistencia se mide en <strong>Ohmios (Ω)</strong>, equivalentes a Voltios entre Amperes." },
            { texto: "Ampere", esCorrecta: false, explicacion: "Incorrecto. El Ampere es unidad de <strong>corriente</strong>." }
        ],
        respuestaCorrectaTexto: "Ohmio"
    },

    {
        problema: {
            titulo: "Aceleración",
            formula: "$$ a = \\Delta v / \\Delta t $$",
            texto: "Calcula la <strong>Aceleración</strong> de un vehículo que pasa de <strong>10 m/s</strong> a <strong>30 m/s</strong> en <strong>5 s</strong>.",
            resultado: "4"
        },
        opciones: [
            { texto: "m/s", esCorrecta: false, explicacion: "Incorrecto. Esta es la unidad de <strong>velocidad</strong>." },
            { texto: "Segundo", esCorrecta: false, explicacion: "Incorrecto. Es la unidad de <strong>tiempo</strong>." },
            { texto: "m/s²", esCorrecta: true, explicacion: "¡Correcto! La aceleración se mide en <strong>m/s²</strong>, ya que es un cambio de velocidad por unidad de tiempo." },
            { texto: "Newton (N)", esCorrecta: false, explicacion: "Incorrecto. El Newton mide <strong>fuerza</strong>." }
        ],
        respuestaCorrectaTexto: "m/s²"
    },

    {
        problema: {
            titulo: "Potencial Eléctrico",
            formula: "$$ V = W / Q $$",
            texto: "Determina el <strong>Potencial Eléctrico</strong> si se realiza un Trabajo de <strong>100 J</strong> para mover una carga de <strong>5 C</strong>.",
            resultado: "20"
        },
        opciones: [
            { texto: "Ohmio", esCorrecta: false, explicacion: "Incorrecto. El Ohmio mide <strong>resistencia</strong>." },
            { texto: "Ampere", esCorrecta: false, explicacion: "Incorrecto. El Ampere mide <strong>corriente</strong>." },
            { texto: "Voltio", esCorrecta: true, explicacion: "¡Correcto! El potencial eléctrico se mide en <strong>Voltios (V)</strong>, definidos como Joules por Coulomb." },
            { texto: "Vatio", esCorrecta: false, explicacion: "Incorrecto. El Vatio mide <strong>potencia</strong>." }
        ],
        respuestaCorrectaTexto: "Voltio"
    },
    {
        problema: {
            titulo: "Trabajo Mecánico",
            formula: "$$ W = F \\cdot d $$",
            texto: "Calcula el <strong>Trabajo</strong> realizado por una fuerza de <strong>20 N</strong> que empuja un objeto <strong>4 m</strong>.",
            resultado: "80"
        },
        opciones: [
            { texto: "Joule", esCorrecta: true, explicacion: "¡Correcto! El trabajo se expresa en <strong>Joules (J)</strong>." },
            { texto: "Newton", esCorrecta: false, explicacion: "Incorrecto, esto mide <strong>fuerza</strong>." },
            { texto: "Watt", esCorrecta: false, explicacion: "Incorrecto, esto es <strong>potencia</strong>." },
            { texto: "kg", esCorrecta: false, explicacion: "Incorrecto. El kilogramo mide <strong>masa</strong>." }
        ],
        respuestaCorrectaTexto: "Joule"
    },

    {
        problema: {
            titulo: "Energía Cinética",
            formula: "$$ K = \\frac{1}{2} m v^2 $$",
            texto: "Determina la <strong>Energía Cinética</strong> de un objeto de <strong>3 kg</strong> que se mueve a <strong>6 m/s</strong>.",
            resultado: "54"
        },
        opciones: [
            { texto: "Joule", esCorrecta: true, explicacion: "¡Correcto! La energía cinética se mide en <strong>Joules</strong>." },
            { texto: "Watt", esCorrecta: false, explicacion: "Incorrecto. El Watt mide <strong>potencia</strong>." },
            { texto: "Newton", esCorrecta: false, explicacion: "Incorrecto. El Newton mide <strong>fuerza</strong>." },
            { texto: "kg·m/s", esCorrecta: false, explicacion: "Incorrecto. Esa es unidad de <strong>cantidad de movimiento</strong>." }
        ],
        respuestaCorrectaTexto: "Joule"
    },

    {
        problema: {
            titulo: "Energía Potencial Gravitacional",
            formula: "$$ U = m g h $$",
            texto: "Calcula la <strong>Energía Potencial</strong> de un objeto de <strong>5 kg</strong> elevado a <strong>10 m</strong> de altura. Usa g = 9.8.",
            resultado: "490"
        },
        opciones: [
            { texto: "Newton", esCorrecta: false, explicacion: "Incorrecto. Esto mide fuerza." },
            { texto: "Joule", esCorrecta: true, explicacion: "¡Correcto! La energía potencial se mide en <strong>Joules</strong>." },
            { texto: "Watt", esCorrecta: false, explicacion: "Incorrecto. Es unidad de potencia." },
            { texto: "Pascal", esCorrecta: false, explicacion: "Incorrecto. El Pascal mide presión." }
        ],
        respuestaCorrectaTexto: "Joule"
    },

    {
        problema: {
            titulo: "Presión",
            formula: "$$ P = F / A $$",
            texto: "Un objeto ejerce una fuerza de <strong>200 N</strong> sobre un área de <strong>4 m²</strong>. Calcula la <strong>Presión</strong> ejercida.",
            resultado: "50"
        },
        opciones: [
            { texto: "Pascal", esCorrecta: true, explicacion: "¡Correcto! La presión se mide en <strong>Pascales</strong> (N/m²)." },
            { texto: "Newton", esCorrecta: false, explicacion: "Incorrecto. Esta es fuerza." },
            { texto: "Watt", esCorrecta: false, explicacion: "Incorrecto. Mide potencia." },
            { texto: "Joule", esCorrecta: false, explicacion: "Incorrecto. Mide energía." }
        ],
        respuestaCorrectaTexto: "Pascal"
    },

    {
        problema: {
            titulo: "Potencia",
            formula: "$$ P = W / t $$",
            texto: "Se realizan <strong>300 J</strong> de trabajo en <strong>10 s</strong>. Calcula la <strong>Potencia</strong> generada.",
            resultado: "30"
        },
        opciones: [
            { texto: "Watt", esCorrecta: true, explicacion: "¡Correcto! La potencia se mide en <strong>Watts</strong>." },
            { texto: "Joule", esCorrecta: false, explicacion: "Incorrecto. Eso es trabajo o energía." },
            { texto: "Newton", esCorrecta: false, explicacion: "Mide fuerza, no potencia." },
            { texto: "m/s²", esCorrecta: false, explicacion: "Unidad de aceleración." }
        ],
        respuestaCorrectaTexto: "Watt"
    },

    {
        problema: {
            titulo: "Densidad",
            formula: "$$ \\rho = m / V $$",
            texto: "Calcula la <strong>Densidad</strong> de un material cuya masa es <strong>600 kg</strong> y su volumen es <strong>3 m³</strong>.",
            resultado: "200"
        },
        opciones: [
            { texto: "kg/m³", esCorrecta: true, explicacion: "¡Correcto! La densidad se expresa en <strong>kg/m³</strong>." },
            { texto: "kg·m/s", esCorrecta: false, explicacion: "Incorrecto. Es cantidad de movimiento." },
            { texto: "Pascal", esCorrecta: false, explicacion: "Incorrecto. Esto es presión." },
            { texto: "Joule", esCorrecta: false, explicacion: "Incorrecto. Es energía." }
        ],
        respuestaCorrectaTexto: "kg/m³"
    },

    {
        problema: {
            titulo: "Momento de Fuerza (Torque)",
            formula: "$$ \\tau = F \\cdot r $$",
            texto: "Calcula el <strong>Torque</strong> generado por una fuerza de <strong>50 N</strong> aplicada a <strong>0.3 m</strong> del eje.",
            resultado: "15"
        },
        opciones: [
            { texto: "Newton·metro", esCorrecta: true, explicacion: "¡Correcto! El torque se mide en <strong>N·m</strong>." },
            { texto: "Joule", esCorrecta: false, explicacion: "Aunque comparten unidades, no representan lo mismo." },
            { texto: "Watt", esCorrecta: false, explicacion: "Es potencia." },
            { texto: "Pascal", esCorrecta: false, explicacion: "Es presión." }
        ],
        respuestaCorrectaTexto: "Newton·metro"
    },

    {
        problema: {
            titulo: "Calor Transferido",
            formula: "$$ Q = m c \\Delta T $$",
            texto: "Calcula el <strong>calor</strong> absorbido por <strong>2 kg</strong> de agua (c = 4186) si su temperatura aumenta <strong>5°C</strong>.",
            resultado: "41860"
        },
        opciones: [
            { texto: "Joule", esCorrecta: true, explicacion: "¡Correcto! El calor se mide en <strong>Joules</strong>." },
            { texto: "Caloría", esCorrecta: false, explicacion: "Incorrecto. Es otra unidad, pero no del SI." },
            { texto: "Watt", esCorrecta: false, explicacion: "Es potencia, no calor." },
            { texto: "Newton", esCorrecta: false, explicacion: "Unidad de fuerza." }
        ],
        respuestaCorrectaTexto: "Joule"
    },

    {
        problema: {
            titulo: "Ley de Ohm (Corriente)",
            formula: "$$ I = V / R $$",
            texto: "Un circuito tiene <strong>12 V</strong> de voltaje y una resistencia de <strong>6 Ω</strong>. Calcula la <strong>corriente</strong>.",
            resultado: "2"
        },
        opciones: [
            { texto: "Ampere", esCorrecta: true, explicacion: "¡Correcto! La corriente se mide en <strong>Amperes</strong>." },
            { texto: "Voltio", esCorrecta: false, explicacion: "Esto es voltaje." },
            { texto: "Ohmio", esCorrecta: false, explicacion: "Esto es resistencia." },
            { texto: "Watt", esCorrecta: false, explicacion: "Unidad de potencia." }
        ],
        respuestaCorrectaTexto: "Ampere"
    },

    {
        problema: {
            titulo: "Índice de Refracción",
            formula: "$$ n = c / v $$",
            texto: "Un rayo de luz viaja en un medio a <strong>2.0 × 10<sup>8</sup> m/s</strong>. Calcula el <strong>índice de refracción</strong> usando c = 3.0 × 10<sup>8</sup>.",
            resultado: "1.5"
        },
        opciones: [
            { texto: "Sin unidad", esCorrecta: true, explicacion: "¡Correcto! El índice de refracción es una cantidad <strong>adimensional</strong>." },
            { texto: "m/s", esCorrecta: false, explicacion: "No tiene unidades." },
            { texto: "Newton", esCorrecta: false, explicacion: "No tiene relación física." },
            { texto: "Joule", esCorrecta: false, explicacion: "Unidad de energía." }
        ],
        respuestaCorrectaTexto: "Sin unidad"
    }

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
let tiempoLimiteTimer = null;

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
    limpiarClasesResultado();


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

    if (typeof MathJax !== 'undefined') {
        MathJax.typesetPromise([contenedorOpciones]);
    }

    // ------- SISTEMA DE ILUMINACIÓN AUTOMÁTICA 40s ---------
    clearTimeout(tiempoLimiteTimer);

    tiempoLimiteTimer = setTimeout(() => {
        // Buscar la opción correcta
        const btnCorrecto = contenedorOpciones.querySelector("[data-correct='true']");

        if (btnCorrecto) {
            btnCorrecto.classList.add("ayuda-correcta");
        }

    }, 40000);
}

/**
 * Verifica si la respuesta seleccionada es correcta.
 */
function verificarRespuesta(botonClickeado) {
    if (juegoTerminado) return;

    // Detener el temporizador de la pista
    // Quitar azul a todos los botones antes de marcar la respuesta
    contenedorOpciones.querySelectorAll('.btn-option').forEach(btn => {
        btn.classList.remove('btn-primary');
    });

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

            errorCuerpo.innerHTML = `
                                     <p class="mt-3 text-white"><strong>Unidad correcta:</strong> ${respuestaCorrectaObj.texto}.</p>
                                     <p class="mt-3 text-white"><strong>Explicación:</strong> ${respuestaCorrectaObj.explicacion}</p>`;
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
    document.getElementById('btnInicio').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    document.getElementById('btnRepetir').addEventListener('click', () => {
        location.reload();
    });
    document.getElementById('btnMasJuegos').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    })
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



    // 4. Listener para el botón de 'Repetir' en el modal final
    const btnRepetir = document.getElementById('btnRepetir');
    if (btnRepetir) {
        btnRepetir.addEventListener('click', () => {
            modalFinal.hide();
            inicializarJuego();
        });
    }
});