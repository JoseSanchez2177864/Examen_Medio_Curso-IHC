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
        respuestaCorrectaIndex: 2,
        explicacion: "La caída de Roma marca el fin de la Antigüedad y el inicio de la <strong>Edad Media</strong>, cuando Europa se fragmentó en reinos más pequeños y surgieron nuevas estructuras de poder."
    },
    {
        evento: "Inicio de la Revolución Francesa (1789)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 1,
        explicacion: "La Revolución Francesa derribó el antiguo orden monárquico y marca el inicio de la <strong>Edad Contemporánea</strong>, caracterizada por grandes cambios sociales y políticos."
    },
    {
        evento: "Invención de la Imprenta por Gutenberg (c. 1440)",
        opciones: ["Antigüedad", "Edad Media", "Edad Moderna", "Edad Contemporánea"],
        respuestaCorrectaIndex: 2,
        explicacion: "La imprenta impulsó la difusión del conocimiento y abrió paso al Renacimiento, convirtiéndose en un símbolo temprano de la <strong>Edad Moderna</strong>."
    },
    {
        evento: "Construcción de las Pirámides de Giza (c. 2500 a.C.)",
        opciones: ["Edad Media", "Prehistoria", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 3,
        explicacion: "Estas pirámides pertenecen al antiguo Egipto, una de las primeras grandes civilizaciones de la <strong>Antigüedad</strong>."
    },
    {
        evento: "Descubrimiento de América por Cristóbal Colón (1492)",
        opciones: ["Antigüedad", "Edad Contemporánea", "Edad Moderna", "Edad Media"],
        respuestaCorrectaIndex: 2,
        explicacion: "El viaje de Colón inaugura la Era de los Descubrimientos y marca el inicio de la <strong>Edad Moderna</strong>."
    },

    // ------------------ Intermedias (6-15) ------------------
    {
        evento: "Final de la Segunda Guerra Mundial (1945)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 1,
        explicacion: "Este conflicto global transformó la política mundial y pertenece a la <strong>Edad Contemporánea</strong>, donde se desarrollan la ONU y la Guerra Fría."
    },
    {
        evento: "La invención de la escritura cuneiforme (c. 3200 a.C.)",
        opciones: ["Edad Media", "Edad Moderna", "Antigüedad", "Prehistoria"],
        respuestaCorrectaIndex: 2,
        explicacion: "La escritura cuneiforme marca el paso de la Prehistoria a la Historia, dando inicio a la <strong>Antigüedad</strong>."
    },
    {
        evento: "Reforma Protestante de Martín Lutero (1517)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 2,
        explicacion: "Lutero desafió a la Iglesia Católica en 1517, iniciando un movimiento religioso decisivo dentro de la <strong>Edad Moderna</strong>."
    },
    {
        evento: "Creación de Internet (ARPANET - 1969)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 1,
        explicacion: "El nacimiento de Internet ocurrió en plena Guerra Fría, dentro de la <strong>Edad Contemporánea</strong>, revolucionando la comunicación."
    },
    {
        evento: "La Peste Negra en Europa (Siglo XIV)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 0,
        explicacion: "La devastadora pandemia que mató a millones pertenece a la Baja <strong>Edad Media</strong>."
    },
    {
        evento: "Publicación de la Teoría de la Evolución (Darwin - 1859)",
        opciones: ["Antigüedad", "Edad Contemporánea", "Edad Moderna", "Edad Media"],
        respuestaCorrectaIndex: 1,
        explicacion: "Darwin revolucionó la biología en el siglo XIX, dentro de la <strong>Edad Contemporánea</strong>."
    },
    {
        evento: "Auge y Caída del Imperio Azteca (Conquista en 1521)",
        opciones: ["Antigüedad", "Edad Media", "Edad Moderna", "Prehistoria"],
        respuestaCorrectaIndex: 2,
        explicacion: "La caída del Imperio Azteca en 1521 coincide con los primeros años de la expansión europea de la <strong>Edad Moderna</strong>."
    },
    {
        evento: "La vida de Julio César (c. 100 a.C. - 44 a.C.)",
        opciones: ["Edad Media", "Edad Moderna", "Edad Contemporánea", "Antigüedad"],
        respuestaCorrectaIndex: 3,
        explicacion: "Julio César es una de las figuras más importantes de Roma, claramente perteneciente a la <strong>Antigüedad</strong>."
    },
    {
        evento: "Cruzadas (Siglos XI al XIII)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Prehistoria"],
        respuestaCorrectaIndex: 0,
        explicacion: "Las Cruzadas fueron expediciones militares religiosas típicas de la <strong>Edad Media</strong>."
    },
    {
        evento: "Final de la Guerra Fría (Caída del Muro de Berlín - 1989)",
        opciones: ["Antigüedad", "Edad Media", "Edad Moderna", "Edad Contemporánea"],
        respuestaCorrectaIndex: 3,
        explicacion: "La caída del Muro simboliza el fin de la tensión entre bloques, un momento clave de la <strong>Edad Contemporánea</strong>."
    },

    // ------------------ Preguntas Adicionales ------------------
    {
        evento: "Surgimiento y expansión del Islam (Siglo VII)",
        opciones: ["Antigüedad", "Edad Media", "Edad Moderna", "Edad Contemporánea"],
        respuestaCorrectaIndex: 1,
        explicacion: "El Islam nació y se expandió rápidamente durante el siglo VII, al inicio de la <strong>Edad Media</strong>."
    },
    {
        evento: "Invención del teléfono por Alexander Graham Bell (1876)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 1,
        explicacion: "El teléfono surgió durante la Segunda Revolución Industrial, dentro de la <strong>Edad Contemporánea</strong>."
    },
    {
        evento: "Guerra del Peloponeso (Siglo V a.C.)",
        opciones: ["Edad Media", "Prehistoria", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 3,
        explicacion: "El conflicto entre Atenas y Esparta pertenece a la Grecia clásica de la <strong>Antigüedad</strong>."
    },
    {
        evento: "La Ilustración y el Siglo de las Luces (Siglo XVIII)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 2,
        explicacion: "La Ilustración fue un movimiento intelectual que preparó el terreno para grandes cambios de la <strong>Edad Moderna</strong>."
    },
    {
        evento: "Revolución Industrial (Inicios en el siglo XVIII)",
        opciones: ["Antigüedad", "Edad Contemporánea", "Edad Moderna", "Edad Media"],
        respuestaCorrectaIndex: 1,
        explicacion: "Aunque comenzó en el XVIII, transformó tanto el mundo que se considera parte temprana de la <strong>Edad Contemporánea</strong>."
    },
    {
        evento: "La Magna Carta en Inglaterra (1215)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 0,
        explicacion: "Este documento limitó el poder real y nació en pleno siglo XIII, dentro de la <strong>Edad Media</strong>."
    },
    {
        evento: "El Renacimiento (Siglos XV y XVI)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 2,
        explicacion: "El Renacimiento fue un movimiento cultural que marca el inicio y la esencia de la <strong>Edad Moderna</strong>."
    },
    {
        evento: "Primer hombre en el espacio (Yuri Gagarin, 1961)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 1,
        explicacion: "Enviar a un humano al espacio fue un hito tecnológico del siglo XX, parte de la <strong>Edad Contemporánea</strong>."
    },
    {
        evento: "Domesticación de animales y agricultura (Revolución Neolítica)",
        opciones: ["Prehistoria", "Edad Contemporánea", "Antigüedad", "Edad Media"],
        respuestaCorrectaIndex: 0,
        explicacion: "El paso a la agricultura ocurrió antes de la escritura, por lo que pertenece a la <strong>Prehistoria</strong>."
    },
    {
        evento: "Fundación de Roma (Tradicionalmente 753 a.C.)",
        opciones: ["Edad Media", "Edad Contemporánea", "Edad Moderna", "Antigüedad"],
        respuestaCorrectaIndex: 3,
        explicacion: "La mítica fundación de Roma marca el origen de una de las civilizaciones centrales de la <strong>Antigüedad</strong>."
    }
];


