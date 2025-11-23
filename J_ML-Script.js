const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const doorsOpenedSpan = document.getElementById("doorsOpened");
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

const welcomeModal = document.getElementById("welcomeModal");
const startGameButton = document.getElementById("startGameButton");


const rows = 15;
const cols = 15;
const tileSize = 40;

let mazeLayout = [
    "###############",
    "#S..#....#...A#",
    "###.#.##.#.####",
    "#...#.#..#....#",
    "#.#.#.#.#######",
    "#.#...#....#B.#",
    "#.#####.##.#.##",
    "#.....#....#..#",
    "#####.######.##",
    "#C....#....#..#",
    "###.####.##.###",
    "#..D#....#....#",
    "##.######.#.###",
    "#........#..G.#",
    "###############"
];


const doorQuestionMap = {
    "A": 0,
    "B": 1,
    "C": 2,
    "D": 3
};

let player = {
    row: 0,
    col: 0
};

let startPos = { row: 0, col: 0 };
let goalPos = { row: 0, col: 0 };

let isRunning = false;
let isPausedForQuestion = false;
let currentDoor = null;
let currentQuestionIndex = null;

let doorsOpened = 0;
let scoreQuiz = 0;
let questionsAsked = 0;


window.mazeMathData = {
    subject: "Matemáticas",
    doorsOpened: 0,
    scoreQuiz: 0,
    questionsAsked: 0,
    lastUpdated: null
};


const questions = [
    {
        question: "Resuelve: 2x + 3 = 11. ¿Cuál es x?",
        options: ["3", "4", "5", "8"],
        correctIndex: 1
    },
    {
        question: "¿Cuál es la pendiente de la recta y = -3x + 2?",
        options: ["-3", "2", "3", "1/3"],
        correctIndex: 0
    },
    {
        question: "Simplifica: (x^2)(x^3) =",
        options: ["x^5", "x^6", "x^8", "x^9"],
        correctIndex: 0
    },
    {
        question: "¿Cuál es la raíz cuadrada de 81?",
        options: ["7", "8", "9", "10"],
        correctIndex: 2
    },
    {
        question: "Si f(x) = 3x - 1, ¿cuánto vale f(2)?",
        options: ["5", "4", "6", "3"],
        correctIndex: 0
    },
    {
        question: "Factoriza: x^2 - 16",
        options: ["(x-4)(x+4)", "(x-8)(x+2)", "(x-16)(x+1)", "(x-2)(x+8)"],
        correctIndex: 0
    },
    {
        question: "¿Cuál es el valor de cos(60°)?",
        options: ["0", "1", "1/2", "√3/2"],
        correctIndex: 2
    },
    {
        question: "Resuelve: 5x - 10 = 0. ¿Cuál es x?",
        options: ["0", "1", "2", "5"],
        correctIndex: 2
    },
    {
        question: "¿Cuál es el resultado de 7^2?",
        options: ["14", "21", "49", "77"],
        correctIndex: 2
    },
    {
        question: "Si el promedio de 6, 8 y x es 10, ¿cuánto vale x?",
        options: ["12", "14", "16", "10"],
        correctIndex: 2 // x = 16
    }
];

const TOTAL_QUESTIONS = questions.length;

function findSpecialPositions() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const ch = mazeLayout[r][c];
            if (ch === "S") {
                startPos = { row: r, col: c };
                player.row = r;
                player.col = c;
            } else if (ch === "G") {
                goalPos = { row: r, col: c };
            }
        }
    }
}

function updateHUD() {
    doorsOpenedSpan.textContent = doorsOpened;
    scoreQuizSpan.textContent = scoreQuiz;
    questionsCountSpan.textContent = questionsAsked;

    window.mazeMathData.doorsOpened = doorsOpened;
    window.mazeMathData.scoreQuiz = scoreQuiz;
    window.mazeMathData.questionsAsked = questionsAsked;
    window.mazeMathData.lastUpdated = new Date().toISOString();
}

