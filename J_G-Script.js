// ====== PRE-CARGA DE SONIDOS ======
const SCorrecto = new Audio('Sonidos/SCorrecto.mp3');
const SError = new Audio('Sonidos/SError.mp3');
const SFinal = new Audio('Sonidos/SFinal.mp3');

// Volúmenes (0.0 a 1.0)
SCorrecto.volume = 0.6;
SError.volume = 0.5;
SFinal.volume = 0.8;

// Pre-cargar sonidos en memoria
SCorrecto.preload = 'auto';
SError.preload = 'auto';
SFinal.preload = 'auto';
// Array de datos para el juego de Identificación de Gráficas
const funciones = [
    {
        formula: 'f(x) = ax + b',
        opciones: ["Parábola", "Hipérbola", "Función Cúbica", "Línea Recta"],
        respuestaCorrectaTexto: "Línea Recta",
        explicacion: "Una función lineal siempre forma una línea recta en el plano."
    },
    {
        formula: 'f(x) = ax^2 + bx + c',
        opciones: ["Parábola", "Hipérbola", "Función Exponencial", "Función Cúbica"],
        respuestaCorrectaTexto: "Parábola",
        explicacion: "Una función cuadrática se dibuja como una parábola."
    },
    {
        formula: 'f(x) = \\frac{a}{x}',
        opciones: ["Línea Recta", "Parábola", "Hipérbola", "Función Logarítmica"],
        respuestaCorrectaTexto: "Hipérbola",
        explicacion: "Una función inversa crea una curva que se llama hipérbola."
    },
    {
        formula: 'f(x) = a^x',
        opciones: ["Función Exponencial", "Línea Recta", "Función Logarítmica", "Función Cúbica"],
        respuestaCorrectaTexto: "Función Exponencial",
        explicacion: "Crece muy rápido y su gráfica es una curva que sube o baja exponencialmente."
    },
    {
        formula: 'f(x) = \\log_a(x)',
        opciones: ["Función Logarítmica", "Función Exponencial", "Curva de Raíz Cuadrada", "Hipérbola"],
        respuestaCorrectaTexto: "Función Logarítmica",
        explicacion: "Es la función inversa de la exponencial y crece lentamente."
    },
    {
        formula: 'f(x) = \\sqrt{x}',
        opciones: ["Curva de Raíz Cuadrada", "Parábola", "Línea Recta", "Función Logarítmica"],
        respuestaCorrectaTexto: "Curva de Raíz Cuadrada",
        explicacion: "Representa la raíz cuadrada y su gráfico sube suavemente desde el origen."
    },
    {
        formula: 'f(x) = x^3',
        opciones: ["Función Cúbica", "Línea Recta", "Senoide (Onda Senoidal)", "Parábola"],
        respuestaCorrectaTexto: "Función Cúbica",
        explicacion: "Forma una 'S' que pasa por el origen."
    },
    {
        formula: 'f(x) = \\sin(x)',
        opciones: ["Senoide (Onda Senoidal)", "Coseno", "Tangente", "Función Exponencial"],
        respuestaCorrectaTexto: "Senoide (Onda Senoidal)",
        explicacion: "Es una onda que sube y baja de forma regular."
    },
    {
        formula: "f(x) = \\cos(x)",
        opciones: ["Senoide (Onda Senoidal)", "Coseno", "Tangente", "Parábola"],
        respuestaCorrectaTexto: "Coseno",
        explicacion: "Es similar al seno pero empieza en su valor máximo."
    },
    {
        formula: "f(x) = \\tan(x)",
        opciones: ["Tangente", "Senoide (Onda Senoidal)", "Función Cúbica", "Hipérbola"],
        respuestaCorrectaTexto: "Tangente",
        explicacion: "Sube y baja muy rápido y tiene líneas verticales donde no está definida."
    }
];



// Configuración del juego
const NUM_QUESTIONS_TO_PLAY = 8; // Jugar 10 preguntas
const MAX_QUESTIONS = funciones.length; // Máximo de preguntas disponibles

// Variables de estado del juego
let funcionesMezcladas = [];
let indiceActual = 0;
let score = 0;
let juegoTerminado = false;
let tiempoLimiteTimer = null;

// Referencias a elementos del DOM
const contenedorPuntaje = document.getElementById('contenedorPuntaje');
const FuncionMatematicaDiv = document.getElementById('FuncionMatematica');
const FuncionMatematicaTexto = FuncionMatematicaDiv.querySelector('p'); // El <p> dentro del div
const contenedorOpciones = document.querySelector('.d-flex.justify-content-center.gap-3.flex-wrap'); // Contenedor de botones
const todosLosBotones = document.querySelectorAll('.btn-option'); // Los 4 botones iniciales (solo como referencia)

