//VARIABLES GLOBALES
var sNombre;

$(document).ready(function() {
sNombre = prompt('name?');
$('#sNombre').html(sNombre);
$(".sNombre").html(sNombre);

});


function alerta(){
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
                from: "top",
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
                enter: 'animated fadeInDown',
                exit: 'animated fadeOutUp'
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
