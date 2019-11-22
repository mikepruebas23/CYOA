var iVida = 100;
$(document).ready(function () {
    $('#iVida').val(iVida);
    
});
$('#iVida').html(iVida);
const $like = document.getElementById('like');
var contador = 12;
var pLike = document.getElementById('like-puntos');

// $like.addEventListener('click', (event) => {
//     // console.log(event);
//     // $like.classList.add('is-liked');
 
//     $like.classList.toggle('is-liked');
    
//     //contador likes
//     // if ($like.classList == 'like') {
//     //     contador--;
//     //     pLike.innerHTML = 'Me Gusta ' + contador;
//     // } else if ($like.classList == 'like is-liked') {
//     //     contador++;
//     //     pLike.innerHTML = 'Me Gusta ' + contador;
//     // }
// });
function repetir(){
    $like.classList.toggle('is-liked');
}

var timer = 1500;
setInterval('repetir()',timer);