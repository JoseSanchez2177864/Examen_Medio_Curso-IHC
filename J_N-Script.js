$(document).ready(function () {
    let modal = new bootstrap.Modal(document.getElementById('modalIntroduccion'));
    modal.show();
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
    function obtenerCompuestoAleatorio() {
        while (Total < 25) {
            let disponibles = Compuestos.filter(c => !c.aparicion);
            let indice = Math.floor(Math.random() * disponibles.length);
            let seleccionado = disponibles[indice];
            seleccionado.aparicion = true;
            return seleccionado;
        }
        mostrarModalFinal();
    }
    function mostrarCompuesto() {
        let compuesto = obtenerCompuestoAleatorio();
        if (!compuesto) return;
        $('.btn-lg').removeClass('btnError btnSiguiente');
        let compuestoHTML = compuesto.compuesto.replace(
            compuesto.iluminar,
            `<span class="iluminado">${compuesto.iluminar}</span>`
        );
        $('#Compuesto')
            .html(compuestoHTML)
            .addClass('resaltado');
        setTimeout(() => $('#Compuesto').removeClass('resaltado'), 1000);
        $('.elemento').removeClass('iluminado');
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

        $('#Compuesto').data('tipo-correcto', compuesto.tipo);
    };
    $('.btnSiguiente').on('click', mostrarCompuesto);
    $(document).on('click', '.btn-lg', function () {
        let tipoCorrecto = $('#Compuesto').data('tipo-correcto');
        let tipoSeleccionado = $(this).attr('id');
        if (tipoSeleccionado === tipoCorrecto) {
            puntaje += 1
            Total += 1
            $("#contenedorPuntaje").html('<i class="bi bi-star-fill text-warning"></i> Puntaje: ' + puntaje + '/25');
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
    function mostrarModalFinal() {
        let modalFinal = new bootstrap.Modal(document.getElementById('modalFinal'));
        $('#mensajeFinal').html(`Tu puntaje final fue de <strong>${puntaje}/25</strong>. ¡Excelente trabajo!`);
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
    document.getElementById('btnRepetir').addEventListener('click', () => {
        location.reload();
    });
    document.getElementById('btnMasJuegos').addEventListener('click', () => {
        window.location.href = 'dashboard.html';
    });
});