// Referencias a Modales (Asegúrate de tener estos modales en tu HTML)
// Nota: Tu HTML solo incluye el modal 'curvasModal', necesitarás 'modalError' y 'modalCorrecto'
// para que el script funcione correctamente.
const modalCorrecto = new bootstrap.Modal(document.getElementById('modalCorrecto') || document.createElement('div'), { keyboard: false });
const modalError = new bootstrap.Modal(document.getElementById('modalError') || document.createElement('div'));
const modalFinal = new bootstrap.Modal(document.getElementById('modalFinal') || document.createElement('div'), { backdrop: 'static', keyboard: false });

// Referencias a elementos dentro de los modales (si los tienes)
const errorCuerpo = document.getElementById('errorCuerpo') || document.createElement('div');
const mensajeFinal = document.getElementById('mensajeFinal') || document.createElement('div');
// === Variable para almacenar el tablero JSXGraph ===
let board = null;

// =========================
// DIBUJAR LA GRÁFICA
// =========================
function dibujarGrafica(formula) {

    // Elimina tablero anterior
    if (board) {
        JXG.JSXGraph.freeBoard(board);
    }

    board = JXG.JSXGraph.initBoard('jxgbox', {
        boundingbox: [-10, 10, 10, -10],
        axis: true,
        keepAspectRatio: false
    });

    // Generamos función según el tipo
    let fn;

    switch (formula) {
        case 'f(x) = ax + b':
            fn = (x) => 2 * x + 1; // valores claros
            break;

        case 'f(x) = ax^2 + bx + c':
            fn = (x) => x * x - 4;
            break;

        case 'f(x) = \\frac{a}{x}':
            fn = (x) => 4 / x;
            break;

        case 'f(x) = a^x':
            fn = (x) => Math.pow(2, x);
            break;

        case 'f(x) = \\log_a(x)':
            fn = (x) => Math.log10(x);
            break;

        case 'f(x) = \\sqrt{x}':
            fn = (x) => x >= 0 ? Math.sqrt(x) : NaN;
            break;

        case 'f(x) = x^3':
            fn = (x) => x * x * x;
            break;

        case 'f(x) = \\sin(x)':
            fn = (x) => Math.sin(x);
            break;

        // NUEVAS FUNCIONES:
        case 'f(x) = \\cos(x)':
            fn = (x) => Math.cos(5 * x);
            break;

        case 'f(x) = \\tan(x)':
            fn = (x) => Math.tan(x);
            break;
    }

    // Dibuja la curva
    let curva = board.create('functiongraph', [fn], {
        strokeColor: '#ff073a',   // Rojo neón
        strokeWidth: 5,           // Línea gruesa
        highlight: false
    });

}

// =========================================================================
// Funciones de Utilidad (Adaptadas del ejemplo)
// =========================================================================

/**
 * Función de utilidad para mezclar un array (Algoritmo Fisher-Yates)
 * @param {Array} array Array a mezclar.
 */
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Renderiza una fórmula MathJax si está disponible.
 */
function renderizarMathJax() {
    if (window.MathJax) {
        // Pedir a MathJax que re-renderice el contenido de la función
        // Esto es necesario para que las fórmulas recién cargadas se muestren correctamente
        MathJax.typeset([FuncionMatematicaDiv]);
    }
}

/**
 * Deshabilita los botones de opción.
 * @param {boolean} disabled True para deshabilitar, false para habilitar.
 */
function setBotonesDisabled(disabled) {
    contenedorOpciones.querySelectorAll('.btn-option').forEach(btn => {
        btn.disabled = disabled;
    });
}

/**
 * Limpia las clases de resultado (correct/incorrect) de todos los botones.
 */
function limpiarClasesResultado() {
    contenedorOpciones.querySelectorAll('.btn-option').forEach(btn => {
        btn.classList.remove('correct', 'incorrect');
    });
}


// =========================================================================
// Lógica Principal del Juego
// =========================================================================

/**
 * Carga la pregunta actual en la interfaz.
 */
