// Creación del tablero
function iniciar() {
var Tablero=document.getElementById("tablero");
Tablero.classList.add("bajando")
Tablero.style.visibility="visible";
document.getElementById("pieza").classList.add("opacidad");
document.getElementById("boton").style.display="none";
document.getElementById("danubio").play();
setTimeout(teclas,7000);
setInterval(pistass,110000);
}
function teclas(){
    document.onkeydown=chars;
    //Ahora se va a escuchar cuando el usuario apreta una tecla  
}



/// PISTAS

const animaciones=["subir-1", "bajar-1", "bajar-2", "subir-2"];
var alternador=0;

function pistass(){
    var pista1=document.getElementById("pista-1")
    var pista2=document.getElementById("pista-2")
    var clues=[pista1, pista2, pista1, pista2]

    if (alternador==4){
        alternador=0;
    }

   clues[alternador].classList.add(animaciones[alternador]);
    setTimeout(desaparecer,10000)
}
function desaparecer(){
    var pista1=document.getElementById("pista-1")
    var pista2=document.getElementById("pista-2")
    var clues=[pista1, pista2, pista1, pista2]

    clues[alternador].classList.remove(animaciones[alternador])
     alternador=alternador+1
 
}




    function teclas(){
        document.onkeydown=chars;
        //Ahora se va a escuchar cuando el usuario apreta una tecla  
    }

                // JUEGO PRINCIPAL



// tienen como valor los márgenes iniciales del div
var movimientoHorizontal=252;
var movimientoVertical=441;

// Importante para que levante la posibilida de escuchar cuando el usuario toca una tecla
function chars (evento){
    if (window.event)
    evento=window.
    caracteres(evento.keyCode);    
}

//Función principal, se aplica al teclear

function caracteres (chars) {

    var fichas=document.querySelectorAll(".ficha")
    var ficha= document.getElementById("pieza");
// Array para ir cambiando las imágenes del elemento "Pieza"
const piezas=[
    "url(https://raw.githubusercontent.com/straviranus/imagenes-chess/master/peon.png)",
    "url(https://raw.githubusercontent.com/straviranus/imagenes-chess/master/peon.png)", 
    "url(https://raw.githubusercontent.com/straviranus/imagenes-chess/master/caballo.png)",
    "url(https://raw.githubusercontent.com/straviranus/imagenes-chess/master/torre.png)",
    "url(https://raw.githubusercontent.com/straviranus/imagenes-chess/master/dama.png)",
    "url(https://raw.githubusercontent.com/straviranus/imagenes-chess/master/alfil.png)", 
    "url(https://raw.githubusercontent.com/straviranus/imagenes-chess/master/rey.png)",
    ];   


// movilidad con las teclas direccionales
    if(chars==39) {
        movimientoHorizontal+=9;
    movimiento(ficha);
    }
    if(chars==37) {
        movimientoHorizontal+=-9;
    movimiento(ficha);
    }
    if(chars==40) {
        movimientoVertical+=9;
    movimiento(ficha);
    }
    if(chars==38) {
        movimientoVertical+=-9;
    movimiento(ficha);
    }

    // Cambiar de un lado a otro
if (movimientoHorizontal==522){

    movimientoHorizontal=-72
    movimiento(ficha);
}
if (movimientoHorizontal==-81){

    movimientoHorizontal=513
    movimiento(ficha);
}
if (movimientoVertical==522){
    
    movimientoVertical=-54
    movimiento(ficha);
}
if (movimientoVertical==-81){

    movimientoVertical=513
    movimiento(ficha);
}
// TRANSFORMACIÓN 
if(
    (movimientoHorizontal==504)||(movimientoHorizontal==-63)||
    (movimientoVertical==504) 
)
{
    trasnformar(ficha); 
}

// REY ESCONDIDO
if(
    (movimientoVertical==-63)&&(movimientoHorizontal==252)
)
{
    ficha.style.backgroundImage ="url(https://raw.githubusercontent.com/straviranus/imagenes-chess/master/rey.png)";
    document.getElementById("campanita").play();
    ficha.setAttribute("rey", "true");
}



// Función de movimiento con las reclas direccionales
function movimiento(piece){
    if (piece.getAttribute("inmovil")!="true") {
    piece.style.marginLeft = movimientoHorizontal+"px";
    piece.style.marginTop = movimientoVertical+"px";
    }
}
// Función de transformar pieza al cruzar los límites del tablero
function trasnformar(piece){
    var random=Math.abs(parseInt(Math.random()*movimientoVertical)%6);
   piece.removeAttribute("rey");
   if (piece.getAttribute("inmovil")!="true") {
    piece.style.backgroundImage = (piezas[random]);  
   }
}


// JUEGO GANADO, cuando se lleva el rey a la casilla de origen
if(
    (movimientoVertical==441)&&(movimientoHorizontal==252)
    &&(pieza.getAttribute("rey")=="true")
)
{
    pieza.style.backgroundColor="green";
    pieza.setAttribute("inmovil", "true");
    document.getElementById("danubio").pause();
    document.getElementById("aplausos").play();
    document.getElementById("pista-1").style.display="none";
    document.getElementById("pista-2").style.display="none";

    mostrar(fichas);
  danzar()

}

// Muestra un array de elementos, en este caso particular, las piezas
function mostrar(elementos){
for(i=0; i<elementos.length; i++){
    elementos[i].style.visibility="visible";
}
}


// Animaciones para el final
function danzar(){
    fichas[0].classList.add("volar-1");
    fichas[1].classList.add("volar-2");
    fichas[2].classList.add("volar-3");
    fichas[3].classList.add("volar-4");


    
}

}