function resetGame(fullReset = true) {
    findSpecialPositions();

    if (fullReset) {
    mazeLayout = [
        "###############",
        "#S..#...##....#",
        "###.#.##...####",
        "#...#.#..#....#",
        "#.#.#.#.####.##",
        "#.#...#....#..#",
        "#.#####.##.#.##",
        "#.....##..B#..#",
        "#####.##.###.##",
        "#.....#...#A..#",
        "###.####.##.###",
        "#..D#....#....#",
        "##.#####..#.###",
        "#........#.C.G#",
        "###############"
    ];
    doorsOpened = 0;
    scoreQuiz = 0;
    questionsAsked = 0;
}

    isRunning = false;
    isPausedForQuestion = false;
    currentDoor = null;
    currentQuestionIndex = null;

    questionBox.classList.add("hidden");
    feedbackText.textContent = "";

    overlay.classList.remove("hidden");
    overlayTitle.textContent = "Laberinto Algebraico";
    overlayText.textContent = "Usa las flechas o WASD para moverte";

    updateHUD();
    drawMaze();
}


function drawMaze() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    ctx.fillStyle = "#030712";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const ch = mazeLayout[r][c];
            const x = c * tileSize;
            const y = r * tileSize;

            if (ch === "#") {
                
                ctx.fillStyle = "#0b1120";
                ctx.fillRect(x, y, tileSize, tileSize);

                ctx.strokeStyle = "#22d3ee";
                ctx.lineWidth = 2;
                ctx.strokeRect(x + 2, y + 2, tileSize - 4, tileSize - 4);
            } else if (ch === "." || ch === "S" || ch === "G") {
                
                ctx.fillStyle = "#020617";
                ctx.fillRect(x, y, tileSize, tileSize);

                if (ch === "S") {
                    
                    ctx.fillStyle = "#06b6d4";
                    ctx.fillRect(x + 8, y + 8, tileSize - 16, tileSize - 16);
                    ctx.strokeStyle = "#a5f3fc";
                    ctx.lineWidth = 2;
                    ctx.strokeRect(x + 8, y + 8, tileSize - 16, tileSize - 16);
                } else if (ch === "G") {
                    
                    ctx.fillStyle = "#4ade80";
                    ctx.fillRect(x + 8, y + 8, tileSize - 16, tileSize - 16);
                    ctx.strokeStyle = "#bbf7d0";
                    ctx.lineWidth = 2;
                    ctx.strokeRect(x + 8, y + 8, tileSize - 16, tileSize - 16);
                }
            } else if (doorQuestionMap[ch] !== undefined) {
                
                ctx.fillStyle = "#111827";
                ctx.fillRect(x, y, tileSize, tileSize);

                ctx.strokeStyle = "#fbbf24";
                ctx.lineWidth = 2;
                ctx.strokeRect(x + 4, y + 4, tileSize - 8, tileSize - 8);

                ctx.fillStyle = "#fbbf24";
                ctx.font = "bold 18px Poppins";
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillText(ch, x + tileSize / 2, y + tileSize / 2);
            }
        }
    }

    
    const px = player.col * tileSize;
    const py = player.row * tileSize;

    ctx.fillStyle = "#ef4444";
    ctx.fillRect(px + 6, py + 6, tileSize - 12, tileSize - 12);

    ctx.strokeStyle = "#fecaca";
    ctx.lineWidth = 2;
    ctx.strokeRect(px + 6, py + 6, tileSize - 12, tileSize - 12);
}

function showQuestionForDoor(doorChar) {
    const qIndex = doorQuestionMap[doorChar];
    if (qIndex === undefined) return;

    isPausedForQuestion = true;
    currentDoor = doorChar;
    currentQuestionIndex = qIndex;

    const q = questions[qIndex];

    questionsAsked++;
    updateHUD();

    questionText.textContent = q.question;
    feedbackText.textContent = "";
    optionsContainer.innerHTML = "";

    q.options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.className = "optionBtn";
        btn.textContent = opt;
        btn.onclick = () => handleAnswer(idx);
        optionsContainer.appendChild(btn);
    });

    questionBox.classList.remove("hidden");
}

