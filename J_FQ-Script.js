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

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const scorePipesSpan = document.getElementById("scorePipes");
const scoreQuizSpan = document.getElementById("scoreQuiz");
const questionsCountSpan = document.getElementById("questionsCount");

const overlay = document.getElementById("overlayMessage");
const overlayTitle = document.getElementById("overlayTitle");
const overlayText = document.getElementById("overlayText");

const questionBox = document.getElementById("questionBox");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const feedbackText = document.getElementById("feedback");

const btnReset = document.getElementById("btnReset");
const btnHome = document.getElementById("btnHome");
let modal = new bootstrap.Modal(document.getElementById('modalIntroduccion'));
modal.show();
if (infoPanel) infoPanel.style.display = "none";


const pipeWidth = 60;
const pipeGap = 150;
const pipeSpeed = -2.5;
const gravity = 0.4;
const jumpStrength = -7;

let bird;
let pipes;
let frameCount;
let scorePipes;
let scoreQuiz;
let questionsAsked;
let isRunning = false;
let isPausedForQuestion = false;
let currentQuestionIndex = null;
let countdownIntervalId = null;

window.flappyQuizData = {
    subject: "Física",
    scorePipes: 0,
    scoreQuiz: 0,
    questionsAsked: 0,
    lastUpdated: null
};

const questions = [
    {
        question: "Un coche pasa de 0 a 20 m/s en 5 s. ¿Cuál es su aceleración promedio?",
        options: ["2 m/s²", "4 m/s²", "5 m/s²", "10 m/s²"],
        correctIndex: 1,
        explanation: "La aceleración se calcula como el cambio de velocidad dividido por el tiempo: a = (20 - 0) / 5 = 4 m/s²."
    },
    {
        question: "¿Cuál es la unidad de fuerza en el Sistema Internacional?",
        options: ["Joule (J)", "Watt (W)", "Newton (N)", "Pascal (Pa)"],
        correctIndex: 2,
        explanation: "El Newton (N) es la unidad de fuerza. El Joule es para energía, el Watt para potencia y el Pascal para presión."
    },
    {
        question: "¿Cuál de las siguientes magnitudes es vectorial?",
        options: ["Distancia", "Tiempo", "Velocidad", "Masa"],
        correctIndex: 2,
        explanation: "La velocidad es vectorial porque tiene magnitud y dirección. La distancia, el tiempo y la masa son magnitudes escalares (solo tienen magnitud)."
    },
    {
        question: "La pendiente de una gráfica posición-tiempo representa:",
        options: ["La aceleración", "La velocidad", "La fuerza", "La energía"],
        correctIndex: 1,
        explanation: "La pendiente es el cambio en la posición (eje vertical) dividido por el cambio en el tiempo (eje horizontal), lo cual define la velocidad."
    },
    {
        question: "Valor aproximado de la aceleración de la gravedad en la Tierra:",
        options: ["1 m/s²", "4.9 m/s²", "9.8 m/s²", "15 m/s²"],
        correctIndex: 2,
        explanation: "El valor estándar aceptado para la gravedad en la superficie terrestre es aproximadamente 9.8 m/s² (o 9.81 m/s²)."
    },
    {
        question: "Según la primera ley de Newton (inercia), un objeto en reposo:",
        options: [
            "Siempre se acelera",
            "Permanece en reposo si no actúa una fuerza neta",
            "Se mueve con velocidad constante",
            "Cambia de dirección constantemente"
        ],
        correctIndex: 1,
        explanation: "La Primera Ley establece que un cuerpo mantiene su estado de reposo o movimiento rectilíneo uniforme a menos que una fuerza externa neta actúe sobre él."
    },
    {
        question: "Si una fuerza de 10 N actúa sobre una masa de 2 kg, ¿qué aceleración produce?",
        options: ["2 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"],
        correctIndex: 1,
        explanation: "Usando la Segunda Ley de Newton (F = m * a), despejamos la aceleración: a = F / m = 10 N / 2 kg = 5 m/s²."
    },
    {
        question: "¿Cuál es la unidad del trabajo en el Sistema Internacional?",
        options: ["Joule (J)", "Newton (N)", "Watt (W)", "Kilogramo (kg)"],
        correctIndex: 0,
        explanation: "El trabajo es una forma de energía y se mide en Joules (J). Un Joule equivale a un Newton por metro (N·m)."
    },
    {
        question: "Un choque donde NO se conserva la energía mecánica, pero SÍ la cantidad de movimiento, se llama:",
        options: ["Elástico", "Inelástico", "Rotacional", "Parabólico"],
        correctIndex: 1,
        explanation: "En los choques inelásticos, parte de la energía cinética se transforma en calor o deformación, por lo que no se conserva, aunque el momento lineal sí se mantiene."
    },
    {
        question: "¿Qué tipo de onda es el sonido en el aire?",
        options: ["Mecánica transversal", "Electromagnética", "Mecánica longitudinal", "Estacionaria"],
        correctIndex: 2,
        explanation: "El sonido requiere un medio material (mecánica) y las partículas vibran en la misma dirección de la propagación de la onda (longitudinal)."
    }
];

