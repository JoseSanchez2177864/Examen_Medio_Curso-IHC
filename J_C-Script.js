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

    const modalIntro = new bootstrap.Modal(document.getElementById('modalIntroduccion'));
    const modalCorrecto = new bootstrap.Modal(document.getElementById('modalCorrecto'));
    const modalError = new bootstrap.Modal(document.getElementById('modalError'));
    const modalFinal = new bootstrap.Modal(document.getElementById('modalFinal'));


    modalIntro.show();


    const gameRounds = [

        {
            id: 1,
            tema: "Revoluciones",
            pista: "La independencia de EE.UU. (1776) inspiró a la Revolución Francesa. Las revoluciones Mexicana y Rusa ocurrieron mucho después, en el siglo XX.",
            eventos: [{ nombre: "Independencia de las 13 Colonias", anio: 1776 }, { nombre: "Revolución Francesa", anio: 1789 }, { nombre: "Revolución Mexicana", anio: 1910 }, { nombre: "Revolución Rusa", anio: 1917 }]
        },
        {
            id: 2,
            tema: "Era de los Descubrimientos",
            pista: "Colón llegó a América en el siglo XV. La conquista de México y la vuelta al mundo de Magallanes sucedieron unas décadas más tarde, en el siglo XVI.",
            eventos: [{ nombre: "Llegada de Colón a América", anio: 1492 }, { nombre: "Tratado de Tordesillas", anio: 1494 }, { nombre: "Caída de Tenochtitlán", anio: 1521 }, { nombre: "Vuelta al mundo de Magallanes", anio: 1522 }]
        },
        {
            id: 3,
            tema: "Edad Antigua",
            pista: "La escritura es el evento más antiguo (3500 a.C.). Las pirámides se construyeron mil años después. Roma fue fundada mucho más tarde, en el 753 a.C.",
            eventos: [{ nombre: "Invención de la escritura", anio: -3500 }, { nombre: "Gran Pirámide de Guiza", anio: -2570 }, { nombre: "Código de Hammurabi", anio: -1750 }, { nombre: "Fundación de Roma", anio: -753 }]
        },
        {
            id: 4,
            tema: "Siglo XX Trágico",
            pista: "El Titanic se hundió antes de las guerras mundiales. La Primera Guerra Mundial comenzó en 1914 y la Segunda hasta 1939.",
            eventos: [{ nombre: "Hundimiento del Titanic", anio: 1912 }, { nombre: "Inicio Primera Guerra Mundial", anio: 1914 }, { nombre: "Crack del 29", anio: 1929 }, { nombre: "Inicio Segunda Guerra Mundial", anio: 1939 }]
        },
        {
            id: 5,
            tema: "Guerra Fría",
            pista: "La bomba atómica (1945) marcó el inicio de esta era. El Muro de Berlín se construyó en los 60s y cayó hasta finales de los 80s.",
            eventos: [{ nombre: "Bomba atómica en Hiroshima", anio: 1945 }, { nombre: "Construcción Muro de Berlín", anio: 1961 }, { nombre: "Crisis de los Misiles", anio: 1962 }, { nombre: "Caída del Muro de Berlín", anio: 1989 }]
        },
        {
            id: 6,
            tema: "Roma y Cristianismo",
            pista: "Julio César murió antes del nacimiento de Cristo (a.C.). El cristianismo se legalizó (Edicto de Milán) más de 300 años después.",
            eventos: [{ nombre: "Asesinato de Julio César", anio: -44 }, { nombre: "Crucifixión de Jesús", anio: 33 }, { nombre: "Edicto de Milán", anio: 313 }, { nombre: "Caída Imperio Romano Occidente", anio: 476 }]
        },
        {
            id: 7,
            tema: "Invenciones Humanas",
            pista: "La rueda es prehistórica. El papel es del año 100 d.C., la imprenta del Renacimiento (1440) y la máquina de vapor impulsó la Revolución Industrial.",
            eventos: [{ nombre: "Invención de la Rueda", anio: -3500 }, { nombre: "Invención del Papel (China)", anio: 105 }, { nombre: "Imprenta de Gutenberg", anio: 1440 }, { nombre: "Máquina de Vapor de Watt", anio: 1769 }]
        },
        {
            id: 8,
            tema: "Conflictos Modernos",
            pista: "Vietnam terminó en los 70s. Las Malvinas fueron en los 80s y el ataque a las Torres Gemelas inició el siglo XXI.",
            eventos: [{ nombre: "Guerra de Vietnam (Fin)", anio: 1975 }, { nombre: "Guerra de las Malvinas", anio: 1982 }, { nombre: "Guerra del Golfo", anio: 1990 }, { nombre: "Ataque a las Torres Gemelas", anio: 2001 }]
        },
        {
            id: 9,
            tema: "Carrera Espacial",
            pista: "Primero se envió un satélite (Sputnik), luego a un hombre (Gagarin) y finalmente se llegó a la Luna en 1969.",
            eventos: [{ nombre: "Sputnik 1 (Primer Satélite)", anio: 1957 }, { nombre: "Yuri Gagarin al espacio", anio: 1961 }, { nombre: "Llegada a la Luna (Apolo 11)", anio: 1969 }, { nombre: "Lanzamiento del Hubble", anio: 1990 }]
        },
        {
            id: 10,
            tema: "Edad Media",
            pista: "Carlomagno fue coronado en el año 800. Las Cruzadas empezaron casi 300 años después y la Peste Negra marcó el final de la Edad Media.",
            eventos: [{ nombre: "Coronación de Carlomagno", anio: 800 }, { nombre: "Cisma de Oriente", anio: 1054 }, { nombre: "Primera Cruzada", anio: 1096 }, { nombre: "Peste Negra en Europa", anio: 1347 }]
        },
        {
            id: 11,
            tema: "Renacimiento",
            pista: "La caída de Constantinopla (1453) suele marcar el inicio. Da Vinci pintó la Mona Lisa a principios del 1500, justo antes de la Reforma de Lutero.",
            eventos: [{ nombre: "Cúpula de Brunelleschi", anio: 1436 }, { nombre: "Caída de Constantinopla", anio: 1453 }, { nombre: "Pintura de la Mona Lisa", anio: 1503 }, { nombre: "Tesis de Lutero", anio: 1517 }]
        },
        {
            id: 12,
            tema: "Era Napoleónica",
            pista: "Napoleón surgió de la Revolución Francesa (1789). Se coronó emperador años después y fue derrotado definitivamente en Waterloo.",
            eventos: [{ nombre: "Revolución Francesa", anio: 1789 }, { nombre: "Coronación de Napoleón", anio: 1804 }, { nombre: "Batalla de Waterloo", anio: 1815 }, { nombre: "Muerte de Napoleón", anio: 1821 }]
        },
        {
            id: 13,
            tema: "Independencias Americanas",
            pista: "Haití fue la primera (1804). México inició en 1810. La batalla de Ayacucho (1824) selló la independencia de Sudamérica.",
            eventos: [{ nombre: "Independencia de Haití", anio: 1804 }, { nombre: "Grito de Dolores (México)", anio: 1810 }, { nombre: "Independencia de Argentina", anio: 1816 }, { nombre: "Batalla de Ayacucho", anio: 1824 }]
        },
        {
            id: 14,
            tema: "Antigua Grecia",
            pista: "Los Juegos Olímpicos son muy antiguos (776 a.C.). Sócrates murió en el 399 a.C. y Alejandro Magno expandió el imperio después.",
            eventos: [{ nombre: "Primeros Juegos Olímpicos", anio: -776 }, { nombre: "Batalla de Maratón", anio: -490 }, { nombre: "Muerte de Sócrates", anio: -399 }, { nombre: "Muerte de Alejandro Magno", anio: -323 }]
        },
        {
            id: 15,
            tema: "Ciencia y Tecnología",
            pista: "Newton es del siglo XVII. Darwin publicó su teoría en el siglo XIX. Einstein y el ADN son hitos del siglo XX.",
            eventos: [{ nombre: "Teoría de la Gravedad (Newton)", anio: 1687 }, { nombre: "Origen de las Especies (Darwin)", anio: 1859 }, { nombre: "Teoría de la Relatividad", anio: 1905 }, { nombre: "Descubrimiento del ADN", anio: 1953 }]
        },
        {
            id: 16,
            tema: "Asia Histórica",
            pista: "Buda nació en el 563 a.C. La Gran Muralla inició poco después. Marco Polo viajó a China mucho más tarde, en la Edad Media (1271).",
            eventos: [{ nombre: "Nacimiento de Buda", anio: -563 }, { nombre: "Construcción Gran Muralla (Inicio)", anio: -221 }, { nombre: "Viajes de Marco Polo", anio: 1271 }, { nombre: "Dinastía Ming", anio: 1368 }]
        },
        {
            id: 17,
            tema: "Música y Cultura",
            pista: "Mozart es del periodo Clásico (1756). Beethoven marca el paso al Romanticismo. El cine nació a finales del siglo XIX.",
            eventos: [{ nombre: "Nacimiento de Mozart", anio: 1756 }, { nombre: "Quinta Sinfonía de Beethoven", anio: 1808 }, { nombre: "Nacimiento del Cine (Lumière)", anio: 1895 }, { nombre: "Woodstock", anio: 1969 }]
        },
        {
            id: 18,
            tema: "Desastres Históricos",
            pista: "El Vesubio destruyó Pompeya en la época romana. El gran incendio de Londres fue en 1666. Chernóbil es un evento reciente (1986).",
            eventos: [{ nombre: "Erupción del Vesubio", anio: 79 }, { nombre: "Incendio de Londres", anio: 1666 }, { nombre: "Terremoto de San Francisco", anio: 1906 }, { nombre: "Accidente de Chernóbil", anio: 1986 }]
        },
        {
            id: 19,
            tema: "Líderes del Siglo XX",
            pista: "Lenin murió en los años 20. Hitler y Stalin murieron a mediados de siglo. Kennedy fue asesinado en los 60s.",
            eventos: [{ nombre: "Muerte de Lenin", anio: 1924 }, { nombre: "Suicidio de Hitler", anio: 1945 }, { nombre: "Muerte de Stalin", anio: 1953 }, { nombre: "Asesinato de JFK", anio: 1963 }]
        },
        {
            id: 20,
            tema: "Derechos Civiles",
            pista: "La esclavitud en EE.UU. terminó en 1865. El voto femenino llegó a finales del XIX. El Apartheid terminó recientemente en 1994.",
            eventos: [{ nombre: "Abolición esclavitud EE.UU.", anio: 1865 }, { nombre: "Voto femenino en Nueva Zelanda", anio: 1893 }, { nombre: "Discurso 'I Have a Dream'", anio: 1963 }, { nombre: "Fin del Apartheid", anio: 1994 }]
        },


        {
            id: 21,
            tema: "México Prehispánico",
            pista: "Los Olmecas son la cultura madre (1200 a.C.). Teotihuacán floreció antes que los Aztecas fundaran Tenochtitlán en 1325.",
            eventos: [{ nombre: "Cabeza Colosal Olmeca", anio: -1200 }, { nombre: "Apogeo de Teotihuacán", anio: 400 }, { nombre: "Fundación de Tenochtitlán", anio: 1325 }, { nombre: "Llegada de Cortés", anio: 1519 }]
        },
        {
            id: 22,
            tema: "La Conquista",
            pista: "La Matanza del Templo y la Noche Triste ocurrieron en 1520, un año antes de la caída definitiva de Tenochtitlán en 1521.",
            eventos: [{ nombre: "Matanza del Templo Mayor", anio: 1520 }, { nombre: "La Noche Triste", anio: 1520 }, { nombre: "Caída de Tenochtitlán", anio: 1521 }, { nombre: "Llegada de los 12 Franciscanos", anio: 1524 }]
        },
        {
            id: 23,
            tema: "Virreinato",
            pista: "El Virreinato inició en 1535. Sor Juana vivió en el siglo XVII ('Siglo de Oro'). La expulsión de los jesuitas fue una de las últimas reformas borbónicas (1767).",
            eventos: [{ nombre: "Instauración del Virreinato", anio: 1535 }, { nombre: "Fundación de la Real Universidad", anio: 1551 }, { nombre: "Nace Sor Juana Inés", anio: 1648 }, { nombre: "Expulsión de los Jesuitas", anio: 1767 }]
        },
        {
            id: 24,
            tema: "Independencia de México (Inicio)",
            pista: "Todo inició en 1810 con la Conspiración y el Grito. Los 'Sentimientos de la Nación' de Morelos fueron publicados años después, en 1813.",
            eventos: [{ nombre: "Conspiración de Querétaro", anio: 1810 }, { nombre: "Grito de Dolores", anio: 1810 }, { nombre: "Batalla del Puente de Calderón", anio: 1811 }, { nombre: "Sentimientos de la Nación", anio: 1813 }]
        },
        {
            id: 25,
            tema: "Independencia de México (Consumación)",
            pista: "Morelos murió en 1815, dejando la lucha en pausa. La consumación llegó hasta 1821 con el Plan de Iguala y el Ejército Trigarante.",
            eventos: [{ nombre: "Muerte de Morelos", anio: 1815 }, { nombre: "Abrazo de Acatempan", anio: 1821 }, { nombre: "Plan de Iguala", anio: 1821 }, { nombre: "Entrada del Ejército Trigarante", anio: 1821 }]
        },
        {
            id: 26,
            tema: "México Independiente Caótico",
            pista: "Primero Iturbide se hizo emperador (1822). Luego vino la República (1824). Texas se perdió décadas más tarde, en 1845.",
            eventos: [{ nombre: "Imperio de Iturbide", anio: 1822 }, { nombre: "Constitución de 1824", anio: 1824 }, { nombre: "Guerra de los Pasteles", anio: 1838 }, { nombre: "Pérdida de Texas", anio: 1845 }]
        },
        {
            id: 27,
            tema: "Invasión Estadounidense",
            pista: "La guerra inició en 1846. Las batallas decisivas (Churubusco y Chapultepec) fueron en 1847. El tratado de paz se firmó en 1848.",
            eventos: [{ nombre: "Guerra con Estados Unidos", anio: 1846 }, { nombre: "Batalla de Churubusco", anio: 1847 }, { nombre: "Niños Héroes (Chapultepec)", anio: 1847 }, { nombre: "Tratado de Guadalupe Hidalgo", anio: 1848 }]
        },
        {
            id: 28,
            tema: "La Reforma",
            pista: "Primero cayó Santa Anna (Plan de Ayutla). Luego se hizo la Constitución de 1857, lo que desató la Guerra de Reforma (1858).",
            eventos: [{ nombre: "Plan de Ayutla", anio: 1854 }, { nombre: "Constitución de 1857", anio: 1857 }, { nombre: "Guerra de Reforma", anio: 1858 }, { nombre: "Batalla de Puebla", anio: 1862 }]
        },
        {
            id: 29,
            tema: "Segundo Imperio",
            pista: "Maximiliano llegó en 1864. Su imperio duró 3 años hasta que fue sitiado y fusilado en Querétaro en 1867.",
            eventos: [{ nombre: "Llegada de Maximiliano", anio: 1864 }, { nombre: "Sitio de Querétaro", anio: 1867 }, { nombre: "Fusilamiento de Maximiliano", anio: 1867 }, { nombre: "Triunfo de la República", anio: 1867 }]
        },
        {
            id: 30,
            tema: "El Porfiriato",
            pista: "Díaz llegó al poder en 1876/77. Gobernó por décadas. La Huelga de Cananea (1906) y la entrevista Creelman (1908) marcaron el fin de su era.",
            eventos: [{ nombre: "Plan de Tuxtepec", anio: 1876 }, { nombre: "Primer periodo de Porfirio Díaz", anio: 1877 }, { nombre: "Huelga de Cananea", anio: 1906 }, { nombre: "Entrevista Díaz-Creelman", anio: 1908 }]
        },
        {
            id: 31,
            tema: "Revolución Mexicana (Madero)",
            pista: "Madero llamó a las armas en 1910. Díaz renunció en 1911. La Decena Trágica y la muerte de Madero ocurrieron en 1913.",
            eventos: [{ nombre: "Plan de San Luis", anio: 1910 }, { nombre: "Renuncia de Porfirio Díaz", anio: 1911 }, { nombre: "Decena Trágica", anio: 1913 }, { nombre: "Asesinato de Madero", anio: 1913 }]
        },
        {
            id: 32,
            tema: "Revolución Constitucionalista",
            pista: "Tras la muerte de Madero (1913) se lanzó el Plan de Guadalupe. La Constitución actual se firmó hasta 1917.",
            eventos: [{ nombre: "Plan de Guadalupe", anio: 1913 }, { nombre: "Toma de Zacatecas", anio: 1914 }, { nombre: "Constitución de 1917", anio: 1917 }, { nombre: "Muerte de Zapata", anio: 1919 }]
        },
        {
            id: 33,
            tema: "México Post-Revolución",
            pista: "Villa murió en 1923. La Guerra Cristera fue a finales de los 20s. El abuelo del PRI (PNR) nació en 1929.",
            eventos: [{ nombre: "Muerte de Villa", anio: 1923 }, { nombre: "Guerra Cristera", anio: 1926 }, { nombre: "Creación del PNR (PRI)", anio: 1929 }, { nombre: "Expropiación Petrolera", anio: 1938 }]
        },
        {
            id: 34,
            tema: "El Milagro Mexicano",
            pista: "El Escuadrón 201 fue en los 40s. La mujer votó por primera vez en los 50s. El 68 estuvo marcado por las Olimpiadas y Tlatelolco.",
            eventos: [{ nombre: "Escuadrón 201 en la SGM", anio: 1945 }, { nombre: "Voto de la mujer en México", anio: 1953 }, { nombre: "Juegos Olímpicos México", anio: 1968 }, { nombre: "Matanza de Tlatelolco", anio: 1968 }]
        },
        {
            id: 35,
            tema: "México Moderno I",
            pista: "La crisis del 82 fue antes del terremoto del 85. La famosa 'caída del sistema' electoral fue en 1988.",
            eventos: [{ nombre: "Crisis económica de 1982", anio: 1982 }, { nombre: "Terremoto de México", anio: 1985 }, { nombre: "Fraude electoral (Caída del sistema)", anio: 1988 }, { nombre: "Creación del IFE", anio: 1990 }]
        },
        {
            id: 36,
            tema: "México Moderno II",
            pista: "Todo sucedió en 1994: EZLN, asesinato de Colosio y la crisis económica. La alternancia política (PRI perdiendo) llegó hasta el 2000.",
            eventos: [{ nombre: "Levantamiento del EZLN", anio: 1994 }, { nombre: "Asesinato de Colosio", anio: 1994 }, { nombre: "Error de Diciembre", anio: 1994 }, { nombre: "Alternancia política (Fox)", anio: 2000 }]
        },
        {
            id: 37,
            tema: "Literatura Mexicana",
            pista: "Octavio Paz nació durante la Revolución (1914). Rulfo publicó en los 50s. Paz ganó el Nobel hasta 1990.",
            eventos: [{ nombre: "Nace Octavio Paz", anio: 1914 }, { nombre: "Juan Rulfo publica Pedro Páramo", anio: 1955 }, { nombre: "Carlos Fuentes publica Aura", anio: 1962 }, { nombre: "Octavio Paz gana el Nobel", anio: 1990 }]
        },
        {
            id: 38,
            tema: "Arte Mexicano",
            pista: "Rivera era mayor que Frida. El movimiento muralista inició con Vasconcelos en los 20s. El Museo de Antropología es de los 60s.",
            eventos: [{ nombre: "Nace Diego Rivera", anio: 1886 }, { nombre: "Nace Frida Kahlo", anio: 1907 }, { nombre: "Muralismo en San Ildefonso", anio: 1922 }, { nombre: "Inauguración Museo Antropología", anio: 1964 }]
        },
        {
            id: 39,
            tema: "Símbolos Patrios",
            pista: "El Himno es de la época de Santa Anna (1854). La Batalla de Puebla fue después. El escudo actual se rediseñó en 1968.",
            eventos: [{ nombre: "Himno Nacional Mexicano", anio: 1854 }, { nombre: "Batalla del 5 de Mayo", anio: 1862 }, { nombre: "Día de la Bandera establecido", anio: 1934 }, { nombre: "Escudo Nacional actual", anio: 1968 }]
        },
        {
            id: 40,
            tema: "Ciencia en México",
            pista: "La UNAM se fundó justo antes de la Revolución (1910). La TV a color (Camarena).",
            eventos: [
                { nombre: "Fundación de la UNAM", anio: 1910 },
                { nombre: "TV a color (Camarena)", anio: 1940 },
                { nombre: "Píldora anticonceptiva (Miramontes)", anio: 1951 },
                { nombre: "Mario Molina gana Nobel", anio: 1995 }
            ]
        }
    ];


    let puntaje = 0;
    let total = 0;
    const META_PUNTAJE = 15;
    let rondasDisponibles = [];
    let rondaActualObj = null;
    let secuenciaCorrecta = [];
    let clickCount = 0;
    let tiempoLimite = 40000; // 40 segundos
    let timerInactividad = null;
    let indiceActual = 0; // Evento que toca presionar ahora


    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function reiniciarTimer() {
    clearTimeout(timerInactividad);
    timerInactividad = setTimeout(() => {
        iluminarCorrecto();
    }, tiempoLimite);
}

    function iluminarCorrecto() {
        const correcto = secuenciaCorrecta[indiceActual];
        const boton = document.querySelector(`[data-evento="${correcto.nombre}"]`);

        if (boton) {
            boton.classList.add("ayuda-correcta");
        }
    }



    function iniciarJuego() {
        puntaje = 0;
        actualizarPuntaje();
        indiceActual = 0;

        timerInactividad = setTimeout(() => {
            iluminarCorrecto();
        }, tiempoLimite);

        rondasDisponibles = [...gameRounds];

        shuffle(rondasDisponibles);
        cargarNuevaRonda();
    }


    function cargarNuevaRonda() {
        const contenedor = document.getElementById('timeline-container');
        contenedor.innerHTML = '';
        clickCount = 0;


        if (total >= 15) {
            mostrarFinal();
            return;
        }


        if (rondasDisponibles.length === 0) {
            mostrarFinal();
            return;
        }


        rondaActualObj = rondasDisponibles[0];


        let eventosVisuales = shuffle([...rondaActualObj.eventos]);


        secuenciaCorrecta = [...rondaActualObj.eventos].sort((a, b) => a.anio - b.anio);


        eventosVisuales.forEach((evento, index) => {
            const col = document.createElement('div');
            col.className = 'col-12 col-md-6 col-lg-3';

            const card = document.createElement('div');
            card.className = 'event-card animate__pop';
            card.dataset.anio = evento.anio;
            card.dataset.evento = evento.nombre;
            card.style.animationDelay = `${index * 0.1}s`;

            const titulo = document.createElement('h5');
            titulo.innerText = evento.nombre;

            card.appendChild(titulo);
            col.appendChild(card);
            contenedor.appendChild(col);


            card.addEventListener('click', () => manejarClick(card, evento));
        });
    }


    function manejarClick(cardElement, eventoObj) {
        reiniciarTimer();
        indiceActual++
        if (cardElement.classList.contains('correct') || cardElement.classList.contains('incorrect')) return;

        const anioEsperado = secuenciaCorrecta[clickCount].anio;

        if (eventoObj.anio === anioEsperado) {
            cardElement.classList.add('correct');
            clickCount++;
            if (clickCount === 4) {
                total++
                indiceActual=0
                SCorrecto.currentTime = 0;
                SCorrecto.play();
                puntaje++;
                actualizarPuntaje();


                rondasDisponibles.shift();

                setTimeout(() => {
                    modalCorrecto.show();
                    setTimeout(() => {
                        modalCorrecto.hide();
                        cargarNuevaRonda();
                    }, 1500);
                }, 500);
            }

        } else {
            indiceActual=0
            total++;
            SError.currentTime = 0;
            SError.play();
            cardElement.classList.add('incorrect');


            const mensajeError = `
                <div class="text-center mb-3">
                    <h4 class="fw-bold text-danger">❌ ¡Ese no era el orden!</h4>
                </div>
                <div class="p-3 rounded text-start" style="background: rgba(255, 0, 110, 0.1); border: 1px solid rgba(255, 0, 110, 0.5); color: #fff;">
                    <i class="bi bi-lightbulb-fill text-warning me-2"></i>
                    <strong>Pista Histórica:</strong><br>
                    <span style="font-weight: 300; font-size: 0.95rem;">${rondaActualObj.pista}</span>
                </div>
                <p class="mt-3 mb-0 text-center" style="color: #ccc; font-size: 0.9rem;">
                    Se te asignará una nueva misión temporal.
                </p>`;

            $('#errorMensaje').html(mensajeError);
            modalError.show();


            $('#modalError').one('hidden.bs.modal', function () {

                shuffle(rondasDisponibles);

                if (rondasDisponibles.length > 1 && rondasDisponibles[0].id === rondaActualObj.id) {
                    [rondasDisponibles[0], rondasDisponibles[1]] = [rondasDisponibles[1], rondasDisponibles[0]];
                }
                cargarNuevaRonda();
            });
        }
    }

    function actualizarPuntaje() {
        document.getElementById('contenedorPuntaje').innerHTML =
            `<i class="bi bi-star-fill"></i> Puntaje: ${puntaje}/${META_PUNTAJE}`;
    }

    function mostrarFinal() {
        SFinal.currentTime = 0;
        SFinal.play();
        const msg = document.getElementById('mensajeFinal');
        msg.innerHTML = `Has completado <strong>${puntaje}</strong> líneas temporales.<br>¡Eres un verdadero Guardián de la Historia!`;
        modalFinal.show();
    }


    document.getElementById('btnRepetir').addEventListener('click', () => {
        location.reload()
    });


    iniciarJuego();
});