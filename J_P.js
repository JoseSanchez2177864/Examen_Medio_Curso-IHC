// Variables del juego
let puntaje = 0;
let vidas = 3;
let juegoActivo = false;
let ecuaciones = [];
let intervaloEcuaciones;
let intervaloAnimacion;
let velocidad = 2000;
let velocidadCaida = 2;
let nivel = 1;
let ecuacionesResueltas = 0;

// Elementos DOM
const btnInicio = document.getElementById('btnInicio');
const btnPista = document.getElementById('btnPista');
const btnRepetir = document.getElementById('btnRepetir');
const btnInicioModal = document.getElementById('btnInicioModal');
const btnMasJuegos = document.getElementById('btnMasJuegos');
const zonaJuego = document.getElementById('zonaJuego');
const inputRespuesta = document.getElementById('respuesta');
const spanPuntaje = document.getElementById('puntaje');
const spanPuntajeFinal = document.getElementById('puntajeFinal');
const zonaGolpe = document.getElementById('zonaGolpe');

// Lista de ecuaciones por nivel de dificultad
const listaEcuaciones = {
    nivel1: [
        { ecuacion: "2x + 3 = 7", respuesta: "2", explicacion: "Resta 3: 2x = 4, divide entre 2: x = 2" },
        { ecuacion: "x - 5 = 10", respuesta: "15", explicacion: "Suma 5: x = 15" },
        { ecuacion: "3x = 12", respuesta: "4", explicacion: "Divide entre 3: x = 4" },
        { ecuacion: "x/2 = 8", respuesta: "16", explicacion: "Multiplica por 2: x = 16" },
        { ecuacion: "4x - 2 = 14", respuesta: "4", explicacion: "Suma 2: 4x = 16, divide entre 4: x = 4" }
    ],
    nivel2: [
        { ecuacion: "2(x + 3) = 16", respuesta: "5", explicacion: "Divide entre 2: x + 3 = 8, resta 3: x = 5" },
        { ecuacion: "5x + 1 = 21", respuesta: "4", explicacion: "Resta 1: 5x = 20, divide entre 5: x = 4" },
        { ecuacion: "x² = 16", respuesta: "4", explicacion: "Raíz cuadrada: x = 4" },
        { ecuacion: "3x - 7 = 8", respuesta: "5", explicacion: "Suma 7: 3x = 15, divide entre 3: x = 5" },
        { ecuacion: "2x + 2 = 10", respuesta: "4", explicacion: "Resta 2: 2x = 8, divide entre 2: x = 4" }
    ],
    nivel3: [
        { ecuacion: "x² + 3x = 10", respuesta: "2", explicacion: "x² + 3x - 10 = 0, factoriza: (x+5)(x-2)=0, x=2" },
        { ecuacion: "2x² - 8 = 0", respuesta: "2", explicacion: "2x² = 8, x² = 4, x = 2" },
        { ecuacion: "3(x - 2) = 15", respuesta: "7", explicacion: "Divide entre 3: x - 2 = 5, suma 2: x = 7" },
        { ecuacion: "x/3 + 1 = 4", respuesta: "9", explicacion: "Resta 1: x/3 = 3, multiplica por 3: x = 9" },
        { ecuacion: "5 - 2x = 11", respuesta: "-3", explicacion: "Resta 5: -2x = 6, divide entre -2: x = -3" }
    ]
};

// Sonidos simples usando Audio (más compatible)
function playSound(type) {
    try {
        let frequency = 800;
        let duration = 0.3;

        switch(type) {
            case 'correct':
                frequency = 800;
                break;
            case 'error':
                frequency = 300;
                break;
            case 'break':
                frequency = 150;
                duration = 0.5;
                break;
            case 'gameOver':
                frequency = 200;
                duration = 1;
                break;
        }

        // Crear contexto de audio
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = frequency;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    } catch (e) {
        console.log('Audio no disponible:', e);
    }
}