const TOTAL_QUESTIONS = questions.length;

let questionOrder = [];

function shuffleQuestions() {
    questionOrder = [];
    for (let i = 0; i < questions.length; i++) {
        questionOrder.push(i);
    }
    for (let i = questionOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questionOrder[i], questionOrder[j]] = [questionOrder[j], questionOrder[i]];
    }
}

shuffleQuestions();

function resetGame(fullReset = true) {
    if (countdownIntervalId) {
        clearInterval(countdownIntervalId);
        countdownIntervalId = null;
    }

    bird = {
        x: 80,
        y: canvas.height / 2,
        width: 30,
        height: 30,
        vy: 0
    };

    pipes = [];
    frameCount = 0;
    scorePipes = fullReset ? 0 : scorePipes;

    if (fullReset) {
        scoreQuiz = 0;
        questionsAsked = 0;
        shuffleQuestions();
    }

    isRunning = false;
    isPausedForQuestion = false;

    questionBox.classList.add("hidden");
    feedbackText.textContent = "";

    overlay.classList.remove("hidden");
    overlayTitle.textContent = "Flappy Quiz - Física";
    overlayText.textContent = "Presiona cualquier tecla para comenzar";

    updateHUD();
    drawInitialScreen();
}

function updateHUD() {
    scorePipesSpan.textContent = scorePipes;
    scoreQuizSpan.textContent = scoreQuiz;
    questionsCountSpan.textContent = questionsAsked;

    window.flappyQuizData.scorePipes = scorePipes;
    window.flappyQuizData.scoreQuiz = scoreQuiz;
    window.flappyQuizData.questionsAsked = questionsAsked;
    window.flappyQuizData.lastUpdated = new Date().toISOString();
}

function drawBird() {
    ctx.fillStyle = "yellow";
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
}

function drawPipes() {
    ctx.fillStyle = "green";
    for (let pipe of pipes) {
        ctx.fillRect(pipe.x, 0, pipeWidth, pipe.top);
        ctx.fillRect(pipe.x, pipe.bottom, pipeWidth, canvas.height - pipe.bottom);
    }
}

function drawInitialScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#4ec0ca";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawBird();
}

function endGame() {
    if (countdownIntervalId) {
        clearInterval(countdownIntervalId);
        countdownIntervalId = null;
    }
    isRunning = false;
    isPausedForQuestion = true;
    questionBox.classList.add("hidden");

    overlay.classList.remove("hidden");
    overlayTitle.textContent = "Game Over";
    let modalFinal = new bootstrap.Modal(document.getElementById('modalFinal'));
    $('#mensajeFinal').html(`Tu puntaje final fue de <strong>${scoreQuiz}/10</strong>, y en tan solo <strong>${questionsAsked}</strong> preguntas ¡Excelente trabajo!`);
    modalFinal.show();
    document.getElementById('btnInicio').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    document.getElementById('btnRepetir').addEventListener('click', () => {
        location.reload();
    });
    document.getElementById('btnMasJuegos').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });
}

// TUBOS
function spawnPipe() {
    const topHeight = Math.random() * 200 + 40;
    const bottomY = topHeight + pipeGap;
    pipes.push({
        x: canvas.width,
        top: topHeight,
        bottom: bottomY,
        scored: false
    });
}

// PREGUNTA 
function showQuestion() {
    // Si ya se hicieron todas las preguntas → terminar juego
    if (questionsAsked >= TOTAL_QUESTIONS || questionOrder.length === 0) {
        endGame();
        return;
    }

    if (isPausedForQuestion) return;
    isPausedForQuestion = true;

    currentQuestionIndex = questionOrder.shift();
    const q = questions[currentQuestionIndex];

    questionsAsked++;
    updateHUD();

    questionText.textContent = q.question;
    feedbackText.textContent = "";
    optionsContainer.innerHTML = "";

    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.className = "optionBtn";
        btn.textContent = opt;
        btn.onclick = () => handleAnswer(i);
        optionsContainer.appendChild(btn);
    });

    questionBox.classList.remove("hidden");
}

function startCountdown() {
    if (countdownIntervalId) {
        clearInterval(countdownIntervalId);
        countdownIntervalId = null;
    }

    let remaining = 3;

    overlay.classList.remove("hidden");
    overlayTitle.textContent = "Prepárate";
    overlayText.textContent = `Regresas en ${remaining}...`;

    countdownIntervalId = setInterval(() => {
        remaining--;

        if (remaining > 0) {
            overlayText.textContent = `Regresas en ${remaining}...`;
        } else {
            clearInterval(countdownIntervalId);
            countdownIntervalId = null;
            overlay.classList.add("hidden");
            isPausedForQuestion = false;
        }
    }, 1000);
}

