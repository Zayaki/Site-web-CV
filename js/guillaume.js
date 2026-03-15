$(document).ready(function(){

//animation de l'image d'accueil
const titres = new Array(document.querySelector('h1'),document.querySelector('h2'));
const qualites = new Array(document.querySelector('#cur'),document.querySelector('#pol'),document.querySelector('#cre'),document.querySelector('#aut'));

const animation1 = setTimeout(function(){
    titres[0].style.opacity=1;
}, 1000)
const animation2 = setTimeout(function(){
    titres[1].style.opacity=1;
}, 2000)
const animation3 = setTimeout(function(){
    qualites[0].classList.add('qualites-anim1');
}, 3000)
const animation4= setTimeout(function(){
    qualites[2].classList.add('qualites-anim2');
}, 3500)
const animation5 = setTimeout(function(){
    qualites[1].classList.add('qualites-anim1');
}, 4000)
const animation6 = setTimeout(function(){
    qualites[3].classList.add('qualites-anim3');
}, 4500)

// lancement de funnyText sur le titre des sections
$('.fun1').funnyText({
speed: 700,
borderColor: 'none',
activeColor: '#00a09a',
color: 'black',
fontSize: '2.7em',
direction: 'both'
});
$('.fun2').funnyText({
speed: 700,
borderColor: 'none',
activeColor: '#fff',
color: 'black',
fontSize: '2.7em',
direction: 'both'
});
$('.fun3').funnyText({
speed: 700,
borderColor: 'none',
activeColor: '#00a09a',
color: 'black',
fontSize: '2.7em',
direction: 'both'
});
$('.fun4').funnyText({
speed: 700,
borderColor: 'none',
activeColor: '#fff',
color: 'black',
fontSize: '2.7em',
direction: 'both'
});
$('.fun5').funnyText({
speed: 700,
borderColor: 'none',
activeColor: '#fff',
color: 'black',
fontSize: '2.7em',
direction: 'both'
});


//ÉVÈNEMENTS AU MOMENT DU SCROLL

//Barre pourcentage du scroll
const bar = document.querySelector('.bar');

addEventListener("scroll", function(){
    const max = document.body.scrollHeight - innerHeight;
    const pourcentage = pageYOffset / max * 100;
    bar.style.width = pourcentage + "%";
});

// Animation barres de séparation
const $barres = new Array($('#competences'),$('#experience'),$('#recommandations'),$('#portfolio'));
const $classBarres = new Array($('.green-divider1'),$('.green-divider2'),$('.white-divider1'),$('.white-divider2'));

$barres[0].waypoint(function(direction){
if(direction == 'down'){
$classBarres[0].addClass('divider-anim'); 
}
else
$classBarres[0].removeClass('divider-anim'); 
}, {offset:'50%'});

$barres[1].waypoint(function(direction){
if(direction == 'down'){
$classBarres[2].addClass('divider-anim');
}
else
$classBarres[2].removeClass('divider-anim');
}, {offset:'50%'});

$barres[2].waypoint(function(direction){
if(direction == 'down'){
$classBarres[1].addClass('divider-anim');
}
else
$classBarres[1].removeClass('divider-anim');
}, {offset:'50%'});

$barres[3].waypoint(function(direction){
if(direction == 'down'){
$classBarres[3].addClass('divider-anim');
}
else
$classBarres[3].removeClass('divider-anim');
}, {offset:'50%'});

//Apparition des balises "expérience"
const $badges = new Array($('.trigger1'),$('.trigger2'),$('.trigger3'));
const $conteneur = new Array($('.timeline-panel-container-inverted1'),$('.timeline-panel-container'),$('.timeline-panel-container-inverted2'));

// $badges[0].waypoint(function(direction){
// if(direction == 'down'){
// $conteneur[0].addClass('timeline-animation'); 
// }
// else
// $conteneur[0].removeClass('timeline-animation'); 
// }, {offset:'50%'});

// $badges[1].waypoint(function(direction){
// if(direction == 'down'){
// $conteneur[1].addClass('timeline-animation');
// }
// else
// $conteneur[1].removeClass('timeline-animation');
// }, {offset:'50%'});

// $badges[2].waypoint(function(direction){
// if(direction == 'down'){
// $conteneur[2].addClass('timeline-animation');
// }
// else
// $conteneur[2].removeClass('timeline-animation');
// }, {offset:'50%'});
});




    