let texto = "";
let ftexto = "";
let ffilter = [];
let sfilter = [];



//Eventos
window.onload= function(){
    const entrada = document.getElementById('entrada');
        entrada.addEventListener("keydown", capturarText);

}

const click = document.getElementById('botonone');
click.addEventListener('click', encriptar);

const clack = document.getElementById('botontwo');
clack.addEventListener('click', desencriptar);




//Funciones 
//Funcion capturar texto 
function capturarText(){
    texto = entrada.value;    
}

//Funcion Encriptar
function encriptar(){
    let validacion = (validarText(texto));
    console.log(validacion)
    if (validacion === true){
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
        mostrarTextEncrip();
    } else if (validacion === false){
        document.getElementById('mensajealerta').style.display = 'block';
        document.getElementById('entrada').style.border = 'red, solid';
        document.getElementById('entrada').style.boxShadow = '3px 0px 30px red';
        const entrada = document.getElementById('entrada');
        entrada.addEventListener("keydown", condicionesIniciales);
    }
}
    

 //Funcion desencriptar texto
 function desencriptar(){
    ftexto = texto.replaceAll('ai','a')
                  .replaceAll('enter','e')
                  .replaceAll('imer','i')
                  .replaceAll('ober','o')
                  .replaceAll('ufat','u')
    mostrarTextDesencrip();   
}

//Funcion mostrar texto desencriptado
function mostrarTextDesencrip(){    
        document.getElementById('image').style.display = 'none';
        document.getElementById('initialtitle').style.display = 'none';
        document.getElementById('initialp').style.display = 'none';
        document.getElementById('finalp').style.display = 'block';
        document.getElementById('finalp').innerText = ftexto;

 }


 //Funcion mostrar texto encriptado
 function mostrarTextEncrip(){    
        document.getElementById('image').style.display = 'none';
        document.getElementById('initialtitle').style.display = 'none';
        document.getElementById('initialp').style.display = 'none';
        document.getElementById('finalp').style.display = 'block';
        document.getElementById('finalp').innerText = sfilter.join("");
 }
     
 //Funcion condiciones iniciales
 function condicionesIniciales(){
    document.getElementById('image').style.display = 'block';
    document.getElementById('initialtitle').style.display = 'block';
    document.getElementById('initialp').style.display = 'block';
    document.getElementById('finalp').style.display = 'none';
    document.getElementById('mensajealerta').style.display = 'none';
    document.getElementById('entrada').style.border = 'darkblue, solid';
    document.getElementById('entrada').style.boxShadow = '3px 0px 30px rgb(97, 156, 224)';
    
 }

//Funcion evitar mayusculas y caracteres especiales 
function validarText(variable) {
    const regex = /^[a-zñ ]+$/g;
       return regex.test(variable)
}

