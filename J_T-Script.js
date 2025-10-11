$(document).ready(function () {
    let modal = new bootstrap.Modal(document.getElementById('modalIntroduccion'));
    modal.show();
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
})