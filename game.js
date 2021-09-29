function jugar(){

window.onload= function game(){
    document.onkeydown=chars;
}

var movimientoHorizontal=252;
var movimientoVertical=441;

function chars (evento){
    if (window.event)
    evento=window.
    caracteres(evento.keyCode);
}



function caracteres (chars) {
    var ficha= document.getElementById("pieza");
const piezas=[
"url(imagenes/peon.png)",
"url(imagenes/peon.png)", 
"url(imagenes/caballo.png)",
"url(imagenes/torre.png)",
"url(imagenes/dama.png)",
"url(imagenes/alfil.png)", 
"url(imagenes/rey.png)",
];   


// movilidad
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
    ficha.style.backgroundImage ="url(imagenes/rey.png)";
    ficha.setAttribute("rey", "true");
}

// Función de transformar pieza
function trasnformar(piece){
    var random=Math.abs(parseInt(Math.random()*movimientoVertical)%6);
   piece.removeAttribute("rey");
    piece.style.backgroundImage = (piezas[random]);  

}
// Función de movimiento
function movimiento(piece){
    if (piece.getAttribute("inmovil")!="true") {
    piece.style.marginLeft = movimientoHorizontal+"px";
    piece.style.marginTop = movimientoVertical+"px";
    }
}
// JUEGO GANADO
if(
    (movimientoVertical==441)&&(movimientoHorizontal==252)
    &&(pieza.getAttribute("rey")=="true")
)
{
    pieza.style.backgroundColor="green";
    pieza.setAttribute("inmovil", "true");

}
}
}