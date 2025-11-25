document.addEventListener('DOMContentLoaded', () => {
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
    
    const META_CASOS = 15; 
    let casosResueltos = 0;
    let totalStars = 0;
    let currentStarsPotential = 3; 
    let rondasDisponibles = [];
    let rondaActualObj = null;

    
    const scoreDisplay = document.getElementById('scoreVal');
    const rewardDisplay = document.getElementById('currentReward');
    const roundNumDisplay = document.getElementById('roundNumber');
    
    const clue1 = document.getElementById('clue1');
    const textClue1 = document.getElementById('textClue1');
    const clue2 = document.getElementById('clue2');
    const textClue2 = document.getElementById('textClue2');
    const clue3 = document.getElementById('clue3');
    const textClue3 = document.getElementById('textClue3');
    const optionsContainer = document.getElementById('options-container');

    
    const modalIntro = new bootstrap.Modal(document.getElementById('modalIntroduccion'));
    const modalCorrecto = new bootstrap.Modal(document.getElementById('modalCorrecto'));
    const modalError = new bootstrap.Modal(document.getElementById('modalError'));
    const modalFinal = new bootstrap.Modal(document.getElementById('modalFinal'));

    
    const enigmasDB = [
        
        { id: 1, personaje: "Napoleón Bonaparte", pistas: ["Nací en una isla, pero goberné un imperio continental.", "Me coroné Emperador ante el Papa.", "Mi derrota final fue en Waterloo."], opciones: ["Luis XVI", "Napoleón Bonaparte", "Carlomagno", "Julio César"] },
        { id: 2, personaje: "Cleopatra", pistas: ["Fui la última reina del Antiguo Egipto.", "Tuve alianzas con Julio César y Marco Antonio.", "Se dice que morí por la mordedura de un áspid."], opciones: ["Nefertiti", "Cleopatra", "Hatshepsut", "Isabel I"] },
        { id: 3, personaje: "Hitler", pistas: ["Fui rechazado de la Academia de Bellas Artes.", "Escribí 'Mi Lucha' en prisión.", "Lideré la Alemania Nazi en la SGM."], opciones: ["Mussolini", "Hitler", "Stalin", "Churchill"] },
        { id: 4, personaje: "Colón", pistas: ["Busqué las Indias navegando al oeste.", "Los Reyes Católicos financiaron mi viaje.", "Llegué a América en 1492."], opciones: ["Magallanes", "Cortés", "Colón", "Vespucio"] },
        { id: 5, personaje: "Da Vinci", pistas: ["Fui el hombre del Renacimiento por excelencia.", "Diseñé prototipos de helicópteros.", "Pinté la Mona Lisa."], opciones: ["Miguel Ángel", "Da Vinci", "Rafael", "Donatello"] },
        { id: 6, personaje: "Gandhi", pistas: ["Viví en Sudáfrica siendo abogado.", "Lideré la independencia de la India pacíficamente.", "Mi arma fue la desobediencia civil."], opciones: ["Mandela", "Gandhi", "Dalai Lama", "Luther King"] },
        { id: 7, personaje: "Einstein", pistas: ["Trabajaba en una oficina de patentes.", "E=mc² es mi ecuación más famosa.", "Gané el Nobel por el efecto fotoeléctrico."], opciones: ["Newton", "Tesla", "Einstein", "Hawking"] },
        { id: 8, personaje: "Rev. Industrial", pistas: ["Inicié en Gran Bretaña en el siglo XVIII.", "Reemplacé talleres por fábricas.", "La máquina de vapor fue mi motor."], opciones: ["Rev. Francesa", "Rev. Industrial", "Rev. Rusa", "Ilustración"] },
        { id: 9, personaje: "Guerra Fría", pistas: ["No fue una guerra directa, sino ideológica.", "Dividí al mundo en bloque Capitalista y Comunista.", "El Muro de Berlín fue mi símbolo."], opciones: ["Primera Guerra", "Segunda Guerra", "Guerra Fría", "Vietnam"] },
        { id: 10, personaje: "Armstrong", pistas: ["Fui piloto de pruebas de la NASA.", "Comandé la misión Apolo 11.", "Fui el primer hombre en pisar la Luna."], opciones: ["Gagarin", "Aldrin", "Armstrong", "Musk"] },
        { id: 11, personaje: "Peste Negra", pistas: ["Llegué a Europa desde Asia en el siglo XIV.", "Las pulgas de las ratas me transmitían.", "Maté a un tercio de Europa."], opciones: ["COVID-19", "Viruela", "Peste Negra", "Gripe Española"] },
        { id: 12, personaje: "Alejandro Magno", pistas: ["Fui rey de Macedonia a los 20 años.", "Fui alumno de Aristóteles.", "Conquisté desde Grecia hasta la India."], opciones: ["Pericles", "Alejandro Magno", "Leónidas", "César Augusto"] },
        { id: 13, personaje: "Marie Curie", pistas: ["Nací en Polonia pero triunfé en Francia.", "Descubrí el Radio y el Polonio.", "Fui la primera persona en ganar dos premios Nobel."], opciones: ["Rosalind Franklin", "Ada Lovelace", "Marie Curie", "Lise Meitner"] },
        { id: 14, personaje: "Shakespeare", pistas: ["Soy el dramaturgo más famoso de Inglaterra.", "Escribí 'Ser o no ser, esa es la cuestión'.", "Romeo y Julieta es mi obra más conocida."], opciones: ["Cervantes", "Shakespeare", "Dickens", "Hemingway"] },
        { id: 15, personaje: "Beethoven", pistas: ["Fui un compositor alemán prodigio.", "Me quedé sordo pero seguí componiendo.", "Mi Novena Sinfonía contiene el 'Himno a la Alegría'."], opciones: ["Mozart", "Bach", "Beethoven", "Chopin"] },
        { id: 16, personaje: "Genghis Khan", pistas: ["Unifiqué a las tribus nómadas de Mongolia.", "Creé el imperio contiguo más grande de la historia.", "Fui un conquistador brutal y estratega."], opciones: ["Atila", "Genghis Khan", "Kublai Khan", "Tamerlán"] },
        { id: 17, personaje: "Tesla", pistas: ["Fui rival de Thomas Edison.", "Fui el padre de la corriente alterna.", "Morí pobre y obsesionado con las palomas."], opciones: ["Edison", "Tesla", "Volta", "Marconi"] },
        { id: 18, personaje: "Mandela", pistas: ["Pasé 27 años en prisión.", "Luché contra el Apartheid en Sudáfrica.", "Me convertí en el primer presidente negro de mi país."], opciones: ["Malcolm X", "Mandela", "Obama", "Tutú"] },
        { id: 19, personaje: "Bolívar", pistas: ["Me llaman 'El Libertador'.", "Luché por la independencia de 5 países sudamericanos.", "Soñé con la Gran Colombia."], opciones: ["San Martín", "Bolívar", "Sucre", "O'Higgins"] },
        { id: 20, personaje: "Victoria", pistas: ["Goberné el Reino Unido por 63 años.", "Una época entera lleva mi nombre.", "Fui la 'Abuela de Europa'."], opciones: ["Isabel I", "Isabel II", "Victoria", "María Estuardo"] },
        { id: 21, personaje: "Hnos. Wright", pistas: ["Teníamos una tienda de bicicletas.", "Estudiamos el vuelo de las aves.", "Realizamos el primer vuelo a motor en 1903."], opciones: ["Hnos. Montgolfier", "Hnos. Lumière", "Hnos. Wright", "Santos Dumont"] },
        { id: 22, personaje: "Gripe Española", pistas: ["Ocurrí en 1918, al final de la Primera Guerra.", "No inicié en España, pero ellos me reportaron.", "Maté a más gente que la guerra misma."], opciones: ["Peste Negra", "Gripe Española", "Cólera", "Tifus"] },
        { id: 23, personaje: "Imprenta", pistas: ["Fui inventada por Johannes Gutenberg.", "Permití la producción masiva de libros.", "La Biblia fue mi primer gran trabajo (1450s)."], opciones: ["Internet", "Telégrafo", "Imprenta", "Radio"] },
        { id: 24, personaje: "Muro de Berlín", pistas: ["Fui construido en una noche de 1961.", "Dividí una ciudad y el mundo en dos.", "Caí el 9 de noviembre de 1989."], opciones: ["Cortina de Hierro", "Muro de Berlín", "Línea Maginot", "Gran Muralla"] },
        
        
        { id: 25, personaje: "Díaz", pistas: ["Héroe de la batalla del 2 de abril.", "Goberné México por más de 30 años.", "Mi frase era 'Poca política y mucha administración'."], opciones: ["Juárez", "Madero", "Díaz", "Santa Anna"] },
        { id: 26, personaje: "Hidalgo", pistas: ["Sacerdote influenciado por la Ilustración.", "Di el Grito de Dolores en 1810.", "Soy el Padre de la Patria Mexicana."], opciones: ["Morelos", "Allende", "Hidalgo", "Iturbide"] },
        { id: 27, personaje: "Frida Kahlo", pistas: ["Tuve un accidente de tranvía grave.", "Mis autorretratos reflejan mi dolor.", "Fui esposa de Diego Rivera."], opciones: ["María Izquierdo", "Frida Kahlo", "Sor Juana", "Remedios Varo"] },
        { id: 28, personaje: "Aztecas", pistas: ["Vimos un águila devorando una serpiente.", "Fundamos Tenochtitlán en el lago.", "Cortés nos conquistó en 1521."], opciones: ["Mayas", "Olmecas", "Toltecas", "Aztecas"] },
        { id: 29, personaje: "La Malinche", pistas: ["Fui intérprete de Hernán Cortés.", "Hablaba náhuatl y maya.", "Soy símbolo del mestizaje."], opciones: ["Josefa Ortiz", "La Malinche", "Leona Vicario", "Sor Juana"] },
        { id: 30, personaje: "Villa", pistas: ["Soy el 'Centauro del Norte'.", "Lideré la División del Norte.", "Invadí Columbus, Estados Unidos."], opciones: ["Zapata", "Villa", "Carranza", "Obregón"] },
        { id: 31, personaje: "Cárdenas", pistas: ["Fui presidente entre 1934 y 1940.", "Expropié el petróleo en 1938.", "Recibí a los exiliados españoles."], opciones: ["Calles", "Cárdenas", "Ávila Camacho", "Alemán"] },
        { id: 32, personaje: "Moctezuma II", pistas: ["Era el Tlatoani cuando llegaron los españoles.", "Recibí a Cortés pensando que era Quetzalcóatl.", "Morí apedreado por mi propio pueblo (según dicen)."], opciones: ["Cuauhtémoc", "Cuitláhuac", "Moctezuma II", "Nezahualcóyotl"] },
        { id: 33, personaje: "Juárez", pistas: ["Fui un indígena zapoteco que llegó a presidente.", "Separé a la Iglesia del Estado.", "Mi frase: 'El respeto al derecho ajeno es la paz'."], opciones: ["Maximilliano", "Juárez", "Lerdo de Tejada", "Comonfort"] },
        { id: 34, personaje: "Sor Juana", pistas: ["Fui monja en el Virreinato.", "Escribí 'Hombres necios que acusáis'.", "Soy la Décima Musa."], opciones: ["Josefa Ortiz", "Sor Juana", "Frida Kahlo", "Elena Garro"] },
        { id: 35, personaje: "Zapata", pistas: ["Luché en el sur de México.", "Mi lema: 'Tierra y Libertad'.", "Fui traicionado en Chinameca."], opciones: ["Villa", "Zapata", "Madero", "Huerta"] },
        { id: 36, personaje: "Santa Anna", pistas: ["Fui presidente 11 veces.", "Perdí una pierna y le hice un funeral.", "Vendí la Mesilla y perdí Texas."], opciones: ["Bustamante", "Santa Anna", "Guerrero", "Victoria"] },
        { id: 37, personaje: "Maximiliano", pistas: ["Fui un archiduque austriaco.", "Me trajeron para ser Emperador de México.", "Fui fusilado en el Cerro de las Campanas."], opciones: ["Napoleón III", "Iturbide", "Maximiliano", "Carlos IV"] },
        { id: 38, personaje: "Carranza", pistas: ["Fui el Primer Jefe del Ejército Constitucionalista.", "Promulgué la Constitución de 1917.", "Usaba una barba blanca muy larga."], opciones: ["Madero", "Carranza", "Calles", "Obregón"] },
        { id: 39, personaje: "Madero", pistas: ["Escribí 'La Sucesión Presidencial'.", "Inicié la Revolución en 1910.", "Fui asesinado en la Decena Trágica."], opciones: ["Pino Suárez", "Madero", "Belisario", "Serdán"] },
        { id: 40, personaje: "Olmeca", pistas: ["Soy la cultura madre de Mesoamérica.", "Tallé cabezas colosales de piedra.", "Habité en Veracruz y Tabasco."], opciones: ["Maya", "Olmeca", "Zapoteca", "Tolteca"] }
    ];

    

    function obtenerEnigmaSinRepetir() {
    if (rondasDisponibles.length === 0) {
        console.warn("⚠️ Ya no quedan enigmas disponibles");
        return null;
    }

    // Selecciona un índice aleatorio
    const index = Math.floor(Math.random() * rondasDisponibles.length);

    // Extrae y elimina el enigma para que no se repita
    const elegido = rondasDisponibles.splice(index, 1)[0];

    return elegido;
}

    window.unlockClue = function(clueNum) {
        if (clueNum === 2) {
            clue2.classList.remove('locked');
            clue2.classList.add('unlocked');
            if (currentStarsPotential > 2) currentStarsPotential = 2;
        } else if (clueNum === 3) {
            clue3.classList.remove('locked');
            clue3.classList.add('unlocked');
            if (currentStarsPotential > 1) currentStarsPotential = 1;
        }
        updateRewardDisplay();
    }

    function updateRewardDisplay() {
        let starsHTML = '';
        for(let i=0; i<currentStarsPotential; i++) {
            starsHTML += '⭐';
        }
        rewardDisplay.innerHTML = starsHTML;
    }

    
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    
    function initGame() {
        modalIntro.show();
        totalStars = 0;
        casosResueltos = 0;
        updateRoundDisplay();
        
        
        rondasDisponibles = shuffle([...enigmasDB]);
        
        loadNewRound();
    }

    function updateRoundDisplay() {
        roundNumDisplay.innerText = `${casosResueltos}/${META_CASOS}`;
    }

    function loadNewRound() {
        
        if (casosResueltos >= META_CASOS) {
            showFinalModal();
            return;
        }

    
        if (rondasDisponibles.length === 0) {
            showFinalModal();
            return;
        }

      
        rondaActualObj = obtenerEnigmaSinRepetir();
        
     
        currentStarsPotential = 3;
        updateRewardDisplay();
        updateRoundDisplay();

    
        textClue1.innerText = rondaActualObj.pistas[0];
        textClue2.innerText = rondaActualObj.pistas[1];
        textClue3.innerText = rondaActualObj.pistas[2];

     
        clue2.className = 'clue-box locked';
        clue3.className = 'clue-box locked';

       
        optionsContainer.innerHTML = '';
        let mixedOptions = shuffle([...rondaActualObj.opciones]);

        mixedOptions.forEach(opt => {
            const col = document.createElement('div');
            col.className = 'col-md-6';
            
            const btn = document.createElement('button');
            btn.className = 'btn btn-option-enigma w-100';
            btn.innerText = opt;
         
            btn.onclick = () => checkAnswer(opt, rondaActualObj.personaje, btn);
            
            col.appendChild(btn);
            optionsContainer.appendChild(col);
        });
    }

    function checkAnswer(selected, correct, btnElement) {
    
        const allBtns = document.querySelectorAll('.btn-option-enigma');
        allBtns.forEach(b => b.disabled = true);

        if (selected === correct) {
         
            btnElement.classList.add('correct');
            
            totalStars += currentStarsPotential;
            casosResueltos++; 
            SCorrecto.currentTime = 0;
        SCorrecto.play();
            
            scoreDisplay.innerText = totalStars;

       
            rondasDisponibles.shift();

         
            let starsWonStr = '';
            for(let i=0; i<currentStarsPotential; i++) starsWonStr += '⭐';
            document.getElementById('starsWon').innerText = starsWonStr;
            
            modalCorrecto.show();
            
     
            setTimeout(() => {
                modalCorrecto.hide();
                loadNewRound();
            }, 2000);

        } else {
            SError.currentTime = 0;
        SError.play();
            btnElement.classList.add('incorrect');
            
     
            allBtns.forEach(b => {
                if (b.innerText === correct) b.classList.add('correct');
            });

    
            document.getElementById('correctAnswerReveal').innerText = correct;
            modalError.show();

    
            $('#modalError').one('hidden.bs.modal', function () {
              
                rondasDisponibles = shuffle(rondasDisponibles);
                
               
                if (rondasDisponibles.length > 1 && rondasDisponibles[0].id === rondaActualObj.id) {
                    [rondasDisponibles[0], rondasDisponibles[1]] = [rondasDisponibles[1], rondasDisponibles[0]];
                }
                
                
                loadNewRound();
            });
        }
    }

    function showFinalModal() {
        SFinal.currentTime = 0;
    SFinal.play();
        document.getElementById('finalScore').innerText = totalStars;
        modalFinal.show();
    }

  
    document.getElementById('btnRepetir').addEventListener('click', () => {
        modalFinal.hide();
        initGame();
    });

    
    initGame();
});