// Inicialización del juego
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado - Inicializando juego...');

    // Mostrar modal de introducción después de un pequeño delay
    setTimeout(() => {
        const modalIntro = new bootstrap.Modal(document.getElementById('modalIntroduccion'));
        modalIntro.show();
        console.log('Modal de introducción mostrado');
    }, 1000);

    // Verificar que los elementos existan antes de agregar event listeners
    if (btnInicio) {
        btnInicio.addEventListener('click', iniciarJuego);
        console.log('Event listener de btnInicio agregado');
    } else {
        console.error('btnInicio no encontrado');
    }

    if (btnPista) {
        btnPista.addEventListener('click', mostrarPista);
    }

    if (btnRepetir) {
        btnRepetir.addEventListener('click', reiniciarJuego);
    }

    if (btnInicioModal) {
        btnInicioModal.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    if (btnMasJuegos) {
        btnMasJuegos.addEventListener('click', () => {
            window.location.href = 'dashboard.html';
        });
    }

    if (inputRespuesta) {
        inputRespuesta.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                verificarRespuesta();
            }
        });
    }

    // Actualizar texto de la zona de golpe
    if (zonaGolpe) {
        zonaGolpe.innerHTML = '💥 Escribe la respuesta aquí 💥';
    }

    console.log('Inicialización completada');
});

// Función para iniciar el juego
function iniciarJuego() {
    console.log('Iniciando juego...');

    juegoActivo = true;
    puntaje = 0;
    vidas = 3;
    nivel = 1;
    ecuacionesResueltas = 0;
    velocidad = 2000;
    velocidadCaida = 2;

    actualizarPuntaje();
    actualizarVidas();

    if (btnInicio) {
        btnInicio.disabled = true;
        btnInicio.textContent = 'Juego en curso...';
    }

    // Limpiar ecuaciones existentes
    ecuaciones = [];
    if (zonaJuego) {
        zonaJuego.innerHTML = '';
    }

    // Detener intervalos existentes
    clearInterval(intervaloEcuaciones);
    if (intervaloAnimacion) {
        cancelAnimationFrame(intervaloAnimacion);
    }

    // Iniciar generación de ecuaciones
    intervaloEcuaciones = setInterval(crearEcuacion, velocidad);

    // Iniciar animación
    animarEcuaciones();

    // Focus en el input de respuesta
    if (inputRespuesta) {
        inputRespuesta.focus();
    }

    console.log('Juego iniciado correctamente');
}

// Función para crear una nueva ecuación
function crearEcuacion() {
    if (!juegoActivo || ecuaciones.length >= 5) return;

    const nivelActual = `nivel${Math.min(nivel, 3)}`; // Máximo nivel 3
    const ecuacionesNivel = listaEcuaciones[nivelActual];

    if (!ecuacionesNivel || ecuacionesNivel.length === 0) return;

    const ecuacionAleatoria = ecuacionesNivel[Math.floor(Math.random() * ecuacionesNivel.length)];

    const nuevaEcuacion = {
        id: Date.now(),
        elemento: null,
        ecuacion: ecuacionAleatoria.ecuacion,
        respuesta: ecuacionAleatoria.respuesta,
        explicacion: ecuacionAleatoria.explicacion,
        posicionX: Math.random() * (zonaJuego.offsetWidth - 200) + 100,
        posicionY: -50,
        velocidad: velocidadCaida
    };

    ecuaciones.push(nuevaEcuacion);
    mostrarEcuacion(nuevaEcuacion);
}

// Función para mostrar la ecuación en pantalla
function mostrarEcuacion(ecuacionObj) {
    if (!zonaJuego) return;

    const divEcuacion = document.createElement('div');
    divEcuacion.className = 'ecuacion';
    divEcuacion.id = `ecuacion-${ecuacionObj.id}`;
    divEcuacion.textContent = ecuacionObj.ecuacion;
    divEcuacion.style.left = `${ecuacionObj.posicionX}px`;
    divEcuacion.style.top = `${ecuacionObj.posicionY}px`;

    zonaJuego.appendChild(divEcuacion);
    ecuacionObj.elemento = divEcuacion;
}

// Función para animar las ecuaciones
function animarEcuaciones() {
    if (!juegoActivo || !zonaJuego) return;

    ecuaciones.forEach((ecuacion, index) => {
        if (ecuacion.elemento) {
            ecuacion.posicionY += ecuacion.velocidad;
            ecuacion.elemento.style.top = `${ecuacion.posicionY}px`;

            // Verificar si llegó al fondo
            if (ecuacion.posicionY > zonaJuego.offsetHeight - 100) {
                perderVida(ecuacion.id);
            }
        }
    });

    intervaloAnimacion = requestAnimationFrame(animarEcuaciones);
}

