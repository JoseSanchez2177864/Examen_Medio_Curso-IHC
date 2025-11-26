$(document).ready(function () {
    let modal = new bootstrap.Modal(document.getElementById('modalIntroduccion'));
    let ayudaTimer = null;

    modal.show();
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

    let puntaje = 0;
    let Total = 0;
    let Compuestos = [
        { compuesto: "HCl", tipo: "Hidrácidos", iluminar: "H", aparicion: false },
        { compuesto: "H₂S", tipo: "Hidrácidos", iluminar: "H", aparicion: false },
        { compuesto: "HBr", tipo: "Hidrácidos", iluminar: "H", aparicion: false },
        { compuesto: "H₂Se", tipo: "Hidrácidos", iluminar: "H", aparicion: false },
        { compuesto: "HI", tipo: "Hidrácidos", iluminar: "H", aparicion: false },
        { compuesto: "H₂SO₄", tipo: "Oxiácidos", iluminar: "H", aparicion: false },
        { compuesto: "H₂CO₃", tipo: "Oxiácidos", iluminar: "H", aparicion: false },
        { compuesto: "HMnO₃", tipo: "Oxiácidos", iluminar: "H", aparicion: false },
        { compuesto: "H₃PO₄", tipo: "Oxiácidos", iluminar: "H", aparicion: false },
        { compuesto: "HClO", tipo: "Oxiácidos", iluminar: "H", aparicion: false },
        { compuesto: "NaCl", tipo: "Sales Haloideas", iluminar: "", aparicion: false },
        { compuesto: "PbI₄", tipo: "Sales Haloideas", iluminar: "", aparicion: false },
        { compuesto: "KBr", tipo: "Sales Haloideas", iluminar: "", aparicion: false },
        { compuesto: "Fe₂S₃", tipo: "Sales Haloideas", iluminar: "", aparicion: false },
        { compuesto: "Li₂Se", tipo: "Sales Haloideas", iluminar: "", aparicion: false },
        { compuesto: "CO₂", tipo: "Anhidridos", iluminar: "O", aparicion: false },
        { compuesto: "SO₃", tipo: "Anhidridos", iluminar: "O", aparicion: false },
        { compuesto: "Br₂O", tipo: "Anhidridos", iluminar: "O", aparicion: false },
        { compuesto: "Cl₂O₇", tipo: "Anhidridos", iluminar: "O", aparicion: false },
        { compuesto: "P₂O₅", tipo: "Anhidridos", iluminar: "O", aparicion: false },
        { compuesto: "NaOH", tipo: "Bases", iluminar: "OH", aparicion: false },
        { compuesto: "Mg(OH)₂", tipo: "Bases", iluminar: "OH", aparicion: false },
        { compuesto: "Fe(OH)₃", tipo: "Bases", iluminar: "OH", aparicion: false },
        { compuesto: "AgOH", tipo: "Bases", iluminar: "OH", aparicion: false },
        { compuesto: "Pt(OH)₂", tipo: "Bases", iluminar: "OH", aparicion: false },
        { compuesto: "PtO", tipo: "Óxidos Metálicos", iluminar: "O", aparicion: false },
        { compuesto: "Ag₂O", tipo: "Óxidos Metálicos", iluminar: "O", aparicion: false },
        { compuesto: "HgO", tipo: "Óxidos Metálicos", iluminar: "O", aparicion: false },
        { compuesto: "Mn₂O₇", tipo: "Óxidos Metálicos", iluminar: "O", aparicion: false },
        { compuesto: "Fe₂O₃", tipo: "Óxidos Metálicos", iluminar: "O", aparicion: false },
        { compuesto: "LiH", tipo: "Hidruros", iluminar: "H", aparicion: false },
        { compuesto: "RbH", tipo: "Hidruros", iluminar: "H", aparicion: false },
        { compuesto: "BaH₂", tipo: "Hidruros", iluminar: "H", aparicion: false },
        { compuesto: "AlH₃", tipo: "Hidruros", iluminar: "H", aparicion: false },
        { compuesto: "PbH₄", tipo: "Hidruros", iluminar: "H", aparicion: false },
        { compuesto: "NaHCO₃", tipo: "Sales Ácidas", iluminar: "H", aparicion: false },
        { compuesto: "K₂HPO₄", tipo: "Sales Ácidas", iluminar: "H", aparicion: false },
        { compuesto: "NaHSO₄", tipo: "Sales Ácidas", iluminar: "H", aparicion: false },
        { compuesto: "CaHPO₃", tipo: "Sales Ácidas", iluminar: "H", aparicion: false },
        { compuesto: "[NH₄]HCO₃", tipo: "Sales Ácidas", iluminar: "H", aparicion: false },
        { compuesto: "CaCO₃", tipo: "Oxisales", iluminar: "", aparicion: false },
        { compuesto: "MgSO₄", tipo: "Oxisales", iluminar: "", aparicion: false },
        { compuesto: "Ba(ClO)₂", tipo: "Oxisales", iluminar: "", aparicion: false },
        { compuesto: "FeAsO₃", tipo: "Oxisales", iluminar: "", aparicion: false },
        { compuesto: "PbC₂O₄", tipo: "Oxisales", iluminar: "", aparicion: false }
    ];
    let Errores = [
<<<<<<< HEAD
    { 
        tipo: "Hidrácidos",
        comentario: "Se identifican porque el Hidrógeno (H) aparece al inicio seguido de un no metal. Cuando veas una fórmula que comienza con H y después un solo no metal (sin oxígeno), se trata de un HIDRÁCIDO."
    },

    { 
        tipo: "Oxiácidos",
        comentario: "Se reconocen porque el Hidrógeno (H) está al inicio y en el resto del compuesto aparece un polianión (un no metal con oxígeno). Si empieza con H y más adelante incluye O, es un OXIÁCIDO."
    },

    { 
        tipo: "Sales Haloideas",
        comentario: "Se distinguen porque están formadas por un metal unido a un no metal. Solo contienen dos elementos. Si ves un metal combinado con un no metal (excepto H), es una SAL HALOIDEA."
    },

    { 
        tipo: "Anhídridos",
        comentario: "Se identifican porque el Oxígeno (O) aparece unido a un no metal. Si en la fórmula tienes un no metal seguido de oxígeno, se trata de un ÓXIDO NO METÁLICO o ANHÍDRIDO."
    },

    { 
        tipo: "Bases",
        comentario: "Se reconocen por tener el grupo Hidróxido (OH) unido a un metal. Si al final de la fórmula aparece OH y antes hay un metal, es un HIDRÓXIDO o BASE."
    },

    { 
        tipo: "Óxidos Metálicos",
        comentario: "Se identifican cuando el Oxígeno (O) aparece unido a un metal. Si ves un metal seguido de oxígeno, estás frente a un ÓXIDO METÁLICO."
    },

    { 
        tipo: "Hidruros",
        comentario: "Se reconocen porque el Hidrógeno (H) aparece al final de la fórmula unido a un metal. Como solo tienen dos elementos, si ves un metal seguido de H, es un HIDRURO."
    },

    { 
        tipo: "Sales Ácidas",
        comentario: "Se distinguen porque, dentro de una sal (oxi-sal o halóidea), aparece un Hidrógeno (H) intermedio después del metal. Son los únicos compuestos que pueden contener hasta cuatro elementos. Si en la fórmula hay un H en medio, es una SAL ÁCIDA."
    },

    { 
        tipo: "Oxisales",
        comentario: "Se identifican porque un metal está unido a un polianión que contiene oxígeno. Si la fórmula tiene un metal, un no metal y oxígeno (tres elementos), se trata de una OXISAL."
    }
];

=======
        { tipo: "Hidrácidos", comentario: "Este tipo de compuestos se pueden identificar al ver que el Hidrógeno (H) va antes de un no metal, es decir, otro elemento. Así que, cuando veas una H al incio, se trata de un ácido; y si le sigue un no metal, ten por seguro que se trata de un HIDRÁCIDO." },
        { tipo: "Oxiácidos", comentario: "Este tipo de compuestos se pueden identificar al ver que el Hidrógeno (H) va antes de un polianión , es decir, un no metal con oxígeno. Así que, cuando veas una H al incio, se trata de un ácido; y más adelante ves una O, ten por seguro que se trata de un OXIÁCIDO." },
        { tipo: "Sales Haloideas", comentario: "Este tipo de compuestos se pueden identificar al ver que hay un metal seguido de un no metal; son compuestos formados unicamente por dos elementos, Así que si ves un metal con un no metal (sin contar H) se trata de una SAL HALOIDEA" },
        { tipo: "Anhidridos", comentario: "Este tipo de compuestos se pueden identificar al ver que el Oxígeno (O) va después de un no metal, es decir, otro elemento. Así que, cuando veas una O al final, se trata de un óxido; y si antes ves un no metal, ten por seguro que se trata de un ÓXIDO NO METÁLICO (ANHIDRIDO)." },
        { tipo: "Bases", comentario: "Este tipo de compuestos se pueden identificar al ver que hay un Hidróxido (OH)  después de un metal, es decir, otro elemento. Así que, cuando veas una OH al final, ten por seguro que se trata de un HIDRÓXIDO (BASE)." },
        { tipo: "Óxidos Metálicos", comentario: "Este tipo de compuestos se pueden identificar al ver que el Oxígeno (O) va después de un metal, es decir, otro elemento. Así que, cuando veas una O al final, se trata de un óxido; y si antes ves un metal, ten por seguro que se trata de un ÓXIDO METÁLICO." },
        { tipo: "Hidruros", comentario: "Este tipo de compuestos se pueden identificar al ver que el Hidrógeno (H) va después de un metal, es decir, otro elemento; son compuestos de dos elementos a diferencia de las bases. Así que, cuando veas una H al final y antes un metal, ten por seguro que se trata de un tipo de HIDRURO." },
        { tipo: "Sales Ácidas", comentario: "Este tipo de compuestos se pueden identificar al ver que en alguno de los tipos de sal (OXISAL O SAL HALOIDEA), después del metal ves una H (Hidrógeno) y después un no metal o un polianión; este es el único compuesto formado que puede ser formado por 4 elementos. Así que, cuando veas una H en medio del compuesto, ten por seguro que se trata de una SAL ÁCIDA." },
        { tipo: "Oxisales", comentario: "Este tipo de compuestos se pueden identificar al ver que hay un metal seguido de un polianión, es decir, un no metal con un Oxígeno (O); son compuestos formados unicamente por tres elementos, Así que si ves un metal, una O y un no metal, se trata de una OXISAL" },

    ]
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
    function obtenerCompuestoAleatorio() {
        while (Total < 15) {
            let disponibles = Compuestos.filter(c => !c.aparicion);
            let indice = Math.floor(Math.random() * disponibles.length);
            let seleccionado = disponibles[indice];
            seleccionado.aparicion = true;
            return seleccionado;
        }
        mostrarModalFinal();
    }
    function limpiarAyuda() {
        // Selector para tus botones de opción
        $('.btn-option').removeClass('ayuda-correcta');
    }
<<<<<<< HEAD
    function colorearCompuesto(compuesto) {
        const polianiones = ["CO₃", "SO₄", "PO₄", "ClO", "NO₃"];
        const metales = ["Na", "K", "Li", "Ca", "Mg", "Fe", "Pb", "Ag", "Pt", "Ba", "Rb", "Hg", "Mn", "Al"];
        const noMetales = ["Cl", "Br", "I", "S", "Se", "P", "N"];

        // Ordenar por longitud descendente para que símbolos largos se detecten primero
        polianiones.sort((a, b) => b.length - a.length);
        metales.sort((a, b) => b.length - a.length);
        noMetales.sort((a, b) => b.length - a.length);

        let resultado = '';
        let i = 0;

        while (i < compuesto.length) {
            let encontrado = false;

            // Checar polianiones
            for (let p of polianiones) {
                if (compuesto.substr(i, p.length) === p) {
                    resultado += `<span class="polianion">${p}</span>`;
                    i += p.length;
                    encontrado = true;
                    break;
                }
            }
            if (encontrado) continue;

            // Checar metales
            for (let m of metales) {
                if (compuesto.substr(i, m.length) === m) {
                    resultado += `<span class="metal">${m}</span>`;
                    i += m.length;
                    encontrado = true;
                    break;
                }
            }
            if (encontrado) continue;

            // Checar no metales
            for (let n of noMetales) {
                if (compuesto.substr(i, n.length) === n) {
                    resultado += `<span class="no-metal">${n}</span>`;
                    i += n.length;
                    encontrado = true;
                    break;
                }
            }
            if (encontrado) continue;

            // Si no coincide nada, agregar el carácter tal cual
            resultado += compuesto[i];
            i++;
        }

        return resultado;
    }



    // Iluminar parte específica (H, O, OH, etc.)
    function iluminarParte(compuesto) {
        let simbolo = compuesto.iluminar;
        if (!simbolo) return;

        // Escapar caracteres especiales
        let escaped = simbolo.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

        // Solo iluminar lo que NO está ya dentro de un span
        let regex = new RegExp(`(?![^<]*>)(` + escaped + `)(?![^<]*>)`, "g");

        let html = $('#Compuesto').html();
        $('#Compuesto').html(html.replace(regex, `<span class="iluminado">$1</span>`));
    }
=======
function colorearCompuesto(compuesto) {
    const polianiones = ["CO₃", "SO₄", "PO₄", "ClO", "NO₃"];
    const metales = ["Na", "K", "Li", "Ca", "Mg", "Fe", "Pb", "Ag", "Pt", "Ba", "Rb", "Hg", "Mn", "Al"];
    const noMetales = ["Cl", "Br", "I", "S", "Se", "P", "N"];

    // Ordenar por longitud descendente para que símbolos largos se detecten primero
    polianiones.sort((a, b) => b.length - a.length);
    metales.sort((a, b) => b.length - a.length);
    noMetales.sort((a, b) => b.length - a.length);

    let resultado = '';
    let i = 0;

    while (i < compuesto.length) {
        let encontrado = false;

        // Checar polianiones
        for (let p of polianiones) {
            if (compuesto.substr(i, p.length) === p) {
                resultado += `<span class="polianion">${p}</span>`;
                i += p.length;
                encontrado = true;
                break;
            }
        }
        if (encontrado) continue;

        // Checar metales
        for (let m of metales) {
            if (compuesto.substr(i, m.length) === m) {
                resultado += `<span class="metal">${m}</span>`;
                i += m.length;
                encontrado = true;
                break;
            }
        }
        if (encontrado) continue;

        // Checar no metales
        for (let n of noMetales) {
            if (compuesto.substr(i, n.length) === n) {
                resultado += `<span class="no-metal">${n}</span>`;
                i += n.length;
                encontrado = true;
                break;
            }
        }
        if (encontrado) continue;

        // Si no coincide nada, agregar el carácter tal cual
        resultado += compuesto[i];
        i++;
    }

    return resultado;
}



// Iluminar parte específica (H, O, OH, etc.)
function iluminarParte(compuesto) {
    let simbolo = compuesto.iluminar;
    if (!simbolo) return;

    // Escapar caracteres especiales
    let escaped = simbolo.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    
    // Solo iluminar lo que NO está ya dentro de un span
    let regex = new RegExp(`(?![^<]*>)(` + escaped + `)(?![^<]*>)`, "g");

    let html = $('#Compuesto').html();
    $('#Compuesto').html(html.replace(regex, `<span class="iluminado">$1</span>`));
}
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be

    function mostrarCompuesto() {
        clearTimeout(ayudaTimer);   // ya lo tenías, perfecto
        limpiarAyuda();            // quita cualquier resaltado anterior

        let compuesto = obtenerCompuestoAleatorio();
        if (!compuesto) return;
        $('.btn-lg').removeClass('btnError btnSiguiente');
<<<<<<< HEAD
        $('.btn-lg').removeClass('opcion-tenue');
        $('#btnPista').prop('disabled', false);
=======
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
        let compuestoHTML = colorearCompuesto(compuesto.compuesto);
        $('#Compuesto').html(compuestoHTML);
        setTimeout(() => $('#Compuesto').removeClass('resaltado'), 1000);
        $('.elemento').removeClass('iluminado');
        iluminarParte(compuesto);
        let simbolo = compuesto.iluminar;
        let elemento = $(`.elemento[data-simbolo="${simbolo}"]`);
        elemento.addClass('iluminado');
        setTimeout(() => {
            elemento.removeClass('iluminado');
        }, 1500);
        let tipo = compuesto.tipo;
        $('#' + tipo).addClass('btnSiguiente');
        $('.btn-lg').not('#' + tipo).addClass('btnError');
        $('#' + compuesto.tipo).addClass('btnSiguiente activo');
        $('.btn-lg').not('#' + compuesto.tipo).addClass('btnError');
        clearTimeout(ayudaTimer); // limpiar el anterior

        // Activar ayuda después de 40 segundos
        ayudaTimer = setTimeout(() => {
            resaltarOpcionCorrecta();
        }, 40000);

        $('#Compuesto').data('tipo-correcto', compuesto.tipo);
        // ===== GENERAR OPCIONES =====
        let tiposDisponibles = Errores.map(e => e.tipo);

        // 1. Tipo correcto
        let tipoCorrecto = compuesto.tipo;

        // 2. Sacar 3 tipos incorrectos
        let incorrectos = tiposDisponibles.filter(t => t !== tipoCorrecto);
        incorrectos = incorrectos.sort(() => Math.random() - 0.5).slice(0, 3);

        // 3. Unir opciones
        let opciones = [tipoCorrecto, ...incorrectos];

        // 4. Mezclarlas
        opciones = opciones.sort(() => Math.random() - 0.5);

        // 5. Poner texto en botones
        $("#btn1").text(opciones[0]);
        $("#btn2").text(opciones[1]);
        $("#btn3").text(opciones[2]);
        $("#btn4").text(opciones[3]);

    };
    $('.btnSiguiente').on('click', mostrarCompuesto);
    $(document).on('click', '.btn-lg', function () {
        let tipoCorrecto = $('#Compuesto').data('tipo-correcto');
        let tipoSeleccionado = $(this).text();
        clearTimeout(ayudaTimer);   // ya lo tenías, perfecto
        limpiarAyuda();            // quita cualquier resaltado anterior

        if (tipoSeleccionado === tipoCorrecto) {
            puntaje += 1
            Total += 1
            SCorrecto.currentTime = 0;
            SCorrecto.play();
            $("#contenedorPuntaje").html('<i class="bi bi-star-fill text-warning"></i> Puntaje: ' + puntaje + '/15');
            let modalCorrecto = new bootstrap.Modal(document.getElementById('modalCorrecto'));
            modalCorrecto.show();
            $("#modalCorrecto .modal-content").addClass("animate__animated animate__pulse");
            setTimeout(() => {
                modalCorrecto.hide();
                mostrarCompuesto();
            }, 2500);
        } else {
            let error = Errores.find(e => e.tipo === tipoCorrecto);
            let comentario = error ? error.comentario : "Revisa bien las características del compuesto.";
            SError.currentTime = 0;
            SError.play();
            let modalError = new bootstrap.Modal(document.getElementById('modalError'));
            $('#errorTitulo').text(`❌ Respuesta incorrecta`);
            $('#errorCuerpo').html(`<strong>Pista sobre los ${tipoCorrecto}:</strong><br>${comentario}`);
            modalError.show();
            Total += 1
            $('#modalError').off('hidden.bs.modal').on('hidden.bs.modal', function () {
                mostrarCompuesto();
            });
        }
    });
    function resaltarOpcionCorrecta() {
        let tipoCorrecto = $('#Compuesto').data('tipo-correcto');

        // Encontrar el botón cuyo texto coincide
        $('.btn-lg').each(function () {
            if ($(this).text().trim() === tipoCorrecto) {
                $(this).addClass('ayuda-correcta');
            }
        });
    }
    function mostrarModalFinal() {
        SFinal.currentTime = 0;
        SFinal.play();
        let modalFinal = new bootstrap.Modal(document.getElementById('modalFinal'));
        $('#mensajeFinal').html(`Tu puntaje final fue de <strong>${puntaje}/15</strong>. ¡Excelente trabajo!`);
        modalFinal.show();
    }
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
    document.getElementById('btnInicio').addEventListener('click', () => {
        window.location.href = 'index.html';
    });
    document.getElementById('btnRepetir').addEventListener('click', () => {
        location.reload();
    });
    document.getElementById('btnMasJuegos').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });
});
<<<<<<< HEAD

// ===== BOTÓN PISTA =====
$('#btnPista').on('click', function () {

    // 1. Obtener el tipo correcto del compuesto actual
    let tipoCorrecto = $('#Compuesto').data('tipo-correcto');

    // 2. Filtrar los botones incorrectos
    let incorrectos = $('.btn-lg').filter(function () {
        return $(this).text().trim() !== tipoCorrecto;
    });

    // 3. Mezclar y tomar dos incorrectos
    incorrectos = incorrectos.sort(() => Math.random() - 0.5).slice(0, 2);

    // 4. Aplicar la clase tenue
    incorrectos.each(function () {
        $(this).addClass('opcion-tenue');
    });

    // OPCIONAL: desactivar el botón para no usarlo 2 veces
    $(this).prop('disabled', true);
});

=======
>>>>>>> 5cae40df87ce054170b1c5452462d1e629d4f9be
