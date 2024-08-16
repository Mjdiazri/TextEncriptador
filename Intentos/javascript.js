let texto = "";
let ftexto = "";
let ffilter = [];
let sfilter = [];

//Capturar y Validar texto
//Evento
window.onload= function(){
    const entrada = document.getElementById('entrada');
        entrada.addEventListener("keyup", capturarText);

}

//Funcion Capturar texto
function capturarText(){
    texto = entrada.value;    
    console.log(texto)
    console.log(typeof(texto))
    if (texto.length <=0){
        condicionesIniciales()
    } else{
        if(validarText(texto) === false){
            document.getElementById('mensajealerta').style.display = 'block';
            document.getElementById('entrada').style.border = 'red, solid';
            document.getElementById('entrada').style.boxShadow = '3px 0px 30px red';
        } else {
            console.log("El texto cumple con las especificaciones")
            document.getElementById('mensajealerta').style.display = 'none';
            document.getElementById('entrada').style.border = 'green, solid';
            document.getElementById('entrada').style.boxShadow = '3px 0px 30px green';
        }
    }
}

//Funcion primera validacion
function validarText(texto) {
    const regex = /^[a-zñ ]+$/g;
       return regex.test(texto)
}

//Condiciones iniciales
function condicionesIniciales(){
    document.getElementById('image').style.display = 'block';
    document.getElementById('initialtitle').style.display = 'block';
    document.getElementById('initialp').style.display = 'block';
    document.getElementById('finalp').style.display = 'none';
    document.getElementById('mensajealerta').style.display = 'none';
    document.getElementById('entrada').style.border = 'darkblue, solid';
    document.getElementById('entrada').style.boxShadow = '3px 0px 30px rgb(97, 156, 224)';
    document.getElementById('botonthree').innerText = ("Copiar"); 
}


// Encriptacion de texto
//Evento
const click = document.getElementById('botonone');
click.addEventListener('click', encriptar);

//Funcion Encriptar
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

    let valor = sfilter.join("");
    console.log(valor);
    mostrarText(valor);   
}


//Funcion mostrar texto general
function mostrarText(valor){
    document.getElementById('image').style.display = 'none';
    document.getElementById('initialtitle').style.display = 'none';
    document.getElementById('initialp').style.display = 'none';
    document.getElementById('finalp').style.display = 'block';
    document.getElementById('finalp').innerText = (valor);
}


//Desencriptacion de texto
//Evento
const clack = document.getElementById('botontwo');
clack.addEventListener('click', desencriptar);

//Funcion desencriptar texto
function desencriptar(){
    ftexto = texto.replaceAll('ai','a')
                    .replaceAll('enter','e')
                    .replaceAll('imer','i')
                    .replaceAll('ober','o')
                    .replaceAll('ufat','u')
      
    mostrarText(ftexto)  
 }

 //limpiar campos 
 //Evento
 const cluck = document.getElementById('botonfour');
 cluck.addEventListener('click',clear);

function clear(){
    document.getElementById('entrada').value = '';
    condicionesIniciales();
}


//Copiar texto
//Evento

const clock = document.getElementById('botonthree');


//Funcion copiar texto
const copiartext = async () => {
    try {
        const textToCopy = document.getElementById('finalp').innerText
        await navigator.clipboard.writeText(textToCopy)
        console.log('Texto copiado')
        console.log(textToCopy)
        document.getElementById('botonthree').innerText = ("Copiado")
    } catch (error) {
        console.log(error)        
    }
} 

clock.addEventListener('click', copiartext);