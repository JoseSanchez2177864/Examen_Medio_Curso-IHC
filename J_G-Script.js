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
    // La fórmula debe estar en formato MathJax (LaTeX)
    // El 'tipo' es el nombre de la forma de la gráfica (e.g., Parábola, Hipérbola)
    {
        formula: 'f(x) = ax + b',
        opciones: ["Parábola", "Hipérbola", "Curva Exponencial", "Línea Recta"],
        respuestaCorrectaTexto: "Línea Recta",
        explicacion: "Una función **lineal** (o afín) de la forma $f(x) = ax + b$ siempre se representa como una **Línea Recta**."
    },
    {
        formula: 'f(x) = ax^2 + bx + c',
        opciones: ["Hipérbola", "Función Logarítmica", "Parábola", "Círculo"],
        respuestaCorrectaTexto: "Parábola",
        explicacion: "Una función **cuadrática** (o de segundo grado) de la forma $f(x) = ax^2 + bx + c$ siempre se representa como una **Parábola**."
    },
    {
        formula: 'f(x) = \\frac{a}{x}',
        opciones: ["Línea Recta", "Parábola", "Hipérbola", "Senoide"],
        respuestaCorrectaTexto: "Hipérbola",
        explicacion: "Una función de **proporcionalidad inversa** como $f(x) = \\frac{a}{x}$ tiene una gráfica llamada **Hipérbola**."
    },
    {
        formula: 'f(x) = a^x',
        opciones: ["Hipérbola", "Función Exponencial", "Parábola", "Curva Cúbica"],
        respuestaCorrectaTexto: "Función Exponencial",
        explicacion: "Una función donde la variable está en el exponente ($f(x) = a^x$) se denomina **Función Exponencial**. Crece o decrece muy rápido."
    },
    {
        formula: 'f(x) = \\log_a(x)',
        opciones: ["Función Logarítmica", "Parábola", "Hipérbola", "Función Trigonométrica"],
        respuestaCorrectaTexto: "Función Logarítmica",
        explicacion: "La función **logarítmica** es la inversa de la función exponencial, y su gráfica se llama **Función Logarítmica**."
    },
    {
        formula: 'f(x) = \\sqrt{x}',
        opciones: ["Línea Recta", "Parábola", "Curva de Raíz Cuadrada", "Hipérbola"],
        respuestaCorrectaTexto: "Curva de Raíz Cuadrada",
        explicacion: "La gráfica de la función raíz cuadrada ($f(x) = \\sqrt{x}$) es la mitad superior de una parábola acostada."
    },
    {
        formula: 'f(x) = x^3',
        opciones: ["Función Cúbica", "Parábola", "Hipérbola", "Línea Recta"],
        respuestaCorrectaTexto: "Función Cúbica",
        explicacion: "La gráfica de la función cúbica ($f(x) = x^3$) tiene una forma de 'S' a través del origen."
    },
    {
        formula: 'f(x) = \\sin(x)',
        opciones: ["Curva Exponencial", "Senoide (Onda Senoidal)", "Hipérbola", "Parábola"],
        respuestaCorrectaTexto: "Senoide (Onda Senoidal)",
        explicacion: "La gráfica de las funciones trigonométricas $\\sin(x)$ o $\\cos(x)$ es una onda que se repite, llamada **Senoide**."
    },
    // Añade más funciones aquí
];

// Configuración del juego
const NUM_QUESTIONS_TO_PLAY = 10; // Jugar 10 preguntas
const MAX_QUESTIONS = funciones.length; // Máximo de preguntas disponibles

// Variables de estado del juego
let funcionesMezcladas = [];
let indiceActual = 0;
let score = 0;
let juegoTerminado = false;

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
    FuncionMatematicaTexto.innerHTML = `$$ ${funcionActual.formula} $$`;
    
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
    contenedorPuntaje.innerHTML = `<i class="bi bi-graph-up-arrow"></i> Puntaje: ${score}/${Math.min(NUM_QUESTIONS_TO_PLAY, MAX_QUESTIONS)}`;
    setBotonesDisabled(false);
    limpiarClasesResultado();
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

    // Resaltar todos los botones para mostrar la correcta y la seleccionada
    contenedorOpciones.querySelectorAll('.btn-option').forEach(btn => {
        if (btn.getAttribute('data-correct') === 'true') {
            btn.classList.add('correct');
        } else if (btn === botonClickeado && !esCorrecta) {
            btn.classList.add('incorrect');
        }
    });

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
            <p class="mt-3">**Explicación:** ${funcionActual.explicacion}</p>
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
    // Tu HTML no incluye un botón de pista en el diseño proporcionado, así que se omite.
}

// Iniciar el juego automáticamente al cargar la página.
// Mostrar modal de introducción al cargar la página
document.addEventListener('DOMContentLoaded', inicializarJuego);