function cargarPregunta() {
    if (indiceActual >= Math.min(NUM_QUESTIONS_TO_PLAY, MAX_QUESTIONS)) {
        finalizarJuego();
        return;
    }

    // 1. Obtener la pregunta actual
    const funcionActual = funcionesMezcladas[indiceActual];
    const respuestaCorrectaTexto = funcionActual.respuestaCorrectaTexto;

    // 2. Actualizar texto de la función (fórmula)
    // Nota: El contenido debe ir dentro del <p> con los delimitadores de MathJax
    // Ya NO se muestra texto, ahora dibujamos la gráfica
    dibujarGrafica(funcionesMezcladas[indiceActual].formula);

    // Renderizar la fórmula
    renderizarMathJax();

    // 3. Crear y mezclar botones de opción
    // Asumimos que los botones ya están en el HTML con IDs btn1, btn2, etc.,
    // pero para mayor flexibilidad, los recrearemos o actualizaremos dinámicamente.

    // Crear un array de opciones para mezclar su orden en la interfaz
    let opcionesParaMezclar = funcionActual.opciones.map((opcion) => ({
        texto: opcion,
        esCorrecta: (opcion === respuestaCorrectaTexto)
    }));

    shuffle(opcionesParaMezclar); // Mezclamos el orden de presentación de las opciones

    contenedorOpciones.innerHTML = ''; // Limpiar opciones anteriores

    opcionesParaMezclar.forEach((opcion) => {
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-option', 'btn-lg');
        button.textContent = opcion.texto;
        // Usamos un atributo de datos para saber si esta opción es la correcta
        button.setAttribute('data-correct', opcion.esCorrecta);
        button.addEventListener('click', () => verificarRespuesta(button, funcionActual));
        contenedorOpciones.appendChild(button);
    });

    // 4. Actualizar puntaje y estado
    contenedorPuntaje.innerHTML = `<i class="bi bi-star-fill"></i> Puntaje: ${score}/${Math.min(NUM_QUESTIONS_TO_PLAY, MAX_QUESTIONS)}`;
    setBotonesDisabled(false);
    document.getElementById("btnPista").disabled = false;
    limpiarClasesResultado();
    // ------- SISTEMA DE ILUMINACIÓN AUTOMÁTICA 40s ---------
    clearTimeout(tiempoLimiteTimer);

    tiempoLimiteTimer = setTimeout(() => {
        // Buscar la opción correcta
        const btnCorrecto = contenedorOpciones.querySelector("[data-correct='true']");

        if (btnCorrecto) {
            btnCorrecto.classList.add("ayuda-correcta");
        }

    }, 40000); // 40 segundos


}

/**
 * Verifica si la respuesta seleccionada es correcta.
 * @param {HTMLButtonElement} botonClickeado El botón que el usuario presionó.
 * @param {Object} funcionActual El objeto de la pregunta actual.
 */
function verificarRespuesta(botonClickeado, funcionActual) {
    if (juegoTerminado) return;

    setBotonesDisabled(true); // Deshabilitar mientras se verifica

    const esCorrecta = botonClickeado.getAttribute('data-correct') === 'true';

    if (esCorrecta) {
        // Reproducir sonido de correcto (si existe)
        SCorrecto.currentTime = 0;
        SCorrecto.play();
        // SCorrecto.currentTime = 0; SCorrecto.play(); 
        score++;

        // Actualizar puntaje
        contenedorPuntaje.innerHTML = `<i class="bi bi-star-fill"></i> Puntaje: ${score}/${Math.min(NUM_QUESTIONS_TO_PLAY, MAX_QUESTIONS)}`;

        // Mostrar modal de correcto
        // Asegúrate de que este modal exista en tu HTML
        modalCorrecto.show();

        // Esperar un momento y pasar a la siguiente pregunta
        setTimeout(() => {
            modalCorrecto.hide();
            indiceActual++;
            cargarPregunta();
        }, 1200);

    } else {
        // Reproducir sonido de error (si existe)
        SError.currentTime = 0;
        SError.play();
        // SError.currentTime = 0; SError.play(); 

        // Mostrar modal de error con la explicación
        // Asegúrate de que este modal y el elemento 'errorCuerpo' existan
        errorCuerpo.innerHTML = `
            <p class="text-danger fw-bold">Respuesta Incorrecta. La forma correcta es: <strong>${funcionActual.respuestaCorrectaTexto}</strong>.</p>
            <p class="mt-3">${funcionActual.explicacion}</p>
        `;
        modalError.show();

        // Al cerrar el modal de error, pasamos a la siguiente pregunta
        function handleModalHidden() {
            indiceActual++;
            cargarPregunta();
            // Remover el listener
            document.getElementById('modalError').removeEventListener('hidden.bs.modal', handleModalHidden);
        }
        // Usar el listener de Bootstrap
        document.getElementById('modalError').addEventListener('hidden.bs.modal', handleModalHidden);
    }
}
function usarPista() {
    // Si no hay opciones renderizadas, salir
    if (!contenedorOpciones) return;

    // Tomar los botones actuales de opciones
    const botones = Array.from(contenedorOpciones.querySelectorAll('.btn-option'));
    if (botones.length <= 2) return; // nada que hacer si ya hay 2 o menos

    // Intentar identificar el correcto usando el atributo que ya usas al crear botones:
    let botonCorrecto = botones.find(b => b.getAttribute('data-correct') === 'true');

    // Si por alguna razón no existe data-correct, usar fallback comparando texto con la respuesta correcta mostrada
    if (!botonCorrecto) {
        // Tomamos la pregunta actual (si existe)
        const funcionActual = funcionesMezcladas[indiceActual];
        if (funcionActual) {
            botonCorrecto = botones.find(b => b.textContent.trim() === funcionActual.respuestaCorrectaTexto);
        }
    }

    // Filtrar incorrectos (excluir ya atenuados)
    let incorrectos = botones.filter(b => b !== botonCorrecto && b.style.opacity !== '0.3');

    // Si no hay suficientes incorrectos disponibles, salir
    if (incorrectos.length <= 1) return;

    // Mezclar y tomar 2 para "eliminar"
    shuffle(incorrectos);
    const aEliminar = incorrectos.slice(0, 2);

    aEliminar.forEach(btn => {
        // Efecto visual suave y deshabilitar interacción
        btn.style.transition = 'opacity 300ms ease';
        btn.style.opacity = '0.3';
        btn.style.pointerEvents = 'none';
        btn.disabled = true;
        // opcional: añadir clase para poder revertir si quieres
        btn.classList.add('opcion-eliminada');
    });

    // Desactivar el botón de pista (si existe) para evitar reutilizarla
    const pistaBtn = document.getElementById('btnPista');
    if (pistaBtn) pistaBtn.disabled = true;
}


