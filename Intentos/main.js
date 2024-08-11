let texto = "";
let ffilter = [];
let sfilter = [];

//Eventos
window.onload= function(){
    const entrada = document.getElementById('entrada');
    entrada.addEventListener("keydown", capturarText);
}

const click = document.getElementById('botonone');
click.addEventListener('click', encriptar);


//Funciones capturar texto 
function capturarText(){
    texto = entrada.value;
    
}

function encriptar(){
    ffilter = texto.split('');
    sfilter = ffilter.map((caracter) => {
        if (caracter === "a"){
            return "ai";
        } else if (caracter === "e"){
            return "enter";
        } else if (caracter === "i"){
            return "imer";
        } else if (caracter === "o"){
            return "ober";
        } else if (caracter === "u"){
            return "ufat";
        } else {
            return caracter;
        }
    })
    console.log(ffilter);
    console.log(sfilter);
    ocultar();
 }

 function ocultar(){
    document.getElementById('image').style.display = 'none';
    document.getElementById('initialtitle').style.display = 'none';
    document.getElementById('initialp').style.display = 'none';
 }
        
 