function handleAnswer(selected) {
    const q = questions[currentQuestionIndex];
    const correct = selected === q.correctIndex;

    if (correct) {
        scoreQuiz++;
        doorsOpened++;
        feedbackText.textContent = "¡Correcto! La puerta se abre.";
        feedbackText.style.color = "lime";
        updateHUD();

        openDoor(currentDoor);

        setTimeout(() => {
            questionBox.classList.add("hidden");
            feedbackText.textContent = "";
            isPausedForQuestion = false;

            
            if (player.row === goalPos.row && player.col === goalPos.col) {
                endGame(true);
            } else {
                drawMaze();
            }
        }, 800);
    } else {
        feedbackText.textContent = "Incorrecto. Vuelves al inicio.";
        feedbackText.style.color = "red";

        setTimeout(() => {
            questionBox.classList.add("hidden");
            feedbackText.textContent = "";
            isPausedForQuestion = false;

            player.row = startPos.row;
            player.col = startPos.col;
            drawMaze();
        }, 900);
    }
}

function openDoor(doorChar) {
   
    for (let r = 0; r < rows; r++) {
        let rowStr = mazeLayout[r];
        if (rowStr.includes(doorChar)) {
            rowStr = rowStr.replace(new RegExp(doorChar, "g"), ".");
            mazeLayout[r] = rowStr;
        }
    }
}

function endGame(won) {
    isRunning = false;
    isPausedForQuestion = true;
    questionBox.classList.add("hidden");

    overlay.classList.remove("hidden");
    overlayTitle.textContent = won ? "¡Saliste del laberinto!" : "Fin del juego";
    overlayText.innerHTML =
        `Puertas abiertas: <strong>${doorsOpened}</strong><br>` +
        `Respuestas correctas: <strong>${scoreQuiz}</strong> de ${questionsAsked}`;
}


function tryMovePlayer(deltaRow, deltaCol) {
    if (!isRunning || isPausedForQuestion) return;

    const newRow = player.row + deltaRow;
    const newCol = player.col + deltaCol;

    if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) return;

    const ch = mazeLayout[newRow][newCol];
    if (ch === "#") {
        return; 
    }

    if (doorQuestionMap[ch] !== undefined) {
        
        showQuestionForDoor(ch);
        return;
    }

   
    player.row = newRow;
    player.col = newCol;
    drawMaze();

    if (player.row === goalPos.row && player.col === goalPos.col) {
        endGame(true);
    }
}

document.addEventListener("keydown", (e) => {
    
    if (e.code === "Space" || e.code === "Enter") {
        e.preventDefault();
    }

    
    if (!isRunning && !isPausedForQuestion && !overlay.classList.contains("hidden")) {
        overlay.classList.add("hidden");
        isRunning = true;
        return;
    }

    if (!isRunning || isPausedForQuestion) return;

    switch (e.code) {
        case "ArrowUp":
        case "KeyW":
            tryMovePlayer(-1, 0);
            break;
        case "ArrowDown":
        case "KeyS":
            tryMovePlayer(1, 0);
            break;
        case "ArrowLeft":
        case "KeyA":
            tryMovePlayer(0, -1);
            break;
        case "ArrowRight":
        case "KeyD":
            tryMovePlayer(0, 1);
            break;
    }
});

if (btnReset) {
    btnReset.addEventListener("click", (e) => {
        e.preventDefault();
        btnReset.blur();
        resetGame(true);
    });
}

if (btnHome) {
    btnHome.addEventListener("click", (e) => {
        e.preventDefault();
        btnHome.blur();
        window.location.href = "dashboard.html";
    });
}


document.addEventListener("DOMContentLoaded", () => {
    if (welcomeModal) {
        welcomeModal.style.display = "flex";
    }
    if (overlay) {
        overlay.classList.add("hidden");
    }
});

if (startGameButton) {
    startGameButton.addEventListener("click", () => {
        welcomeModal.style.display = "none";
        overlay.classList.remove("hidden");
        overlayTitle.textContent = "Laberinto Algebraico";
        overlayText.textContent = "Presiona cualquier tecla para comenzar";
    });
}

findSpecialPositions();
resetGame(true);
drawMaze();