document.addEventListener('DOMContentLoaded', () => {
    const centerCircle = document.querySelector('.center-circle');
    const optionButtons = document.querySelectorAll('.btn-option');
    const resetButton = document.getElementById('resetBtn');

    const gameRounds = [
        {
            compound: 'HCl',
            correctName: ['Ácido', 'Clorhídrico'],
            options: ['Ácido', 'Cloroso', 'Hidruro', 'Clorhídrico', 'de', 'Cloro']
        },
        {
            compound: 'H₂S',
            correctName: ['Ácido', 'Sulfhídrico'],
            options: ['Sulfuroso', 'Ácido', 'de', 'Azufre', 'Hídrico', 'Sulfhídrico']
        },
        {
            compound: 'HBr',
            correctName: ['Ácido', 'Bromhídrico'],
            options: ['Bórico', 'Bromoso', 'Ácido', 'Hídrico', 'Bromhídrico', 'de']
        },
        {
            compound: 'H₂Se',
            correctName: ['Ácido', 'Selenhídrico'],
            options: ['Selenio', 'Selenoso', 'Ácido', 'de', 'Selenhídrico', 'Hídrico']
        },
        {
            compound: 'HI',
            correctName: ['Ácido', 'Yodhídrico'],
            options: ['Yodoso', 'de', 'Yodo', 'Ácido', 'Hídrico', 'Yodhídrico']
        },
        {
            compound: 'H₂SO₄',
            correctName: ['Ácido', 'Sulfúrico'],
            options: ['Sulfuroso', 'de', 'Ácido', 'Azufre', 'Sulfato', 'Sulfúrico']
        },
        {
            compound: 'H₂CO₃',
            correctName: ['Ácido', 'Carbónico'],
            options: ['Carbono', 'Ácido', 'Carbónico', 'de', 'Carbonoso', 'Hídrico']
        },
        {
            compound: 'HMnO₃',
            correctName: ['Ácido', 'Manganoso'],
            options: ['Mangánico', 'de', 'Permangánico', 'Ácido', 'Manganoso', 'Manganeso']
        },
        {
            compound: 'H₃PO₄',
            correctName: ['Ácido', 'Fosfórico'],
            options: ['Fosforoso', 'de', 'Ácido', 'Fósforo', 'Fosfórico', 'Fosfito']
        },
        {
            compound: 'HClO',
            correctName: ['Ácido', 'Hipocloroso'],
            options: ['Clórico', 'Ácido', 'Cloroso', 'Hipocloroso', 'de', 'Perclórico']
        },
        {
            compound: 'NaCl',
            correctName: ['Cloruro', 'de', 'Sodio'],
            options: ['Sodio', 'Cloruro', 'Sódico', 'de', 'Sal', 'Clorato']
        },
        {
            compound: 'PbI₄',
            correctName: ['Yoduro', 'Plúmbico'],
            options: ['Plomo', 'Yoduro', '(II)', 'Plúmbico', 'de', 'Plumboso']
        },
        {
            compound: 'KBr',
            correctName: ['Bromuro', 'de', 'Potasio'],
            options: ['Potásico', 'Bromato', 'Bromuro', 'de', 'Potasio', 'Bromo']
        },
        {
            compound: 'Fe₂S₃',
            correctName: ['Sulfuro', 'Férrico'],
            options: ['Fierro', 'Azufre', 'Sulfuro', 'Ferroso', 'de', 'Férrico']
        },
        {
            compound: 'Li₂Se',
            correctName: ['Seleniuro', 'de', 'Litio'],
            options: ['Litio', 'Selenito', 'de', 'Seleniuro', 'Lítico', 'Selenio']
        },
        {
            compound: 'CO₂',
            correctName: ['Dióxido', 'de', 'Carbono'],
            options: ['Carbono', 'Carbónico', 'Dióxido', 'Anhídrido', 'de', 'Monóxido']
        },
        {
            compound: 'SO₃',
            correctName: ['Anhídrido', 'Sulfúrico'],
            options: ['Azufre', 'Sulfuroso', 'Trióxido', 'Sulfúrico', 'de', 'Anhídrido']
        },
        {
            compound: 'Br₂O',
            correctName: ['Anhídrido', 'Hipobromoso'],
            options: ['Bromo', 'de', 'Bromoso', 'Anhídrido', 'Óxido', 'Hipobromoso']
        },
        {
            compound: 'Cl₂O₇',
            correctName: ['Anhídrido', 'Perclórico'],
            options: ['Cloroso', 'Anhídrido', 'de', 'Clórico', 'Perclórico', 'Óxido']
        },
        {
            compound: 'P₂O₅',
            correctName: ['Anhídrido', 'Fosfórico'],
            options: ['Fosforoso', 'de', 'Anhídrido', 'Fósforo', 'Fosfórico', 'Pentóxido']
        },
        {
            compound: 'NaOH',
            correctName: ['Hidróxido', 'de', 'Sodio'],
            options: ['Sódico', 'Hidruro', 'de', 'Hidróxido', 'Óxido', 'Sodio']
        },
        {
            compound: 'Mg(OH)₂',
            correctName: ['Hidróxido', 'de', 'Magnesio'],
            options: ['Magnésico', 'Magnesio', 'de', 'Hidróxido', 'Óxido', 'Hidruro']
        },
        {
            compound: 'Fe(OH)₃',
            correctName: ['Hidróxido', 'Férrico'],
            options: ['Hierro', 'Férrico', 'de', 'Hidróxido', 'Ferroso', '(III)']
        },
        {
            compound: 'AgOH',
            correctName: ['Hidróxido', 'de', 'Plata'],
            options: ['Plata', 'Hidruro', 'Argéntico', 'Hidróxido', 'de', 'Base']
        },
        {
            compound: 'Pt(OH)₂',
            correctName: ['Hidróxido', 'Platinoso'],
            options: ['Platínico', '(II)', 'de', 'Platino', 'Hidróxido', 'Platinoso']
        },
        {
            compound: 'PtO',
            correctName: ['Óxido', 'Platinoso'],
            options: ['Platínico', '(II)', 'de', 'Platino', 'Óxido', 'Platinoso']
        },
        {
            compound: 'Ag₂O',
            correctName: ['Óxido', 'de', 'Plata'],
            options: ['Plata', 'Argéntico', 'de', 'Anhídrido', 'Óxido', 'Platino']
        },
        {
            compound: 'HgO',
            correctName: ['Óxido', 'Mercúrico'],
            options: ['Mercurio', 'de', 'Mercuroso', 'Óxido', '(I)', 'Mercúrico']
        },
        {
            compound: 'Mn₂O₇',
            correctName: ['Óxido', 'Permangánico'],
            options: ['Mangánico', 'Manganeso', 'de', 'Óxido', 'Permangánico', 'Manganoso']
        },
        {
            compound: 'Fe₂O₃',
            correctName: ['Óxido', 'Férrico'],
            options: ['Hierro (II)', 'Óxido', 'Anhídrido', 'Ferroso', 'Férrico', 'de']
        },
        {
            compound: 'LiH',
            correctName: ['Hidruro', 'de', 'Litio'],
            options: ['Lítico', 'Hidróxido', 'Hidruro', 'de', 'Litio', 'Ácido']
        },
        {
            compound: 'RbH',
            correctName: ['Hidruro', 'de', 'Rubidio'],
            options: ['Rubidio', 'Hidróxido', 'de', 'Ácido', 'Hidruro', 'Base']
        },
        {
            compound: 'BaH₂',
            correctName: ['Hidruro', 'de', 'Bario'],
            options: ['Bórico', 'de', 'Bario', 'Hidróxido', 'Hidruro', 'Base']
        },
        {
            compound: 'AlH₃',
            correctName: ['Hidruro', 'de', 'Aluminio'],
            options: ['Aluminio', 'de', 'Alumínico', 'Hidróxido', 'Ácido', 'Hidruro']
        },
        {
            compound: 'PbH₄',
            correctName: ['Hidruro', 'Plúmbico'],
            options: ['Plomo', '(IV)', 'de', 'Plumboso', 'Hidruro', 'Plúmbico']
        },
        {
            compound: 'NaHCO₃',
            correctName: ['Bicarbonato', 'de', 'Sodio'],
            options: ['Sodio', 'Carbonato', 'Bicarbonato', 'Ácido', 'de', 'Sódico']
        },
        {
            compound: 'K₂HPO₄',
            correctName: ['Fosfato', 'Ácido', 'de', 'Potasio'],
            options: ['Fosfito', 'Potasio', 'Ácido', 'Fosfato', 'de', 'Potásico']
        },
        {
            compound: 'NaHSO₄',
            correctName: ['Sulfato', 'Ácido', 'de', 'Sodio'],
            options: ['Bisulfato', 'Ácido', 'de', 'Sulfato', 'Sódico', 'Sodio']
        },
        {
            compound: 'CaHPO₃',
            correctName: ['Fosfito', 'Ácido', 'de', 'Calcio'],
            options: ['Fosfato', 'Cálcico', 'de', 'Ácido', 'Calcio', 'Fosfito']
        },
        {
            compound: '[NH₄]HCO₃',
            correctName: ['Bicarbonato', 'de', 'Amonio'],
            options: ['Amoniaco', 'Carbonato', 'de', 'Bicarbonato', 'Ácido', 'Amonio']
        },
        {
            compound: 'CaCO₃',
            correctName: ['Carbonato', 'de', 'Calcio'],
            options: ['Cálcico', 'Carbonito', 'Calcio', 'de', 'Carburo', 'Carbonato']
        },
        {
            compound: 'MgSO₄',
            correctName: ['Sulfato', 'de', 'Magnesio'],
            options: ['Sulfito', 'Magnesio', 'de', 'Magnésico', 'Sulfato', 'Azufre']
        },
        {
            compound: 'Ba(ClO)₂',
            correctName: ['Hipoclorito', 'de', 'Bario'],
            options: ['Clorato', 'de', 'Clorito', 'Bario', 'Perclorato', 'Hipoclorito']
        },
        {
            compound: 'FeAsO₃',
            correctName: ['Arsenito', 'Férrico'],
            options: ['Arseniato', 'de', 'Hierro', 'Ferroso', 'Férrico', 'Arsenito']
        },
        {
            compound: 'PbC₂O₄',
            correctName: ['Oxalato', 'Plumboso'],
            options: ['Plomo', 'de', 'Plúmbico', 'Oxalato', '(II)', 'Plumboso']
        }
    ];

    let currentRoundIndex = 0;
    let userSelection = [];

    const loadRound = (roundIndex) => {
        userSelection = [];
        resetButtonStyles();

        if (roundIndex >= gameRounds.length) {
            endGame();
            return;
        }

        const currentRound = gameRounds[roundIndex];

        centerCircle.innerHTML = currentRound.compound.replace(/(\d+)/g, '<sub>$1</sub>').replace(/\(/g, '<sub>(').replace(/\)/g, ')</sub>');

        const shuffledOptions = shuffleArray(currentRound.options);

        optionButtons.forEach((button, index) => {
            button.textContent = shuffledOptions[index];
            button.disabled = false;
        });
    };
    
    const handleOptionClick = (event) => {
        const clickedButton = event.target;
        const selectedWord = clickedButton.textContent;
        const correctSequence = gameRounds[currentRoundIndex].correctName;

        if (selectedWord === correctSequence[userSelection.length]) {
            userSelection.push(selectedWord);
            clickedButton.style.backgroundColor = '#28a745';
            clickedButton.style.color = 'white';
            clickedButton.disabled = true;

            if (userSelection.length === correctSequence.length) {
                winRound();
            }
        } else {
            loseRound(clickedButton);
        }
    };

    const winRound = () => {
        centerCircle.textContent = '¡Correcto!';
        setTimeout(() => {
            currentRoundIndex++;
            loadRound(currentRoundIndex);
        }, 1500);
    };

    const loseRound = (wrongButton) => {
        wrongButton.style.backgroundColor = '#dc3545';
        wrongButton.style.color = 'white';
        
        optionButtons.forEach(btn => btn.disabled = true);

        setTimeout(() => {
            loadRound(currentRoundIndex);
        }, 1500);
    };

    const endGame = () => {
        centerCircle.textContent = '¡Felicidades!';
        centerCircle.style.fontSize = '24px';
        optionButtons.forEach(button => {
            button.style.visibility = 'hidden';
        });
    };

    const startGame = () => {
        currentRoundIndex = 0;
        loadRound(currentRoundIndex);
        centerCircle.style.fontSize = '32px';
        optionButtons.forEach(button => {
            button.style.visibility = 'visible';
        });
    };
    
    const resetButtonStyles = () => {
        optionButtons.forEach(button => {
            button.style.backgroundColor = '#90caf9';
            button.style.color = 'black';
            button.disabled = false;
        });
        centerCircle.style.backgroundColor = '#fff';
        centerCircle.style.color = 'black';
    };

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    optionButtons.forEach(button => button.addEventListener('click', handleOptionClick));
    resetButton.addEventListener('click', startGame);

    startGame();
});
