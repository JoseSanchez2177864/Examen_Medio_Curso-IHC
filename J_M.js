
const gameBoard = document.getElementById('game-board');
const pairsFoundElement = document.getElementById('pairs-found');
const attemptsElement = document.getElementById('attempts');
const timerElement = document.getElementById('timer');
const restartBtn = document.getElementById('restart-btn');
const hintBtn = document.getElementById('hint-btn');
const message = document.getElementById('message');
const messageTitle = document.getElementById('message-title');
const messageText = document.getElementById('message-text');
const closeMessage = document.getElementById('close-message');

let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let attempts = 0;
let totalPairs = 8;
let timer = 0;
let timerInterval;
let gameStarted = false;
let canFlip = true;

const chemicalElements = [
    { element: "Hidrógeno", symbol: "H", atomicNumber: 1, group: "No metales" },
    { element: "Helio", symbol: "He", atomicNumber: 2, group: "Gases nobles" },
    { element: "Litio", symbol: "Li", atomicNumber: 3, group: "Alcalinos" },
    { element: "Berilio", symbol: "Be", atomicNumber: 4, group: "Alcalinotérreos" },
    { element: "Boro", symbol: "B", atomicNumber: 5, group: "Metaloides" },
    { element: "Carbono", symbol: "C", atomicNumber: 6, group: "No metales" },
    { element: "Nitrógeno", symbol: "N", atomicNumber: 7, group: "No metales" },
    { element: "Oxígeno", symbol: "O", atomicNumber: 8, group: "No metales" }
];

function initGame() {
    cards = [];
    flippedCards = [];
    matchedPairs = 0;
    attempts = 0;
    timer = 0;
    gameStarted = false;
    canFlip = true;

    pairsFoundElement.textContent = matchedPairs;
    attemptsElement.textContent = attempts;
    timerElement.textContent = timer;

    if (timerInterval) {
        clearInterval(timerInterval);
    }

    createCards();

    shuffleCards();
    renderCards();
}

function createCards() {
    // Limpiar el tablero
    gameBoard.innerHTML = '';

    chemicalElements.forEach((element, index) => {
        cards.push({
            id: index * 2,
            type: 'element',
            value: element.element,
            pairId: index,
            matched: false
        });

        // Carta con la propiedad (símbolo, número atómico o grupo)
        const propertyTypes = ['symbol', 'atomicNumber', 'group'];
        const randomType = propertyTypes[Math.floor(Math.random() * propertyTypes.length)];

        let propertyValue, propertyDisplay;

        switch(randomType) {
            case 'symbol':
                propertyValue = element.symbol;
                propertyDisplay = `Símbolo: ${element.symbol}`;
                break;
            case 'atomicNumber':
                propertyValue = element.atomicNumber;
                propertyDisplay = `Núm. Atómico: ${element.atomicNumber}`;
                break;
            case 'group':
                propertyValue = element.group;
                propertyDisplay = `Grupo: ${element.group}`;
                break;
        }

        cards.push({
            id: index * 2 + 1,
            type: randomType,
            value: propertyValue,
            display: propertyDisplay,
            pairId: index,
            matched: false
        });
    });
}

// Barajar las cartas
function shuffleCards() {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}

// Renderizar las cartas en el tablero
function renderCards() {
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.dataset.id = card.id;

        cardElement.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div class="card-value">?</div>
                    <div class="card-type">Química</div>
                </div>
                <div class="card-back ${card.type}">
                    <div class="card-value">${card.display || card.value}</div>
                    <div class="card-type">${getTypeName(card.type)}</div>
                </div>
            </div>
        `;

        cardElement.addEventListener('click', () => flipCard(card, cardElement));
        gameBoard.appendChild(cardElement);
    });
}

// Obtener nombre legible para el tipo de carta
function getTypeName(type) {
    switch(type) {
        case 'element': return 'Elemento';
        case 'symbol': return 'Símbolo';
        case 'atomicNumber': return 'Núm. Atómico';
        case 'group': return 'Grupo';
        default: return type;
    }
}

// Voltear una carta
function flipCard(card, cardElement) {
    // Verificar si se puede voltear
    if (!canFlip || card.matched || flippedCards.length >= 2 || flippedCards.includes(card)) {
        return;
    }

    // Iniciar temporizador si es la primera jugada
    if (!gameStarted) {
        startTimer();
        gameStarted = true;
    }

    // Voltear la carta
    cardElement.classList.add('flipped');
    flippedCards.push(card);

    // Verificar si hay dos cartas volteadas
    if (flippedCards.length === 2) {
        canFlip = false;
        attempts++;
        attemptsElement.textContent = attempts;

        // Verificar si son un par
        setTimeout(checkMatch, 800);
    }
}

// Verificar si las cartas volteadas forman un par
function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.pairId === card2.pairId) {
        // Es un par
        card1.matched = true;
        card2.matched = true;
        matchedPairs++;
        pairsFoundElement.textContent = matchedPairs;

        // Marcar cartas como emparejadas
        document.querySelector(`.card[data-id="${card1.id}"]`).classList.add('matched');
        document.querySelector(`.card[data-id="${card2.id}"]`).classList.add('matched');

        // Verificar si se completó el juego
        if (matchedPairs === totalPairs) {
            endGame();
        }
    } else {
        // No es un par, voltear de nuevo
        document.querySelector(`.card[data-id="${card1.id}"]`).classList.remove('flipped');
        document.querySelector(`.card[data-id="${card2.id}"]`).classList.remove('flipped');
    }

    // Reiniciar para el siguiente turno
    flippedCards = [];
    canFlip = true;
}

// Iniciar temporizador
function startTimer() {
    timerInterval = setInterval(() => {
        timer++;
        timerElement.textContent = timer;
    }, 1000);
}

// Finalizar el juego
function endGame() {
    clearInterval(timerInterval);

    // Mostrar mensaje de felicitaciones
    messageTitle.textContent = '¡Felicidades!';
    messageText.textContent = `Has completado el juego en ${timer} segundos con ${attempts} intentos.`;
    message.style.display = 'flex';
}

// Dar pista al jugador
function giveHint() {
    if (!gameStarted || flippedCards.length > 0 || !canFlip) return;

    // Encontrar cartas no emparejadas
    const unmatchedCards = cards.filter(card => !card.matched);
    if (unmatchedCards.length < 2) return;

    // Seleccionar un par al azar
    const randomPairId = Math.floor(Math.random() * (totalPairs - matchedPairs));
    let pairFound = 0;
    let cardsToShow = [];

    for (const card of unmatchedCards) {
        if (cardsToShow.length < 2) {
            // Encontrar el primer elemento del par
            const pairCard = unmatchedCards.find(c =>
                c.pairId === card.pairId && c.id !== card.id && !cardsToShow.includes(c)
            );

            if (pairCard && !cardsToShow.includes(card)) {
                cardsToShow.push(card, pairCard);
                break;
            }
        }
    }

    // Mostrar las cartas por un momento
    canFlip = false;
    cardsToShow.forEach(card => {
        const cardElement = document.querySelector(`.card[data-id="${card.id}"]`);
        cardElement.classList.add('flipped');
    });

    // Ocultar después de un tiempo
    setTimeout(() => {
        cardsToShow.forEach(card => {
            const cardElement = document.querySelector(`.card[data-id="${card.id}"]`);
            if (!card.matched) {
                cardElement.classList.remove('flipped');
            }
        });
        canFlip = true;
    }, 1500);
}

restartBtn.addEventListener('click', initGame);
hintBtn.addEventListener('click', giveHint);
closeMessage.addEventListener('click', () => {
    message.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', initGame);