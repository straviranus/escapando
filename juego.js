window.onload= function(){
           
    document.onkeydown=chars;
}
// Los movimientos permiten la continuidad del desplazamiento y 
// tienen como valor los márgenes iniciales del div
var pieza= document.getElementById("pieza");
var movimientoHorizontal=250;
var movimientoVertical=250;

function chars (evento){
    if (window.event)
    evento=window.
    caracteres(evento.keyCode);
}

function caracteres (chars) {
   
const piezas=[
"url(https://raw.githubusercontent.com/straviranus/imagenes-chess/master/peon.png)",
"url(https://raw.githubusercontent.com/straviranus/imagenes-chess/master/peon.png)", 
"url(https://raw.githubusercontent.com/straviranus/imagenes-chess/master/caballo.png)",
"url(https://raw.githubusercontent.com/straviranus/imagenes-chess/master/torre.png)",
"url(https://raw.githubusercontent.com/straviranus/imagenes-chess/master/dama.png)",
"url(https://raw.githubusercontent.com/straviranus/imagenes-chess/master/alfil.png)", 
"url(https://raw.githubusercontent.com/straviranus/imagenes-chess/master/rey.png)",
];   


// movilidad
    if(chars==39) {
        movimientoHorizontal+=10;
        pieza.style.marginLeft = movimientoHorizontal+"px";
    }
    if(chars==37) {
        movimientoHorizontal+=-10;
        pieza.style.marginLeft = movimientoHorizontal+"px";
    }
    if(chars==40) {
        movimientoVertical+=10;
        pieza.style.marginTop = movimientoVertical+"px";
    }
    if(chars==38) {
        movimientoVertical+=-10;
        pieza.style.marginTop = movimientoVertical+"px";
    }
    
   
    
        // pasar de un lado a otro


    /*
    if (movimientoHorizontal==-80) {
        movimientoHorizontal=490;
        var randomH= Math.abs(parseInt(Math.random()*movimientoHorizontal)%6); 
        document.getElementById("pieza").style.backgroundImage = (piezas[randomH])    
        document.getElementById("pieza").style.height = "60px";
    }

    if (movimientoHorizontal==500) {
        movimientoHorizontal=-70;
        var randomH= Math.abs(parseInt(Math.random()*movimientoHorizontal)%6);
        document.getElementById("pieza").style.backgroundImage = (piezas[randomH]);  
        document.getElementById("pieza").style.height = "60px";  
    }

    if (movimientoVertical==500) {
        movimientoVertical=-50;
        var randomV= Math.abs(parseInt(Math.random()*movimientoVertical)%6);
        document.getElementById("pieza").style.backgroundImage = (piezas[randomV]);
        document.getElementById("pieza").style.height = "60px";
    }

    if (movimientoVertical==-70) {
        movimientoVertical=500;
        var randomV= Math.abs(parseInt(Math.random()*movimientoVertical)%6);
        document.getElementById("pieza").style.backgroundImage = (piezas[randomV]);  
        document.getElementById("pieza").style.height = "60px"; 
}
    if (movimientoVertical==-60) {
        if (movimientoHorizontal==250) {
            randomV=6;
        document.getElementById("pieza").style.backgroundImage = (piezas[randomV]); 
        document.getElementById("pieza").style.height = "59px";
        
      
           } 

        
        
    
    } 
       
  
      // JUEGO GANADO
 

 if (movimientoVertical==430) {
        if (movimientoHorizontal==250) {
            if (document.getElementById("pieza").clientHeight==59) {

                document.getElementById("contenedor").style.backgroundImage = "url(https://raw.githubusercontent.com/straviranus/imagenes-chess/master/victoria.png)";
                document.getElementById("pieza").style.display = "none";
                document.getElementById("danubio").pause();
                document.getElementById("aplausos").play();
                

            }
        
      
           } 

        }
*/
}
            