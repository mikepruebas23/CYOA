//VARIABLES GLOBALES
var sNombre;
var bGenero;

masculino = {
    1: 'images/gorra.svg',
    2: 'images/largo.svg',
    3: 'images/peinado.svg',
    4: 'images/viejo.svg',
}
femenino = {
    1: 'images/enojada.svg',
    2: 'images/girl.svg',
    3: 'images/viejita.svg',
    4: 'images/woman.svg',
}
otro = {
    1: 'images/otro.svg',
    2: 'images/otro.svg',
    3: 'images/otro.svg',
    4: 'images/otro.svg',
}
var x = Math.floor(Math.random() * (5 - 1)) + 1;

$(document).ready(function () {
    $('#exampleModal').modal('show');
    // $("#closeModal").attr("disabled", true);
    if (sNombre != undefined) {
        console.log(sNombre);
        $("#closeModal").removeAttr("disabled");
    }
    $('#closeModal').click(function () {
        sNombre = $('#sNombre').val();
        bGenero = $("input[name='genero']:checked").val();
        $('#exampleModal').modal('hide');

        // condición ? expresión1 : expresión2;
        (sNombre == "") ? sNombre = 'SIN NOMBRE': sNombre;
        (bGenero == undefined) ? bGenero = 'OYE NO LO SÉ': bGenero;

        switch (bGenero) {
            case "masculino":
                $("#miFoto").attr("src", masculino[x]);
                break;
            case "femenino":
                $("#miFoto").attr("src", femenino[x]);
                break;
            case 'OYE NO LO SÉ':
                $("#miFoto").attr("src", otro[x]);
                break;
        }

        $(".sNombre").html(sNombre);
        $(".bGenero").html(bGenero);
    });
});

function alerta() {
    $.notify({
        // options
        icon: 'glyphicon glyphicon-warning-sign',
        title: 'Notificación',
        message: 'Usted tiene un nuevo mensaje.',
        // url: 'https://github.com/mouse0270/bootstrap-notify',
        target: '_blank'
    }, {
        // settings
        element: 'body',
        position: null,
        type: "success",
        allow_dismiss: true,
        newest_on_top: true,
        showProgressbar: false,
        placement: {
            from: "bottom",
            align: "left"
        },
        offset: 0,
        spacing: 10,
        z_index: 1031,
        delay: 2000,
        timer: 1000,
        // url_target: '_blank',
        mouse_over: 'pause',
        animate: {
            enter: 'animated zoomInDown',
            exit: 'animated zoomOutUp'
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: 'class',
        template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
            '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
            '<span data-notify="icon"></span> ' +
            '<span data-notify="title">{1}</span> ' +
            '<span data-notify="message">{2}</span>' +
            '<div class="progress" data-notify="progressbar">' +
            '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
            '</div>' +
            '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>'
    });

}