/**
 * Muestra el modal final con el resultado.
 */
function finalizarJuego() {
    SFinal.currentTime = 0;
    SFinal.play();
    juegoTerminado = true;
    setBotonesDisabled(true); // Deshabilitar botones al finalizar

    const numPreguntas = Math.min(NUM_QUESTIONS_TO_PLAY, MAX_QUESTIONS);
    let mensaje = `Tu puntaje final fue de <strong>${score}/${numPreguntas}</strong>. `;

    if (score === numPreguntas) {
        mensaje += "¡Felicidades, identificaste todas las gráficas correctamente!";
    } else if (score >= numPreguntas * 0.7) {
        mensaje += "¡Excelente trabajo! Tienes un buen dominio de las funciones.";
    } else {
        mensaje += "Sigue practicando. Repasa las formas de las gráficas comunes.";
    }

    // Asegúrate de que el modal 'modalFinal' y 'mensajeFinal' existan
    mensajeFinal.innerHTML = mensaje;
    modalFinal.show();
}

/**
 * Inicializa el juego.
 */
function inicializarJuego() {
    // 1. Mezclar las funciones y resetear el estado
    funcionesMezcladas = [...funciones];
    shuffle(funcionesMezcladas);

    // Si el número de preguntas a jugar es mayor que el disponible, ajustamos
    const numPreguntas = Math.min(NUM_QUESTIONS_TO_PLAY, MAX_QUESTIONS);
    funcionesMezcladas = funcionesMezcladas.slice(0, numPreguntas);

    indiceActual = 0;
    score = 0;
    juegoTerminado = false;

    // 2. Configurar puntaje inicial
    contenedorPuntaje.innerHTML = `<i class="bi bi-graph-up-arrow"></i> Puntaje: ${score}/${numPreguntas}`;

    // 3. Cargar la primera pregunta
    cargarPregunta();

    const modalIntro = new bootstrap.Modal(document.getElementById('modalIntroduccion'));
    modalIntro.show();
    // 4. (Opcional) Implementar la funcionalidad de Pista si deseas mantenerla
    // y adaptarla para que muestre el nombre de la gráfica correcta.
    const pistaBtn = document.getElementById('btnPista');
    if (pistaBtn) {
        // Asegurarnos de que al comenzar cada pregunta el botón pueda volver a habilitarse
        pistaBtn.disabled = false;
        pistaBtn.addEventListener('click', usarPista);
    }
    // Tu HTML no incluye un botón de pista en el diseño proporcionado, así que se omite.
    document.getElementById('btnInicio').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    document.getElementById('btnRepetir').addEventListener('click', () => {
        location.reload();
    });
    document.getElementById('btnMasJuegos').addEventListener('click', () => {
        window.location.href = 'dashboard.html';})
}

// Iniciar el juego automáticamente al cargar la página.
// Mostrar modal de introducción al cargar la página
document.addEventListener('DOMContentLoaded', inicializarJuego);

