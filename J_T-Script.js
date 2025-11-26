document.addEventListener('DOMContentLoaded', () => {
    let modal = new bootstrap.Modal(document.getElementById('modalIntroduccion'));
    modal.show();
    let ayudaTimer = null;
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> be0e305 (Añadi la tabla en juego de telarañas y añadi un juego de lamateria de matematicas)
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
    // ====== PRE-CARGA DE SONIDOS ======
    const SCorrecto = new Audio('Sonidos/SCorrecto.mp3');
    const SError = new Audio('Sonidos/SError.mp3');
    const SFinal = new Audio('Sonidos/SFinal.mp3');

    // Volúmenes (0.0 a 1.0)
    SCorrecto.volume = 0.6;
    SError.volume = 0.5;
    SFinal.volume = 0.8;

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
    // Pre-cargar sonidos en memoria
    SCorrecto.preload = 'auto';
    SError.preload = 'auto';
    SFinal.preload = 'auto';
    const optionButtons = document.querySelectorAll('.btn-option');
<<<<<<< HEAD
=======
=======
    SCorrecto.preload = 'auto';
    SError.preload = 'auto';
    SFinal.preload = 'auto';

    const optionButtons = document.querySelectorAll('.btn-option');

>>>>>>> be0e305 (Añadi la tabla en juego de telarañas y añadi un juego de lamateria de matematicas)
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
    const gameRounds = [
        { compound: 'HCl', tipo: 'Hidrácidos', correctName: ['Ácido', 'Clorhídrico'], options: ['Ácido', 'Cloroso', 'Hidruro', 'Clorhídrico', 'de', 'Cloro'], aparicion: false },
        { compound: 'H₂S', tipo: 'Hidrácidos', correctName: ['Ácido', 'Sulfhídrico'], options: ['Sulfuroso', 'Ácido', 'de', 'Azufre', 'Hídrico', 'Sulfhídrico'], aparicion: false },
        { compound: 'HBr', tipo: 'Hidrácidos', correctName: ['Ácido', 'Bromhídrico'], options: ['Bórico', 'Bromoso', 'Ácido', 'Hídrico', 'Bromhídrico', 'de'], aparicion: false },
        { compound: 'H₂Se', tipo: 'Hidrácidos', correctName: ['Ácido', 'Selenhídrico'], options: ['Selenio', 'Selenoso', 'Ácido', 'de', 'Selenhídrico', 'Hídrico'], aparicion: false },
        { compound: 'HI', tipo: 'Hidrácidos', correctName: ['Ácido', 'Yodhídrico'], options: ['Yodoso', 'de', 'Yodo', 'Ácido', 'Hídrico', 'Yodhídrico'], aparicion: false },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> be0e305 (Añadi la tabla en juego de telarañas y añadi un juego de lamateria de matematicas)
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
        { compound: 'H₂SO₄', tipo: 'Oxiácidos', correctName: ['Ácido', 'Sulfúrico'], options: ['Sulfuroso', 'de', 'Ácido', 'Azufre', 'Sulfato', 'Sulfúrico'], aparicion: false },
        { compound: 'H₂CO₃', tipo: 'Oxiácidos', correctName: ['Ácido', 'Carbónico'], options: ['Carbono', 'Ácido', 'Carbónico', 'de', 'Carbonoso', 'Hídrico'], aparicion: false },
        { compound: 'HMnO₃', tipo: 'Oxiácidos', correctName: ['Ácido', 'Manganoso'], options: ['Mangánico', 'de', 'Permangánico', 'Ácido', 'Manganoso', 'Manganeso'], aparicion: false },
        { compound: 'H₃PO₄', tipo: 'Oxiácidos', correctName: ['Ácido', 'Fosfórico'], options: ['Fosforoso', 'de', 'Ácido', 'Fósforo', 'Fosfórico', 'Fosfito'], aparicion: false },
        { compound: 'HClO', tipo: 'Oxiácidos', correctName: ['Ácido', 'Hipocloroso'], options: ['Clórico', 'Ácido', 'Cloroso', 'Hipocloroso', 'de', 'Perclórico'], aparicion: false },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> be0e305 (Añadi la tabla en juego de telarañas y añadi un juego de lamateria de matematicas)
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
        { compound: 'NaCl', tipo: 'Sales Haloideas', correctName: ['Cloruro', 'de', 'Sodio'], options: ['Sodio', 'Cloruro', 'Sódico', 'de', 'Sal', 'Clorato'], aparicion: false },
        { compound: 'PbI₄', tipo: 'Sales Haloideas', correctName: ['Yoduro', 'Plúmbico'], options: ['Plomo', 'Yoduro', '(II)', 'Plúmbico', 'de', 'Plumboso'], aparicion: false },
        { compound: 'KBr', tipo: 'Sales Haloideas', correctName: ['Bromuro', 'de', 'Potasio'], options: ['Potásico', 'Bromato', 'Bromuro', 'de', 'Potasio', 'Bromo'], aparicion: false },
        { compound: 'Fe₂S₃', tipo: 'Sales Haloideas', correctName: ['Sulfuro', 'Férrico'], options: ['Fierro', 'Azufre', 'Sulfuro', 'Ferroso', 'de', 'Férrico'] },
        { compound: 'Li₂Se', tipo: 'Sales Haloideas', correctName: ['Seleniuro', 'de', 'Litio'], options: ['Litio', 'Selenito', 'de', 'Seleniuro', 'Lítico', 'Selenio'], aparicion: false },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> be0e305 (Añadi la tabla en juego de telarañas y añadi un juego de lamateria de matematicas)
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
        { compound: 'CO₂', tipo: 'Anhidridos', correctName: ['Dióxido', 'de', 'Carbono'], options: ['Carbono', 'Carbónico', 'Dióxido', 'Anhídrido', 'de', 'Monóxido'], aparicion: false },
        { compound: 'SO₃', tipo: 'Anhidridos', correctName: ['Anhídrido', 'Sulfúrico'], options: ['Azufre', 'Sulfuroso', 'Trióxido', 'Sulfúrico', 'de', 'Anhídrido'], aparicion: false },
        { compound: 'Br₂O', tipo: 'Anhidridos', correctName: ['Anhídrido', 'Hipobromoso'], options: ['Bromo', 'de', 'Bromoso', 'Anhídrido', 'Óxido', 'Hipobromoso'], aparicion: false },
        { compound: 'Cl₂O₇', tipo: 'Anhidridos', correctName: ['Anhídrido', 'Perclórico'], options: ['Cloroso', 'Anhídrido', 'de', 'Clórico', 'Perclórico', 'Óxido'], aparicion: false },
        { compound: 'P₂O₅', tipo: 'Anhidridos', correctName: ['Anhídrido', 'Fosfórico'], options: ['Fosforoso', 'de', 'Anhídrido', 'Fósforo', 'Fosfórico', 'Pentóxido'], aparicion: false },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> be0e305 (Añadi la tabla en juego de telarañas y añadi un juego de lamateria de matematicas)
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
        { compound: 'NaOH', tipo: 'Bases', correctName: ['Hidróxido', 'de', 'Sodio'], options: ['Sódico', 'Hidruro', 'de', 'Hidróxido', 'Óxido', 'Sodio'], aparicion: false },
        { compound: 'Mg(OH)₂', tipo: 'Bases', correctName: ['Hidróxido', 'de', 'Magnesio'], options: ['Magnésico', 'Magnesio', 'de', 'Hidróxido', 'Óxido', 'Hidruro'], aparicion: false },
        { compound: 'Fe(OH)₃', tipo: 'Bases', correctName: ['Hidróxido', 'Férrico'], options: ['Hierro', 'Férrico', 'de', 'Hidróxido', 'Ferroso', '(III)'], aparicion: false },
        { compound: 'AgOH', tipo: 'Bases', correctName: ['Hidróxido', 'de', 'Plata'], options: ['Plata', 'Hidruro', 'Argéntico', 'Hidróxido', 'de', 'Base'], aparicion: false },
        { compound: 'Pt(OH)₂', tipo: 'Bases', correctName: ['Hidróxido', 'Platinoso'], options: ['Platínico', '(II)', 'de', 'Platino', 'Hidróxido', 'Platinoso'], aparicion: false },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> be0e305 (Añadi la tabla en juego de telarañas y añadi un juego de lamateria de matematicas)
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
        { compound: 'PtO', tipo: 'Óxidos Metálicos', correctName: ['Óxido', 'Platinoso'], options: ['Platínico', '(II)', 'de', 'Platino', 'Óxido', 'Platinoso'], aparicion: false },
        { compound: 'Ag₂O', tipo: 'Óxidos Metálicos', correctName: ['Óxido', 'de', 'Plata'], options: ['Plata', 'Argéntico', 'de', 'Anhídrido', 'Óxido', 'Platino'], aparicion: false },
        { compound: 'HgO', tipo: 'Óxidos Metálicos', correctName: ['Óxido', 'Mercúrico'], options: ['Mercurio', 'de', 'Mercuroso', 'Óxido', '(I)', 'Mercúrico'], aparicion: false },
        { compound: 'Mn₂O₇', tipo: 'Óxidos Metálicos', correctName: ['Óxido', 'Permangánico'], options: ['Mangánico', 'Manganeso', 'de', 'Óxido', 'Permangánico', 'Manganoso'], aparicion: false },
        { compound: 'Fe₂O₃', tipo: 'Óxidos Metálicos', correctName: ['Óxido', 'Férrico'], options: ['Hierro (II)', 'Óxido', 'Anhídrido', 'Ferroso', 'Férrico', 'de'], aparicion: false },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> be0e305 (Añadi la tabla en juego de telarañas y añadi un juego de lamateria de matematicas)
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
        { compound: 'LiH', tipo: 'Hidruros', correctName: ['Hidruro', 'de', 'Litio'], options: ['Lítico', 'Hidróxido', 'Hidruro', 'de', 'Litio', 'Ácido'], aparicion: false },
        { compound: 'RbH', tipo: 'Hidruros', correctName: ['Hidruro', 'de', 'Rubidio'], options: ['Rubidio', 'Hidróxido', 'de', 'Ácido', 'Hidruro', 'Base'], aparicion: false },
        { compound: 'BaH₂', tipo: 'Hidruros', correctName: ['Hidruro', 'de', 'Bario'], options: ['Bórico', 'de', 'Bario', 'Hidróxido', 'Hidruro', 'Base'], aparicion: false },
        { compound: 'AlH₃', tipo: 'Hidruros', correctName: ['Hidruro', 'de', 'Aluminio'], options: ['Aluminio', 'de', 'Alumínico', 'Hidróxido', 'Ácido', 'Hidruro'], aparicion: false },
        { compound: 'PbH₄', tipo: 'Hidruros', correctName: ['Hidruro', 'Plúmbico'], options: ['Plomo', '(IV)', 'de', 'Plumboso', 'Hidruro', 'Plúmbico'], aparicion: false },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> be0e305 (Añadi la tabla en juego de telarañas y añadi un juego de lamateria de matematicas)
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
        { compound: 'NaHCO₃', tipo: 'Sales Ácidas', correctName: ['Bicarbonato', 'de', 'Sodio'], options: ['Sodio', 'Carbonato', 'Bicarbonato', 'Ácido', 'de', 'Sódico'], aparicion: false },
        { compound: 'K₂HPO₄', tipo: 'Sales Ácidas', correctName: ['Fosfato', 'Ácido', 'de', 'Potasio'], options: ['Fosfito', 'Potasio', 'Ácido', 'Fosfato', 'de', 'Potásico'], aparicion: false },
        { compound: 'NaHSO₄', tipo: 'Sales Ácidas', correctName: ['Sulfato', 'Ácido', 'de', 'Sodio'], options: ['Bisulfato', 'Ácido', 'de', 'Sulfato', 'Sódico', 'Sodio'], aparicion: false },
        { compound: 'CaHPO₃', tipo: 'Sales Ácidas', correctName: ['Fosfito', 'Ácido', 'de', 'Calcio'], options: ['Fosfato', 'Cálcico', 'de', 'Ácido', 'Calcio', 'Fosfito'], aparicion: false },
        { compound: '[NH₄]HCO₃', tipo: 'Sales Ácidas', correctName: ['Bicarbonato', 'de', 'Amonio'], options: ['Amoniaco', 'Carbonato', 'de', 'Bicarbonato', 'Ácido', 'Amonio'], aparicion: false },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> be0e305 (Añadi la tabla en juego de telarañas y añadi un juego de lamateria de matematicas)
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
        { compound: 'CaCO₃', tipo: 'Oxisales', correctName: ['Carbonato', 'de', 'Calcio'], options: ['Cálcico', 'Carbonito', 'Calcio', 'de', 'Carburo', 'Carbonato'], aparicion: false },
        { compound: 'MgSO₄', tipo: 'Oxisales', correctName: ['Sulfato', 'de', 'Magnesio'], options: ['Sulfito', 'Magnesio', 'de', 'Magnésico', 'Sulfato', 'Azufre'], aparicion: false },
        { compound: 'Ba(ClO)₂', tipo: 'Oxisales', correctName: ['Hipoclorito', 'de', 'Bario'], options: ['Clorato', 'de', 'Clorito', 'Bario', 'Perclorato', 'Hipoclorito'], aparicion: false },
        { compound: 'FeAsO₃', tipo: 'Oxisales', correctName: ['Arsenito', 'Férrico'], options: ['Arseniato', 'de', 'Hierro', 'Ferroso', 'Férrico', 'Arsenito'], aparicion: false },
        { compound: 'PbC₂O₄', tipo: 'Oxisales', correctName: ['Oxalato', 'Plumboso'], options: ['Plomo', 'de', 'Plúmbico', 'Oxalato', '(II)', 'Plumboso'], aparicion: false },
    ];
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
    let Errores = [
        { tipo: "Hidrácidos", comentario: "Este compuesto era un HIDRÁCIDO. Recuerda que su nombre sigue la siguiente regla: 'ÁCIDO' + nombre del no metal con la terminación hidríco." },
        { tipo: "Oxiácidos", comentario: "Este compuesto era un OXIÁCIDO. Recuerda que su nombre sigue la siguiente regla: 'ÁCIDO' + nombre del polianión, cambiando su terminación (si es ato->ico, y si es ito->oso). " },
        { tipo: "Sales Haloideas", comentario: "Este compuesto era una SAL HALOIDEA. Recuerda que su nombre sigue la siguiente reglas: Nombre de no metal con la terminación uro + el nombre del metal (si es de valencia variable, su terminación será ico si es la mayor y oso si es la menor; o sino dirá su número de valencia)" },
        { tipo: "Anhidridos", comentario: "Este coompuesto era un ÓXIDO NO METÁLICO. Recuerda que su nombre sigue la siguiente regla: prefijo de la cantidad de O + 'OXIDO' + prefijo de la cantidad de O + nobre de no metal. También puede seguir la regla: 'ANHIDRIDO' + nombre de no metal con terminación de acuerdo a su número de valencia (1-2->Hipo--oso, 3-4->-oso, 5-6->-ico, 7->Per--ico)." },
        { tipo: "Bases", comentario: "Este compuesto era un HIDRÓXIDO. Recuerda que su nombre sigue la siguiente regla: 'HIDRÓXIDO' + de + nombre de metal (si es de valencia variable, su terminación será ico si es la mayor y oso si es la menor; o sino dirá su número de valencia)." },
        { tipo: "Óxidos Metálicos", comentario: "Este compuesto era un ÓXIDO METÁLICO. Recuerda que su nombre sigue la siguiente regla: 'ÓXIDO' + de + nombre de metal (si es de valencia variable, su terminación será ico si es la mayor y oso si es la menor; o sino dirá su número de valencia)" },
        { tipo: "Hidruros", comentario: "Este compuesto era un HIDRURO. Recuerda que su nombre sigue la siguiente regla: 'HIDRURO' + de + nombre de metal (si es de valencia variable, su terminación será ico si es la mayor y oso si es la menor; o sino dirá su número de valencia)" },
        { tipo: "Sales Ácidas", comentario: "Este compuesto era una SAL ÁCIDA. Recuerda que su nombre seguirá las reglas de la sal que representa unicamente añadiendo la palabra 'ÁCIDA' entre el nombre del no metal (o polianión) y el nombre del metal" },
        { tipo: "Oxisales", comentario: "Este compuesto era una OXISAL. Recuerda que su nombre sigue la siguiente regla: nombre del polianión + de + nombre del metal (si es de valencia variable, su terminación será ico si es la mayor y oso si es la menor; o sino dirá su número de valencia)" },

    ]
    let puntaje = 0;
    let Total = 0;
    const roundsAleatorios = [...gameRounds].sort(() => Math.random() - 0.5);
<<<<<<< HEAD
=======
=======

    let Errores = [
        { tipo: "Hidrácidos", comentario: "Este compuesto era un HIDRÁCIDO. Recuerda que su nombre sigue la siguiente regla: 'ÁCIDO' + nombre del no metal con la terminación hidríco." },
        { tipo: "Oxiácidos", comentario: "Este compuesto era un OXIÁCIDO. Recuerda que su nombre sigue la siguiente regla: 'ÁCIDO' + nombre del polianión, cambiando su terminación (si es ato->ico, y si es ito->oso)." },
        { tipo: "Sales Haloideas", comentario: "Este compuesto era una SAL HALOIDEA. Recuerda que su nombre sigue la siguiente reglas: Nombre de no metal con la terminación uro + el nombre del metal (si es de valencia variable, su terminación será ico si es la mayor y oso si es la menor; o sino dirá su número de valencia)" },
        { tipo: "Anhidridos", comentario: "Este compuesto era un ÓXIDO NO METÁLICO. Recuerda la regla: prefijo + 'ÓXIDO' + prefijo + no metal. Alternativa: 'ANHIDRIDO' + nombre del no metal según su valencia (hipo–oso, –oso, –ico, per–ico)." },
        { tipo: "Bases", comentario: "Este compuesto era un HIDRÓXIDO. Regla: 'HIDRÓXIDO' + de + metal (si tiene valencia variable: ico mayor, oso menor)." },
        { tipo: "Óxidos Metálicos", comentario: "Este compuesto era un ÓXIDO METÁLICO. Regla: 'ÓXIDO' + de + metal (ico mayor, oso menor, o número romano)." },
        { tipo: "Hidruros", comentario: "Este compuesto era un HIDRURO. Regla: 'HIDRURO' + de + metal (ico mayor, oso menor, o número romano)." },
        { tipo: "Sales Ácidas", comentario: "Este compuesto era una SAL ÁCIDA. Regla: nombre del anión + 'ÁCIDA' + de + metal." },
        { tipo: "Oxisales", comentario: "Este compuesto era una OXISAL. Regla: nombre del polianión + de + metal (ico mayor, oso menor o número romano)." },
    ]

    let puntaje = 0;
    let Total = 0;

    const roundsAleatorios = [...gameRounds].sort(() => Math.random() - 0.5);

>>>>>>> be0e305 (Añadi la tabla en juego de telarañas y añadi un juego de lamateria de matematicas)
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
    const obtenerCompuestoAleatorio = () => {
        while (Total < 15) {
            let disponibles = gameRounds.filter(c => !c.aparicion);
            let indice = Math.floor(Math.random() * disponibles.length);
            let seleccionado = disponibles[indice];
            seleccionado.aparicion = true;
            return seleccionado;
        }
        mostrarModalFinal();
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
    const mostrarCompuesto = (compuesto) => {
        clearTimeout(ayudaTimer);
        let compuestoActual = obtenerCompuestoAleatorio();
        if (!compuestoActual) return;
        $('#circle').html(compuestoActual.compound);
        let opcionesMezcladas = [...compuestoActual.options].sort(() => Math.random() - 0.5);
<<<<<<< HEAD
=======
=======

    const mostrarCompuesto = (compuesto) => {
        clearTimeout(ayudaTimer);

        let compuestoActual = obtenerCompuestoAleatorio();
        if (!compuestoActual) return;

        $('#circle').html(compuestoActual.compound);

        let opcionesMezcladas = [...compuestoActual.options].sort(() => Math.random() - 0.5);

>>>>>>> be0e305 (Añadi la tabla en juego de telarañas y añadi un juego de lamateria de matematicas)
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
        optionButtons.forEach((btn, index) => {
            btn.textContent = opcionesMezcladas[index] || '';
            btn.classList.remove('correct', 'incorrect');
            btn.disabled = false;
        });
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
        currentCompound = compuestoActual;
        ayudaTimer = setTimeout(() => {
            optionButtons.forEach(btn => {
                if (currentCompound.correctName.includes(btn.textContent.trim())) {
                    btn.classList.add('ayuda-correcta'); // iluminar respuesta correcta
<<<<<<< HEAD
=======
=======

        currentCompound = compuestoActual;

        ayudaTimer = setTimeout(() => {
            optionButtons.forEach(btn => {
                if (currentCompound.correctName.includes(btn.textContent.trim())) {
                    btn.classList.add('ayuda-correcta');
>>>>>>> be0e305 (Añadi la tabla en juego de telarañas y añadi un juego de lamateria de matematicas)
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
                }
            });
        }, 40000);
    };
<<<<<<< HEAD
    let currentCompound = null;
=======
<<<<<<< HEAD
    let currentCompound = null;
=======

    let currentCompound = null;

>>>>>>> be0e305 (Añadi la tabla en juego de telarañas y añadi un juego de lamateria de matematicas)
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
    function mostrarModalFinal() {
        SFinal.currentTime = 0;
        SFinal.play();
        let modalFinal = new bootstrap.Modal(document.getElementById('modalFinal'));
        $('#mensajeFinal').html(`Tu puntaje final fue de <strong>${puntaje}/25</strong>. ¡Excelente trabajo!`);
        modalFinal.show();
    }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
    optionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (!currentCompound) return;
            const palabraSeleccionada = btn.textContent.trim();
            const tipoCorrecto = currentCompound.tipo;
            if (currentCompound.correctName.includes(palabraSeleccionada)) {
                btn.classList.add('correct');
                btn.disabled = true;
                const correctasSeleccionadas = Array.from(optionButtons)
                    .filter(b => b.classList.contains('correct'))
                    .map(b => b.textContent.trim());
<<<<<<< HEAD
=======
=======

    optionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (!currentCompound) return;

            const palabraSeleccionada = btn.textContent.trim();
            const tipoCorrecto = currentCompound.tipo;

            if (currentCompound.correctName.includes(palabraSeleccionada)) {
                btn.classList.add('correct');
                btn.disabled = true;

                const correctasSeleccionadas = Array.from(optionButtons)
                    .filter(b => b.classList.contains('correct'))
                    .map(b => b.textContent.trim());

>>>>>>> be0e305 (Añadi la tabla en juego de telarañas y añadi un juego de lamateria de matematicas)
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
                if (correctasSeleccionadas.length === currentCompound.correctName.length) {
                    puntaje++;
                    Total++;
                    SCorrecto.currentTime = 0;
                    SCorrecto.play();
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
                    document.getElementById('contenedorPuntaje').innerHTML =
                        `<i class="bi bi-star-fill"></i> Puntaje: ${puntaje}/15`;
                    let modalCorrecto = new bootstrap.Modal(document.getElementById('modalCorrecto'));
                    modalCorrecto.show();
                    $("#modalCorrecto .modal-content").addClass("animate__animated animate__pulse");
<<<<<<< HEAD
=======
=======

                    document.getElementById('contenedorPuntaje').innerHTML =
                        `<i class="bi bi-star-fill"></i> Puntaje: ${puntaje}/15`;

                    let modalCorrecto = new bootstrap.Modal(document.getElementById('modalCorrecto'));
                    modalCorrecto.show();

                    $("#modalCorrecto .modal-content").addClass("animate__animated animate__pulse");

>>>>>>> be0e305 (Añadi la tabla en juego de telarañas y añadi un juego de lamateria de matematicas)
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
                    $('#modalCorrecto').off('hidden.bs.modal').on('hidden.bs.modal', function () {
                        if (Total >= 25) {
                            mostrarModalFinal();
                        } else {
                            optionButtons.forEach(b => b.classList.remove('correct', 'incorrect'));
                            mostrarCompuesto();
                        }
                    });
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> be0e305 (Añadi la tabla en juego de telarañas y añadi un juego de lamateria de matematicas)
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
                    setTimeout(() => modalCorrecto.hide(), 2500);
                }

            } else {
                btn.classList.add('incorrect');
                optionButtons.forEach(b => b.disabled = true);
<<<<<<< HEAD
                SError.currentTime = 0;
                SError.play();
=======
<<<<<<< HEAD
                SError.currentTime = 0;
                SError.play();
=======

                SError.currentTime = 0;
                SError.play();

>>>>>>> be0e305 (Añadi la tabla en juego de telarañas y añadi un juego de lamateria de matematicas)
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
                const error = Errores.find(e => e.tipo === tipoCorrecto);
                const comentario = error ? error.comentario : "Revisa bien las características del compuesto.";

                const modalError = new bootstrap.Modal(document.getElementById('modalError'));
                $('#errorTitulo').text(`❌ Respuesta incorrecta`);
                $('#errorCuerpo').html(`<strong>Pista sobre los ${tipoCorrecto}:</strong><br>${comentario}`);
                modalError.show();
<<<<<<< HEAD
                Total++;
=======
<<<<<<< HEAD
                Total++;
=======

                Total++;

>>>>>>> be0e305 (Añadi la tabla en juego de telarañas y añadi un juego de lamateria de matematicas)
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
                $('#modalError').off('hidden.bs.modal').on('hidden.bs.modal', function () {
                    optionButtons.forEach(b => b.classList.remove('correct', 'incorrect'));
                    mostrarCompuesto();
                });
            }
        });
    });
<<<<<<< HEAD
    $('.btnSiguiente').on('click', mostrarCompuesto);
=======
<<<<<<< HEAD
    $('.btnSiguiente').on('click', mostrarCompuesto);
=======

    $('.btnSiguiente').on('click', mostrarCompuesto);

>>>>>>> be0e305 (Añadi la tabla en juego de telarañas y añadi un juego de lamateria de matematicas)
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
    $('.elemento').hover(
        function () {
            $('#nombreElemento').text($(this).attr('id'));
            let clases = $(this).attr('class').split(' ');
            let claseTipo = clases.find(c => c !== 'elemento');
            $('#contenedor-nombre')
                .removeClass()
                .addClass('nombre-elemento')
                .addClass(claseTipo);
        },
        function () {
            $('#nombreElemento')
                .text('Pasa el cursor sobre un elemento para ver su nombre');
            $('#contenedor-nombre')
                .removeClass()
                .addClass('nombre-elemento');
        }
    );
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
    document.getElementById('btnInicio').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    document.getElementById('btnRepetir').addEventListener('click', () => {
        location.reload();
    });
    document.getElementById('btnMasJuegos').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });
<<<<<<< HEAD
})
=======
})
=======

    document.getElementById('btnInicio').addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    document.getElementById('btnRepetir').addEventListener('click', () => {
        location.reload();
    });

    document.getElementById('btnMasJuegos').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });

    // ⚠️ ***CORRECCIÓN IMPORTANTE***
    // Se elimina la creación duplicada del modal de polianiones.
    // Bootstrap lo abre solo con data-bs-target.
});
>>>>>>> be0e305 (Añadi la tabla en juego de telarañas y añadi un juego de lamateria de matematicas)
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