// Función para verificar la respuesta
function verificarRespuesta() {
    if (!juegoActivo || ecuaciones.length === 0 || !zonaJuego) return;

    const respuestaUsuario = inputRespuesta.value.trim();
    let ecuacionEnZona = null;

    // Buscar ecuación que esté en la zona de golpe
    ecuaciones.forEach(ecuacion => {
        if (ecuacion.posicionY > zonaJuego.offsetHeight - 150 &&
            ecuacion.posicionY < zonaJuego.offsetHeight - 50) {
            ecuacionEnZona = ecuacion;
        }
    });

    if (!ecuacionEnZona) {
        mostrarMensajeError('¡No hay ecuación en la zona de golpe!');
        return;
    }

    if (respuestaUsuario === ecuacionEnZona.respuesta) {
        // Respuesta correcta
        puntaje += 10 * nivel;
        ecuacionesResueltas++;
        actualizarPuntaje();
        eliminarEcuacion(ecuacionEnZona.id, true);
        playSound('correct');
        playSound('break');
        mostrarModalCorrecto();

        // Subir de nivel cada 5 ecuaciones resueltas
        if (ecuacionesResueltas % 5 === 0) {
            subirNivel();
        }
    } else {
        // Respuesta incorrecta
        playSound('error');
        mostrarModalError('Respuesta incorrecta. ¡Inténtalo de nuevo!');
    }

    if (inputRespuesta) {
        inputRespuesta.value = '';
        inputRespuesta.focus();
    }
}

// Función para eliminar ecuación
function eliminarEcuacion(id, correcta = false) {
    const ecuacionIndex = ecuaciones.findIndex(e => e.id === id);
    if (ecuacionIndex !== -1) {
        const ecuacion = ecuaciones[ecuacionIndex];
        if (ecuacion.elemento) {
            if (correcta) {
                // Animación de acierto
                ecuacion.elemento.style.transition = 'all 0.3s ease';
                ecuacion.elemento.style.transform = 'scale(1.5)';
                ecuacion.elemento.style.opacity = '0';
                setTimeout(() => {
                    if (ecuacion.elemento && ecuacion.elemento.parentNode) {
                        ecuacion.elemento.remove();
                    }
                }, 300);
            } else {
                if (ecuacion.elemento.parentNode) {
                    ecuacion.elemento.remove();
                }
            }
        }
        ecuaciones.splice(ecuacionIndex, 1);
    }
}

// Función para mostrar pista
function mostrarPista() {
    if (!juegoActivo || ecuaciones.length === 0 || !zonaJuego) return;

    let ecuacionEnZona = null;
    ecuaciones.forEach(ecuacion => {
        if (ecuacion.posicionY > zonaJuego.offsetHeight - 150) {
            ecuacionEnZona = ecuacion;
        }
    });

    if (ecuacionEnZona) {
        const errorCuerpo = document.getElementById('errorCuerpo');
        if (errorCuerpo) {
            errorCuerpo.innerHTML = `
                <strong>Pista:</strong> ${ecuacionEnZona.explicacion}<br><br>
                <small class="text-warning">¡Has perdido 5 puntos por usar la pista!</small>
            `;
        }

        const modal = new bootstrap.Modal(document.getElementById('modalError'));
        modal.show();

        // Penalización por usar pista
        puntaje = Math.max(0, puntaje - 5);
        actualizarPuntaje();
    } else {
        mostrarMensajeError('No hay ecuación cerca para dar pista');
    }
}

// Función para perder vida
function perderVida(ecuacionId) {
    if (!juegoActivo) return;

    vidas--;
    actualizarVidas();
    eliminarEcuacion(ecuacionId);
    playSound('error');

    if (vidas <= 0) {
        terminarJuego();
    } else {
        mostrarMensajeError(`¡Ecuación perdida! Te quedan ${vidas} vidas`);
    }
}

// Función para subir de nivel
function subirNivel() {
    nivel++;
    velocidad = Math.max(500, velocidad - 300);
    velocidadCaida += 0.5;

    clearInterval(intervaloEcuaciones);
    intervaloEcuaciones = setInterval(crearEcuacion, velocidad);

    mostrarMensajeExito(`¡Nivel ${nivel}! Velocidad aumentada`);
}

