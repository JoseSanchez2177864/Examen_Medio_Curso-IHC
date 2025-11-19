// Array de preguntas para el juego de Clasificación Histórica
// Periodos: Antigüedad, Edad Media, Edad Moderna, Edad Contemporánea, Prehistoria.

// NOTA: Se ha eliminado la inicialización de Audio (SCorrecto, SError, SFinal)
// ya que los archivos locales no son accesibles en este entorno.

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

const preguntasHistoria = [
    // ------------------ Iniciales (1-5) ------------------
    {
        evento: "Caída del Imperio Romano de Occidente (476 d.C.)",
        opciones: ["Prehistoria", "Edad Contemporánea", "Edad Media", "Edad Moderna"],
        respuestaCorrectaIndex: 2, // "Edad Media"
        explicacion: "Este evento es el hito que los historiadores utilizan para marcar el fin de la Antigüedad y el inicio de la **Edad Media**."
    },
    {
        evento: "Inicio de la Revolución Francesa (1789)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 1, // "Edad Contemporánea"
        explicacion: "La Revolución Francesa es uno de los eventos cruciales que marca el fin de la Edad Moderna y el inicio de la **Edad Contemporánea**."
    },
    {
        evento: "Invención de la Imprenta por Gutenberg (c. 1440)",
        opciones: ["Antigüedad", "Edad Media", "Edad Moderna", "Edad Contemporánea"],
        respuestaCorrectaIndex: 2, // "Edad Moderna"
        explicacion: "Ocurrió a mediados del siglo XV, en la época de transición hacia la **Edad Moderna**, siendo fundamental para la difusión de ideas de esta era."
    },
    {
        evento: "Construcción de las Pirámides de Giza (c. 2500 a.C.)",
        opciones: ["Edad Media", "Prehistoria", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 3, // "Antigüedad"
        explicacion: "Las Pirámides pertenecen al Imperio Antiguo de Egipto, ubicándose firmemente dentro del periodo de la **Antigüedad**."
    },
    {
        evento: "Descubrimiento de América por Cristóbal Colón (1492)",
        opciones: ["Antigüedad", "Edad Contemporánea", "Edad Moderna", "Edad Media"],
        respuestaCorrectaIndex: 2, // "Edad Moderna"
        explicacion: "Este evento marca convencionalmente el inicio de la **Edad Moderna** y la Era de los Descubrimientos."
    },
    // ------------------ Intermedias (6-15) ------------------
    {
        evento: "Final de la Segunda Guerra Mundial (1945)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 1, // "Edad Contemporánea"
        explicacion: "Este conflicto global ocurrió en el siglo XX, siendo un evento definitorio de la **Edad Contemporánea**."
    },
    {
        evento: "La invención de la escritura cuneiforme (c. 3200 a.C.)",
        opciones: ["Edad Media", "Edad Moderna", "Antigüedad", "Prehistoria"],
        respuestaCorrectaIndex: 2, // "Antigüedad"
        explicacion: "La invención de la escritura se considera el fin de la Prehistoria y el inicio de la Historia, dando paso a la **Antigüedad**."
    },
    {
        evento: "Reforma Protestante de Martín Lutero (1517)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 2, // "Edad Moderna"
        explicacion: "Iniciada a principios del siglo XVI, este es un evento central que define el periodo de la **Edad Moderna**."
    },
    {
        evento: "Creación de Internet (ARPANET - 1969)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 1, // "Edad Contemporánea"
        explicacion: "La creación de las redes de comunicación modernas ocurrió a finales del siglo XX, en la **Edad Contemporánea**."
    },
    {
        evento: "La Peste Negra en Europa (Siglo XIV)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 0, // "Edad Media"
        explicacion: "Esta gran epidemia azotó Europa y Asia en el siglo XIV, siendo un fenómeno característico de la Baja **Edad Media**."
    },
    {
        evento: "Publicación de la Teoría de la Evolución (Darwin - 1859)",
        opciones: ["Antigüedad", "Edad Contemporánea", "Edad Moderna", "Edad Media"],
        respuestaCorrectaIndex: 1, // "Edad Contemporánea"
        explicacion: "La publicación de 'El Origen de las Especies' a mediados del siglo XIX cae dentro de la **Edad Contemporánea**."
    },
    {
        evento: "Auge y Caída del Imperio Azteca (Conquista en 1521)",
        opciones: ["Antigüedad", "Edad Media", "Edad Moderna", "Prehistoria"],
        respuestaCorrectaIndex: 2, // "Edad Moderna"
        explicacion: "Su caída (1521) por los europeos coincide con el inicio de la **Edad Moderna** y la expansión europea."
    },
    {
        evento: "La vida de Julio César (c. 100 a.C. - 44 a.C.)",
        opciones: ["Edad Media", "Edad Moderna", "Edad Contemporánea", "Antigüedad"],
        respuestaCorrectaIndex: 3, // "Antigüedad"
        explicacion: "Como figura central de la República y el Imperio Romano, pertenece al periodo de la **Antigüedad**."
    },
    {
        evento: "Cruzadas (Siglos XI al XIII)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Prehistoria"],
        respuestaCorrectaIndex: 0, // "Edad Media"
        explicacion: "Estos conflictos militares y religiosos ocurrieron principalmente en la Alta y Plena **Edad Media**."
    },
    {
        evento: "Final de la Guerra Fría (Caída del Muro de Berlín - 1989)",
        opciones: ["Antigüedad", "Edad Media", "Edad Moderna", "Edad Contemporánea"],
        respuestaCorrectaIndex: 3, // "Edad Contemporánea"
        explicacion: "Este evento, ocurrido a finales del siglo XX, es un hito de la historia reciente y de la **Edad Contemporánea**."
    },
    // ------------------ Preguntas Adicionales ------------------
    {
        evento: "Surgimiento y expansión del Islam (Siglo VII)",
        opciones: ["Antigüedad", "Edad Media", "Edad Moderna", "Edad Contemporánea"],
        respuestaCorrectaIndex: 1, // "Edad Media"
        explicacion: "El surgimiento y gran expansión del Califato Islámico ocurrió en el siglo VII, al inicio de la **Edad Media**."
    },
    {
        evento: "Invención del teléfono por Alexander Graham Bell (1876)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 1, // "Edad Contemporánea"
        explicacion: "Este evento es un avance tecnológico clave de la Segunda Revolución Industrial, en la **Edad Contemporánea**."
    },
    {
        evento: "Guerra del Peloponeso (Siglo V a.C.)",
        opciones: ["Edad Media", "Prehistoria", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 3, // "Antigüedad"
        explicacion: "El conflicto entre Atenas y Esparta es un evento fundamental de la Grecia Clásica, parte de la **Antigüedad**."
    },
    {
        evento: "La Ilustración y el Siglo de las Luces (Siglo XVIII)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 2, // "Edad Moderna"
        explicacion: "La Ilustración es el movimiento filosófico y cultural que precede y sienta las bases de la Revolución Francesa, ubicándose en la **Edad Moderna**."
    },
    {
        evento: "Revolución Industrial (Inicios en el siglo XVIII)",
        opciones: ["Antigüedad", "Edad Contemporánea", "Edad Moderna", "Edad Media"],
        respuestaCorrectaIndex: 1, // "Edad Contemporánea"
        explicacion: "Aunque inicia en el XVIII, su impacto y desarrollo se considera el arranque del periodo de la **Edad Contemporánea**."
    },
    {
        evento: "La Magna Carta en Inglaterra (1215)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 0, // "Edad Media"
        explicacion: "Este documento, que limita el poder del rey, fue firmado en el siglo XIII, durante la **Edad Media**."
    },
    {
        evento: "El Renacimiento (Siglos XV y XVI)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 2, // "Edad Moderna"
        explicacion: "El Renacimiento es el movimiento cultural que marca la transición y el inicio del periodo de la **Edad Moderna**."
    },
    {
        evento: "Primer hombre en el espacio (Yuri Gagarin, 1961)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 1, // "Edad Contemporánea"
        explicacion: "Este hito de la carrera espacial ocurrió en pleno siglo XX, en la **Edad Contemporánea**."
    },
    {
        evento: "Domesticación de animales y agricultura (Revolución Neolítica)",
        opciones: ["Prehistoria", "Edad Contemporánea", "Antigüedad", "Edad Media"],
        respuestaCorrectaIndex: 0, // "Prehistoria"
        explicacion: "Este cambio radical en el estilo de vida humano, previo a la escritura, define el periodo de la **Prehistoria** (Neolítico)."
    },
    {
        evento: "Fundación de Roma (Tradicionalmente 753 a.C.)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 3, // "Antigüedad"
        explicacion: "El inicio de la civilización romana se ubica claramente en el periodo de la **Antigüedad**."
    }
];

// Variables de estado del juego
const NUM_QUESTIONS_TO_PLAY = 3; // Número de preguntas a jugar
let preguntasMezcladas = [];
let indiceActual = 0;
let score = 0;
let juegoTerminado = false;

// Referencias a elementos del DOM (se asume que existen en el HTML)
const eventoTexto = document.getElementById('eventoTexto');
const contenedorOpciones = document.getElementById('contenedorOpciones');
const totalQuestions = document.getElementById('totalQuestions');
const btnPista = document.getElementById('btnPista');
const errorCuerpo = document.getElementById('errorCuerpo');

// Referencias a Modales de Bootstrap (se asume que Bootstrap está cargado)
const modalIntroduccion = new bootstrap.Modal(document.getElementById('modalIntroduccion'));
const modalCorrecto = new bootstrap.Modal(document.getElementById('modalCorrecto'), { keyboard: false });
const modalError = new bootstrap.Modal(document.getElementById('modalError'));
const modalFinal = new bootstrap.Modal(document.getElementById('modalFinal'), { backdrop: 'static', keyboard: false });


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
 * Carga la pregunta actual en la interfaz.
 */
function cargarPregunta() {
    if (indiceActual >= NUM_QUESTIONS_TO_PLAY) {
        finalizarJuego();
        return;
    }

    // Si el juego se está reiniciando, asegurarse de que el modal de final esté cerrado
    modalFinal.hide();

    const pregunta = preguntasMezcladas[indiceActual];

    // 1. Actualizar contador y botón de pista
    btnPista.disabled = false; // Habilitar pista para la nueva pregunta
    btnPista.classList.remove('disabled', 'opacity-50');

    // 2. Actualizar texto del evento
    eventoTexto.textContent = pregunta.evento;

    // 3. Crear y mezclar botones de opción
    contenedorOpciones.innerHTML = '';

    // Crear un array de opciones para mezclar su orden en la interfaz
    let opcionesParaMezclar = pregunta.opciones.map((opcion, index) => ({
        texto: opcion,
        esCorrecta: (index === pregunta.respuestaCorrectaIndex)
    }));

    shuffle(opcionesParaMezclar); // Mezclamos el orden de presentación de las opciones

    opcionesParaMezclar.forEach((opcion) => {
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-option', 'shadow-sm');
        button.textContent = opcion.texto;
        // Usamos un atributo de datos para saber si esta opción es la correcta
        button.setAttribute('data-correct', opcion.esCorrecta);
        button.addEventListener('click', () => verificarRespuesta(button));
        contenedorOpciones.appendChild(button);
    });

    setBotonesDisabled(false); // Asegurar que los botones estén activos al cargar
    limpiarClasesResultado(); // Limpiar el estado visual de los botones
}

/**
 * Deshabilita los botones de opción para evitar clics múltiples.
 * @param {boolean} disabled True para deshabilitar, false para habilitar.
 */
function setBotonesDisabled(disabled) {
    contenedorOpciones.querySelectorAll('.btn-option').forEach(btn => {
        btn.disabled = disabled;
    });
    // También deshabilitamos/habilitamos la pista
    btnPista.disabled = disabled;
    if (disabled) {
        btnPista.classList.add('disabled', 'opacity-50');
    } else {
        btnPista.classList.remove('disabled', 'opacity-50');
    }
}

/**
 * Verifica si la respuesta seleccionada es correcta.
 * @param {HTMLButtonElement} botonClickeado El botón que el usuario presionó.
 */
function verificarRespuesta(botonClickeado) {
    if (juegoTerminado) return;

    setBotonesDisabled(true); // Deshabilitar mientras se verifica

    const esCorrecta = botonClickeado.getAttribute('data-correct') === 'true';
    const pregunta = preguntasMezcladas[indiceActual];

    // Resaltar todos los botones para mostrar la correcta y la seleccionada
    contenedorOpciones.querySelectorAll('.btn-option').forEach(btn => {
        btn.disabled = true; // Asegurar que sigan deshabilitados
        if (btn.getAttribute('data-correct') === 'true') {
            btn.classList.add('correct');
            btn.classList.remove('ayuda-correcta'); // Limpiar pista si estaba activa
        } else if (btn === botonClickeado && !esCorrecta) {
            btn.classList.add('incorrect');
        }
    });

    if (esCorrecta) {
        // NOTA: Se eliminaron las llamadas a SCorrecto.play()
        score++;
        SCorrecto.currentTime = 0;
        SCorrecto.play();
        document.getElementById('contenedorPuntaje').innerHTML =
            `<i class="bi bi-star-fill"></i> Puntaje: ${score}/${NUM_QUESTIONS_TO_PLAY}`;
        // Mostrar modal de correcto
        modalCorrecto.show();

        // Esperar un momento y pasar a la siguiente pregunta
        setTimeout(() => {
            modalCorrecto.hide();
            indiceActual++;
            cargarPregunta();
        }, 1200); // 1.2 segundos para que el usuario vea el modal

    } else {
        // NOTA: Se eliminaron las llamadas a SError.play()
        // Mostrar modal de error con la explicación
        errorCuerpo.innerHTML = `<p class="text-white">La respuesta correcta era: <strong>${pregunta.opciones[pregunta.respuestaCorrectaIndex]}</strong>.</p>
                                 <p class="mt-3 text-white">**Explicación:** ${pregunta.explicacion}</p>`;
        modalError.show();
        SError.currentTime = 0;
        SError.play();
        // Al cerrar el modal de error, pasamos a la siguiente pregunta
        // Usamos un listener con handler para garantizar que se remueva correctamente
        function handleModalHidden() {
            indiceActual++;
            cargarPregunta();
            // Remover el listener para evitar duplicados en el siguiente error
            document.getElementById('modalError').removeEventListener('hidden.bs.modal', handleModalHidden);
        }
        document.getElementById('modalError').addEventListener('hidden.bs.modal', handleModalHidden);
    }
}

/**
 * Implementa la funcionalidad de Pista: ilumina el botón correcto.
 */
function mostrarPista() {
    // 1. Deshabilitar el botón de pista para evitar re-clics
    btnPista.disabled = true;
    btnPista.classList.add('disabled', 'opacity-50');

    // 2. Encontrar el botón correcto y aplicar la clase de animación (se asume que 'ayuda-correcta' hace el efecto visual)
    contenedorOpciones.querySelectorAll('.btn-option').forEach(btn => {
        if (btn.getAttribute('data-correct') === 'true') {
            btn.classList.add('ayuda-correcta');
        }
    });
}

/**
 * Limpia las clases de animación (ayuda) y resultado (correct/incorrect) de todos los botones.
 */
function limpiarClasesResultado() {
    contenedorOpciones.querySelectorAll('.btn-option').forEach(btn => {
        btn.classList.remove('ayuda-correcta', 'correct', 'incorrect');
    });
}

/**
 * Muestra el modal final con el resultado.
 */
function finalizarJuego() {
    SFinal.currentTime = 0;
    SFinal.play();
    juegoTerminado = true;
    setBotonesDisabled(true); // Deshabilitar botones al finalizar
    let modalFinal = new bootstrap.Modal(document.getElementById('modalFinal'));
    $('#mensajeFinal').html(`Tu puntaje final fue de <strong>${score}/15</strong>. ¡Excelente trabajo!`);
    modalFinal.show();
}

/**
 * Inicializa el juego.
 */
function inicializarJuego() {
    // 1. Mostrar el total de preguntas

    // 2. Mezclar las preguntas y resetear el estado
    preguntasMezcladas = [...preguntasHistoria];
    shuffle(preguntasMezcladas);

    // Tomar solo el número de preguntas a jugar
    preguntasMezcladas = preguntasMezcladas.slice(0, NUM_QUESTIONS_TO_PLAY);

    indiceActual = 0;
    score = 0;
    juegoTerminado = false;

    // 3. Cargar la primera pregunta
    cargarPregunta();

    // 4. Configurar el evento del botón de Pista (asegurarse de no duplicar)
    btnPista.removeEventListener('click', mostrarPista); // Remover previo si existe
    btnPista.addEventListener('click', mostrarPista);

    // 5. Mostrar modal de introducción al inicio
    // Se asume que el modal tiene un botón de "Comenzar" o se cierra solo.
    modalIntroduccion.show();
}

// Iniciar el juego automáticamente al cargar la página.
document.addEventListener('DOMContentLoaded', inicializarJuego);