function handleAnswer(selected) {
    const q = questions[currentQuestionIndex];
    const correct = selected === q.correctIndex;

    if (correct) {
        scoreQuiz++;
        SCorrecto.currentTime = 0;
        SCorrecto.play();
        let modalCorrecto = new bootstrap.Modal(document.getElementById('modalCorrecto'));
        modalCorrecto.show();
        $("#modalCorrecto .modal-content").addClass("animate__animated animate__pulse");
        setTimeout(() => {
            modalCorrecto.hide();
            mostrarCompuesto();
        }, 1500);
        updateHUD();

        setTimeout(() => {
            questionBox.classList.add("hidden");
            feedbackText.textContent = "";

            // Si ya fue la última pregunta, terminar juego
            if (questionsAsked >= TOTAL_QUESTIONS) {
                SFinal.currentTime = 0;
                SFinal.play();
                endGame();
            } else {
                startCountdown();
            }
        }, 800);
    } else {
        const respuestaCorrecta = q.options[q.correctIndex]; // Texto de la opción correcta
        const explicacionTexto = q.explanation || "No hay explicación disponible."; // Texto de la explicación
        let modalError = new bootstrap.Modal(document.getElementById('modalError'));

        // 3. Rellenamos el contenido
        $('#errorTitulo').text(`❌ ¡Incorrecto!`);
        $('#errorCuerpo').html(`
            <p class="fs-4 fw-bold" style="color: #ff008a; margin-bottom: 5px;">
                La respuesta correcta era:
            </p>
            <p class="fs-3 fw-bold mb-3" style="color: #ffffff; text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);">
                ${respuestaCorrecta}
            </p>
            
            <div style="text-align: center; margin-top: 20px; color: #ffffff;">
                <p class="fw-bold mb-1">Explicación:</p>
                <p class="mb-0 px-4">${explicacionTexto}</p>
            </div>

            <p class="small text-muted mb-0" style="color: rgba(255, 255, 255, 0.6); margin-top: 15px;">
                Presiona "Continuar" para volver al inicio del laberinto.
            </p>
        `);

        // ... (resto del código del else) ...

        // 4. Mostramos el modal y reproducimos el sonido
        modalError.show();
        SError.currentTime = 0;
        SError.play();

        setTimeout(() => {
            questionBox.classList.add("hidden");
            feedbackText.textContent = "";
            resetGame(true);
        }, 900);
    }
}

function gameLoop() {
    requestAnimationFrame(gameLoop);

    if (!isRunning || isPausedForQuestion) return;

    frameCount++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#4ec0ca";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Física del pájaro
    bird.vy += gravity;
    bird.y += bird.vy;

    // Spawnear tubos
    if (frameCount % 120 === 0) spawnPipe();

    // Mover tubos y revisar si pasó uno
    for (let i = pipes.length - 1; i >= 0; i--) {
        const pipe = pipes[i];
        pipe.x += pipeSpeed;

        // Si ya lo pasó el pájaro -> pregunta
        if (!pipe.scored && pipe.x + pipeWidth < bird.x) {
            pipe.scored = true;
            scorePipes++;
            updateHUD();
            showQuestion();   // SOLO AQUÍ salen las preguntas
            return;
        }

        if (pipe.x + pipeWidth < 0) {
            pipes.splice(i, 1);
        }
    }

    drawPipes();
    drawBird();

    //  COLISIONES

    // Suelo o techo
    if (bird.y <= 0 || bird.y + bird.height >= canvas.height) {
        resetGame(true);
        return;
    }

    // Colisión con tubos
    for (let pipe of pipes) {
        const withinX = bird.x < pipe.x + pipeWidth && bird.x + bird.width > pipe.x;
        const hitTop = bird.y < pipe.top;
        const hitBot = bird.y + bird.height > pipe.bottom;

        if (withinX && (hitTop || hitBot)) {
            resetGame(true);
            return;
        }
    }
}


// CONTROLES
document.addEventListener("keydown", (e) => {
    // Evitar que Space/Enter activen el botón enfocado
    if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
    }

    if (isRunning && !isPausedForQuestion) {
        bird.vy = jumpStrength;
    }

    if (!isRunning && !isPausedForQuestion) {
        overlay.classList.add("hidden");
        isRunning = true;
    }
});



// INICIO


const welcomeModal = document.getElementById("modalIntroduccion");
const startGameButton = document.getElementById("startGameButton");

// Al cargar la página, mostrar el modal y bloquear juego
document.addEventListener("DOMContentLoaded", () => {
    isRunning = false;
    welcomeModal.style.display = "flex";
});

// Iniciar juego al presionar Comenzar
startGameButton.addEventListener("click", () => {
    welcomeModal.style.display = "none";

    // “Presiona una tecla para comenzar”
    overlay.classList.remove("hidden");
});

resetGame(true);
gameLoop();