// Función para actualizar puntaje
function actualizarPuntaje() {
    if (spanPuntaje) {
        spanPuntaje.textContent = puntaje;
    }
}

// Función para actualizar vidas
function actualizarVidas() {
    if (zonaGolpe) {
        const vidasText = '❤️'.repeat(vidas) + '♡'.repeat(3 - vidas);
        zonaGolpe.innerHTML = `Vidas: ${vidasText}<br>Escribe la respuesta`;
    }
}

// Función para mostrar mensaje de error
function mostrarMensajeError(mensaje) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger position-fixed top-0 start-50 translate-middle-x mt-3';
    errorDiv.style.zIndex = '1000';
    errorDiv.textContent = mensaje;
    document.body.appendChild(errorDiv);

    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 3000);
}

// Función para mostrar mensaje de éxito
function mostrarMensajeExito(mensaje) {
    const successDiv = document.createElement('div');
    successDiv.className = 'alert alert-success position-fixed top-0 start-50 translate-middle-x mt-3';
    successDiv.style.zIndex = '1000';
    successDiv.textContent = mensaje;
    document.body.appendChild(successDiv);

    setTimeout(() => {
        if (successDiv.parentNode) {
            successDiv.remove();
        }
    }, 3000);
}

// Función para mostrar modal correcto
function mostrarModalCorrecto() {
    const modalElement = document.getElementById('modalCorrecto');
    if (modalElement) {
        const modal = new bootstrap.Modal(modalElement);
        modal.show();

        setTimeout(() => {
            modal.hide();
        }, 1000);
    }
}

// Función para mostrar modal error
function mostrarModalError(mensaje) {
    const errorCuerpo = document.getElementById('errorCuerpo');
    const modalElement = document.getElementById('modalError');

    if (errorCuerpo && modalElement) {
        errorCuerpo.textContent = mensaje;
        const modal = new bootstrap.Modal(modalElement);
        modal.show();

        setTimeout(() => {
            modal.hide();
        }, 2000);
    }
}

// Función para terminar juego
function terminarJuego() {
    juegoActivo = false;
    clearInterval(intervaloEcuaciones);
    if (intervaloAnimacion) {
        cancelAnimationFrame(intervaloAnimacion);
    }
    playSound('gameOver');

    // Mostrar modal final
    if (spanPuntajeFinal) {
        spanPuntajeFinal.textContent = puntaje;
    }

    const mensajeFinal = document.getElementById('mensajeFinal');
    if (mensajeFinal) {
        let mensaje = '';
        if (puntaje >= 100) {
            mensaje = `¡Excelente! Obtuviste ${puntaje} puntos`;
        } else if (puntaje >= 50) {
            mensaje = `¡Buen trabajo! Obtuviste ${puntaje} puntos`;
        } else {
            mensaje = `¡Sigue practicando! Obtuviste ${puntaje} puntos`;
        }
        mensajeFinal.textContent = mensaje;
    }

    const modalFinal = document.getElementById('modalFinal');
    if (modalFinal) {
        const modal = new bootstrap.Modal(modalFinal);
        modal.show();
    }

    if (btnInicio) {
        btnInicio.disabled = false;
        btnInicio.textContent = 'Jugar de nuevo';
    }
}

// Función para reiniciar juego
function reiniciarJuego() {
    // Limpiar todo
    ecuaciones = [];
    if (zonaJuego) {
        zonaJuego.innerHTML = '';
    }
    if (inputRespuesta) {
        inputRespuesta.value = '';
    }

    // Cerrar modales
    const modales = document.querySelectorAll('.modal');
    modales.forEach(modal => {
        const bsModal = bootstrap.Modal.getInstance(modal);
        if (bsModal) {
            bsModal.hide();
        }
    });

    // Reiniciar
    setTimeout(() => {
        iniciarJuego();
    }, 500);
}

// Event listener para pausar con la tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && juegoActivo) {
        juegoActivo = !juegoActivo;
        if (juegoActivo) {
            animarEcuaciones();
            if (btnInicio) {
                btnInicio.textContent = 'Pausar';
            }
        } else {
            if (btnInicio) {
                btnInicio.textContent = 'Reanudar';
            }
        }
    }
});

console.log('J_P.js cargado correctamente');