// Variables de estado del juego
const NUM_QUESTIONS_TO_PLAY = 15; // Número de preguntas a jugar
let preguntasMezcladas = [];
let indiceActual = 0;
let score = 0;
let juegoTerminado = false;
let tiempoLimiteTimer = null;

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
    // ------- SISTEMA DE ILUMINACIÓN AUTOMÁTICA 40s ---------
    clearTimeout(tiempoLimiteTimer);

    tiempoLimiteTimer = setTimeout(() => {
        // Buscar la opción correcta
        const btnCorrecto = contenedorOpciones.querySelector("[data-correct='true']");

        if (btnCorrecto) {
            btnCorrecto.classList.add("ayuda-correcta");
        }

    }, 40000);

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
                                 <p class="mt-3 text-white"> ${pregunta.explicacion}</p>`;
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
    // Deshabilitar el botón para que no vuelva a usarse
    btnPista.disabled = true;
    btnPista.classList.add('disabled', 'opacity-50');

    const botones = Array.from(contenedorOpciones.querySelectorAll('.btn-option'));

    // 1. Encontrar el botón correcto
    const botonCorrecto = botones.find(btn => btn.getAttribute('data-correct') === 'true');

    // 2. Filtrar botones incorrectos
    const incorrectos = botones.filter(btn => btn.getAttribute('data-correct') !== 'true');

    // 3. Elegir aleatoriamente 2 incorrectos para eliminar
    shuffle(incorrectos);
    const incorrectosAEliminar = incorrectos.slice(0, 2);

    // 4. Deshabilitar y ocultar esos dos incorrectos
    incorrectosAEliminar.forEach(btn => {
        btn.disabled = true;
        btn.classList.add('opacity-25'); // Lo deja semitransparente (opcional)
        btn.style.pointerEvents = "none"; // Evita clics
    });

    // 5. Resaltar el correcto (opcional)
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