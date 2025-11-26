// J_PR.js - Juego de Tiro Parabólico (Tema Oscuro)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Juego Tiro Parabólico cargado - Tema Oscuro');

    // Variables del juego
    let puntaje = 0;
    let juegoActivo = false;
    let nivelActual = 1;
    let proyectil = null;
    let animacionId = null;

    // Elementos DOM
    const btnInicio = document.getElementById('btnInicio');
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');
    const btnDisparar = document.getElementById('btnDisparar');
    const btnReset = document.getElementById('btnReset');
    const btnPista = document.getElementById('btnPista');
    const puntajeElement = document.getElementById('puntaje');
    const nivelElement = document.getElementById('nivel');

    // Controles
    const anguloControl = document.getElementById('angulo');
    const velocidadControl = document.getElementById('velocidad');
    const gravedadControl = document.getElementById('gravedad');
    const anguloValue = document.getElementById('anguloValue');
    const velocidadValue = document.getElementById('velocidadValue');
    const gravedadValue = document.getElementById('gravedadValue');

    // Info del proyectil
    const alturaMaximaElement = document.getElementById('alturaMaxima');
    const alcanceElement = document.getElementById('alcance');
    const tiempoVueloElement = document.getElementById('tiempoVuelo');

    // Objetivo actual
    let objetivo = {
        x: 0,
        y: 0,
        radio: 20,
        activo: false
    };

    // Niveles del juego
    const niveles = [
        { x: 600, y: 350, radio: 30, puntos: 10 },
        { x: 650, y: 300, radio: 25, puntos: 15 },
        { x: 700, y: 250, radio: 20, puntos: 20 },
        { x: 500, y: 200, radio: 25, puntos: 25 },
        { x: 750, y: 150, radio: 15, puntos: 30 }
    ];

    // Mostrar modal de introducción al cargar
    const modalIntro = new bootstrap.Modal(document.getElementById('modalIntroduccion'));
    modalIntro.show();

    // Event Listeners
    btnInicio.addEventListener('click', iniciarJuego);
    btnDisparar.addEventListener('click', dispararProyectil);
    btnReset.addEventListener('click', resetearJuego);
    btnPista.addEventListener('click', mostrarPista);

    // Actualizar valores de controles
    anguloControl.addEventListener('input', function() {
        anguloValue.textContent = this.value + '°';
        if (juegoActivo) calcularTrayectoria();
    });

    velocidadControl.addEventListener('input', function() {
        velocidadValue.textContent = this.value + ' m/s';
        if (juegoActivo) calcularTrayectoria();
    });

    gravedadControl.addEventListener('input', function() {
        gravedadValue.textContent = this.value + ' m/s²';
        if (juegoActivo) calcularTrayectoria();
    });

    // Botones del modal final
    document.getElementById('btnRepetir').addEventListener('click', function() {
        location.reload();
    });

    document.getElementById('btnInicioModal').addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    document.getElementById('btnMasJuegos').addEventListener('click', function() {
        window.location.href = 'dashboard.html';
    });

    function iniciarJuego() {
        juegoActivo = true;
        btnInicio.style.display = 'none';
        btnDisparar.disabled = false;

        // Configurar primer nivel
        configurarNivel(nivelActual);

        // Dibujar escenario inicial
        dibujarEscenario();

        console.log('Juego iniciado - Nivel ' + nivelActual);
    }

    function configurarNivel(nivel) {
        if (nivel <= niveles.length) {
            const config = niveles[nivel - 1];
            objetivo.x = config.x;
            objetivo.y = config.y;
            objetivo.radio = config.radio;
            objetivo.activo = true;

            nivelElement.textContent = nivel;

            // Calcular trayectoria teórica
            calcularTrayectoria();

            // Dibujar escenario con nuevo objetivo
            dibujarEscenario();
        } else {
            // Juego completado
            juegoCompletado();
        }
    }

    function calcularTrayectoria() {
        if (!juegoActivo) return;

        const angulo = parseFloat(anguloControl.value) * Math.PI / 180;
        const velocidad = parseFloat(velocidadControl.value);
        const gravedad = parseFloat(gravedadControl.value);

        // Calcular valores teóricos
        const tiempoVuelo = (2 * velocidad * Math.sin(angulo)) / gravedad;
        const alcance = (velocidad * velocidad * Math.sin(2 * angulo)) / gravedad;
        const alturaMaxima = (velocidad * velocidad * Math.sin(angulo) * Math.sin(angulo)) / (2 * gravedad);

        // Actualizar información
        tiempoVueloElement.textContent = tiempoVuelo.toFixed(2) + ' s';
        alcanceElement.textContent = alcance.toFixed(2) + ' m';
        alturaMaximaElement.textContent = alturaMaxima.toFixed(2) + ' m';
    }

    function dispararProyectil() {
        if (!juegoActivo || animacionId) return;

        const angulo = parseFloat(anguloControl.value) * Math.PI / 180;
        const velocidad = parseFloat(velocidadControl.value);
        const gravedad = parseFloat(gravedadControl.value);

        // Crear proyectil
        proyectil = {
            x: 50,
            y: canvas.height - 50,
            vx: velocidad * Math.cos(angulo),
            vy: -velocidad * Math.sin(angulo),
            radio: 10,
            tiempo: 0,
            trayectoria: []
        };

        // Deshabilitar controles durante el disparo
        btnDisparar.disabled = true;
        anguloControl.disabled = true;
        velocidadControl.disabled = true;
        gravedadControl.disabled = true;

        // Iniciar animación
        animarProyectil(gravedad);
    }

    function animarProyectil(gravedad) {
        function animar() {
            // Actualizar posición
            proyectil.tiempo += 0.05;
            proyectil.x = 50 + proyectil.vx * proyectil.tiempo;
            proyectil.y = (canvas.height - 50) + proyectil.vy * proyectil.tiempo + 0.5 * gravedad * proyectil.tiempo * proyectil.tiempo;

            // Guardar punto de trayectoria
            proyectil.trayectoria.push({ x: proyectil.x, y: proyectil.y });

            // Limitar trayectoria a 50 puntos para rendimiento
            if (proyectil.trayectoria.length > 50) {
                proyectil.trayectoria.shift();
            }

            // Dibujar escenario con proyectil
            dibujarEscenario();
            dibujarProyectil();

            // Verificar colisión con objetivo
            if (verificarColision()) {
                cancelAnimationFrame(animacionId);
                animacionId = null;
                objetivoAlcanzado();
                return;
            }

            // Verificar si salió del canvas
            if (proyectil.x > canvas.width || proyectil.y > canvas.height || proyectil.x < 0) {
                cancelAnimationFrame(animacionId);
                animacionId = null;
                objetivoFallado();
                return;
            }

            animacionId = requestAnimationFrame(animar);
        }

        animacionId = requestAnimationFrame(animar);
    }

    function verificarColision() {
        if (!objetivo.activo || !proyectil) return false;

        const distancia = Math.sqrt(
            Math.pow(proyectil.x - objetivo.x, 2) +
            Math.pow(proyectil.y - objetivo.y, 2)
        );

        return distancia < (objetivo.radio + proyectil.radio);
    }

    function objetivoAlcanzado() {
        const puntosNivel = niveles[nivelActual - 1].puntos;
        puntaje += puntosNivel;
        puntajeElement.textContent = puntaje;

        const modalCorrecto = new bootstrap.Modal(document.getElementById('modalCorrecto'));
        modalCorrecto.show();

        // Avanzar al siguiente nivel después de un delay
        setTimeout(() => {
            nivelActual++;
            if (nivelActual <= niveles.length) {
                configurarNivel(nivelActual);
                habilitarControles();
            } else {
                juegoCompletado();
            }
        }, 1500);
    }

    function objetivoFallado() {
        const modalError = new bootstrap.Modal(document.getElementById('modalError'));
        document.getElementById('errorCuerpo').textContent =
            'El proyectil no alcanzó el objetivo. Ajusta el ángulo y velocidad.';
        modalError.show();

        // Rehabilitar controles para reintentar
        habilitarControles();
    }

    function habilitarControles() {
        btnDisparar.disabled = false;
        anguloControl.disabled = false;
        velocidadControl.disabled = false;
        gravedadControl.disabled = false;
    }

    function resetearJuego() {
        if (animacionId) {
            cancelAnimationFrame(animacionId);
            animacionId = null;
        }

        proyectil = null;
        habilitarControles();
        calcularTrayectoria();
        dibujarEscenario();
    }

    function mostrarPista() {
        const angulo = parseFloat(anguloControl.value);
        const velocidad = parseFloat(velocidadControl.value);

        let mensaje = `Para el nivel ${nivelActual}: `;

        // Pista simple basada en la posición del objetivo
        if (objetivo.x > 600) {
            mensaje += "Intenta con un ángulo mayor y más velocidad para alcanzar distancias largas.";
        } else if (objetivo.y < 250) {
            mensaje += "Necesitas un ángulo pronunciado y suficiente velocidad para alcanzar altura.";
        } else {
            mensaje += "Ajusta cuidadosamente el ángulo y velocidad según la posición del objetivo.";
        }

        alert(mensaje);
    }

    function juegoCompletado() {
        juegoActivo = false;
        document.getElementById('puntajeFinal').textContent = puntaje;
        const modalFinal = new bootstrap.Modal(document.getElementById('modalFinal'));
        modalFinal.show();
    }

    function dibujarEscenario() {
        // Limpiar canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dibujar fondo oscuro
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Dibujar suelo
        ctx.fillStyle = '#2a4a2a';
        ctx.fillRect(0, canvas.height - 30, canvas.width, 30);

        // Dibujar línea de referencia
        ctx.strokeStyle = 'rgba(0, 245, 212, 0.3)';
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(0, canvas.height - 50);
        ctx.lineTo(canvas.width, canvas.height - 50);
        ctx.stroke();
        ctx.setLineDash([]);

        // Dibujar objetivo si está activo
        if (objetivo.activo) {
            // Círculo exterior
            ctx.fillStyle = '#ff006e';
            ctx.beginPath();
            ctx.arc(objetivo.x, objetivo.y, objetivo.radio, 0, Math.PI * 2);
            ctx.fill();

            // Círculo interior
            ctx.fillStyle = '#ff4da6';
            ctx.beginPath();
            ctx.arc(objetivo.x, objetivo.y, objetivo.radio / 2, 0, Math.PI * 2);
            ctx.fill();

            // Efecto de brillo
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(objetivo.x, objetivo.y, objetivo.radio + 2, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Dibujar cañón o punto de lanzamiento
        ctx.fillStyle = '#ffcc00';
        ctx.beginPath();
        ctx.arc(50, canvas.height - 50, 15, 0, Math.PI * 2);
        ctx.fill();

        // Dibujar línea de dirección del cañón
        const angulo = parseFloat(anguloControl.value) * Math.PI / 180;
        ctx.strokeStyle = '#ffcc00';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(50, canvas.height - 50);
        ctx.lineTo(
            50 + 40 * Math.cos(angulo),
            canvas.height - 50 - 40 * Math.sin(angulo)
        );
        ctx.stroke();
    }

    function dibujarProyectil() {
        if (!proyectil) return;

        // Dibujar trayectoria
        if (proyectil.trayectoria.length > 1) {
            ctx.strokeStyle = 'rgba(0, 245, 212, 0.7)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(proyectil.trayectoria[0].x, proyectil.trayectoria[0].y);

            for (let i = 1; i < proyectil.trayectoria.length; i++) {
                ctx.lineTo(proyectil.trayectoria[i].x, proyectil.trayectoria[i].y);
            }

            ctx.stroke();
        }

        // Dibujar proyectil
        ctx.fillStyle = '#ff9900';
        ctx.beginPath();
        ctx.arc(proyectil.x, proyectil.y, proyectil.radio, 0, Math.PI * 2);
        ctx.fill();

        // Dibujar borde del proyectil
        ctx.strokeStyle = '#ffcc00';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(proyectil.x, proyectil.y, proyectil.radio, 0, Math.PI * 2);
        ctx.stroke();

        // Efecto de brillo
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(proyectil.x, proyectil.y, proyectil.radio + 3, 0, Math.PI * 2);
        ctx.stroke();
    }

    // Inicializar cálculo de trayectoria
    calcularTrayectoria();
});