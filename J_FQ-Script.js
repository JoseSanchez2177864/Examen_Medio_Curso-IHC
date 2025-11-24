<<<<<<< HEAD
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
        correctIndex: 1
    },
    {
        question: "¿Cuál es la unidad de fuerza en el Sistema Internacional?",
        options: ["Joule (J)", "Watt (W)", "Newton (N)", "Pascal (Pa)"],
        correctIndex: 2
    },
    {
        question: "¿Cuál de las siguientes magnitudes es vectorial?",
        options: ["Distancia", "Tiempo", "Velocidad", "Masa"],
        correctIndex: 2
    },
    {
        question: "La pendiente de una gráfica posición-tiempo representa:",
        options: ["La aceleración", "La velocidad", "La fuerza", "La energía"],
        correctIndex: 1
    },
    {
        question: "Valor aproximado de la aceleración de la gravedad en la Tierra:",
        options: ["1 m/s²", "4.9 m/s²", "9.8 m/s²", "15 m/s²"],
        correctIndex: 2
    },
    {
        question: "Según la primera ley de Newton (inercia), un objeto en reposo:",
        options: [
            "Siempre se acelera",
            "Permanece en reposo si no actúa una fuerza neta",
            "Se mueve con velocidad constante",
            "Cambia de dirección constantemente"
        ],
        correctIndex: 1
    },
    {
        question: "Si una fuerza de 10 N actúa sobre una masa de 2 kg, ¿qué aceleración produce?",
        options: ["2 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"],
        correctIndex: 1
    },
    {
        question: "¿Cuál es la unidad del trabajo en el Sistema Internacional?",
        options: ["Joule (J)", "Newton (N)", "Watt (W)", "Kilogramo (kg)"],
        correctIndex: 0
    },
    {
        question: "Un choque donde NO se conserva la energía mecánica, pero SÍ la cantidad de movimiento, se llama:",
        options: ["Elástico", "Inelástico", "Rotacional", "Parabólico"],
        correctIndex: 1
    },
    {
        question: "¿Qué tipo de onda es el sonido en el aire?",
        options: ["Mecánica transversal", "Electromagnética", "Mecánica longitudinal", "Estacionaria"],
        correctIndex: 2
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
    overlayText.innerHTML =
        `Tubos pasados: <strong>${scorePipes}</strong><br>` +
        `Preguntas correctas: <strong>${scoreQuiz}</strong> de ${TOTAL_QUESTIONS}`;
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
        feedbackText.textContent = "¡Correcto! 🧠";
        feedbackText.style.color = "green";
        updateHUD();

        setTimeout(() => {
            questionBox.classList.add("hidden");
            feedbackText.textContent = "";

            // Si ya fue la última pregunta, terminar juego
            if (questionsAsked >= TOTAL_QUESTIONS) {
                endGame();
            } else {
                startCountdown();
            }
        }, 800);
    } else {
        feedbackText.textContent = "Incorrecto. Se reinicia el juego.";
        feedbackText.style.color = "red";

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

// Botón de reinicio total
btnReset.addEventListener("click", (e) => {
    e.preventDefault();
    btnReset.blur();
    resetGame(true);
});

// Botón de volver al inicio (mantiene puntajes)
btnHome.addEventListener("click", (e) => {
    e.preventDefault();
    btnHome.blur();
    window.location.href = "dashboard.html";
});

// INICIO


const welcomeModal = document.getElementById("welcomeModal");
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


=======
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
        correctIndex: 1
    },
    {
        question: "¿Cuál es la unidad de fuerza en el Sistema Internacional?",
        options: ["Joule (J)", "Watt (W)", "Newton (N)", "Pascal (Pa)"],
        correctIndex: 2
    },
    {
        question: "¿Cuál de las siguientes magnitudes es vectorial?",
        options: ["Distancia", "Tiempo", "Velocidad", "Masa"],
        correctIndex: 2
    },
    {
        question: "La pendiente de una gráfica posición-tiempo representa:",
        options: ["La aceleración", "La velocidad", "La fuerza", "La energía"],
        correctIndex: 1
    },
    {
        question: "Valor aproximado de la aceleración de la gravedad en la Tierra:",
        options: ["1 m/s²", "4.9 m/s²", "9.8 m/s²", "15 m/s²"],
        correctIndex: 2
    },
    {
        question: "Según la primera ley de Newton (inercia), un objeto en reposo:",
        options: [
            "Siempre se acelera",
            "Permanece en reposo si no actúa una fuerza neta",
            "Se mueve con velocidad constante",
            "Cambia de dirección constantemente"
        ],
        correctIndex: 1
    },
    {
        question: "Si una fuerza de 10 N actúa sobre una masa de 2 kg, ¿qué aceleración produce?",
        options: ["2 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"],
        correctIndex: 1
    },
    {
        question: "¿Cuál es la unidad del trabajo en el Sistema Internacional?",
        options: ["Joule (J)", "Newton (N)", "Watt (W)", "Kilogramo (kg)"],
        correctIndex: 0
    },
    {
        question: "Un choque donde NO se conserva la energía mecánica, pero SÍ la cantidad de movimiento, se llama:",
        options: ["Elástico", "Inelástico", "Rotacional", "Parabólico"],
        correctIndex: 1
    },
    {
        question: "¿Qué tipo de onda es el sonido en el aire?",
        options: ["Mecánica transversal", "Electromagnética", "Mecánica longitudinal", "Estacionaria"],
        correctIndex: 2
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
    overlayText.innerHTML =
        `Tubos pasados: <strong>${scorePipes}</strong><br>` +
        `Preguntas correctas: <strong>${scoreQuiz}</strong> de ${TOTAL_QUESTIONS}`;
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
        feedbackText.textContent = "¡Correcto! 🧠";
        feedbackText.style.color = "green";
        updateHUD();

        setTimeout(() => {
            questionBox.classList.add("hidden");
            feedbackText.textContent = "";

            // Si ya fue la última pregunta, terminar juego
            if (questionsAsked >= TOTAL_QUESTIONS) {
                endGame();
            } else {
                startCountdown();
            }
        }, 800);
    } else {
        feedbackText.textContent = "Incorrecto. Se reinicia el juego.";
        feedbackText.style.color = "red";

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

// Botón de reinicio total
btnReset.addEventListener("click", (e) => {
    e.preventDefault();
    btnReset.blur();
    resetGame(true);
});

// Botón de volver al inicio (mantiene puntajes)
btnHome.addEventListener("click", (e) => {
    e.preventDefault();
    btnHome.blur();
    window.location.href = "dashboard.html";
});

// INICIO


const welcomeModal = document.getElementById("welcomeModal");
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


>>>>>>> be0e305 (Añadi la tabla en juego de telarañas y añadi un juego de lamateria de matematicas)
