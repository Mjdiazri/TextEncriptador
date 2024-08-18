let texto = "";
let ffilter = [];
let sfilter = [];



function catchText(){
    texto = document.getElementById("entradaTextarea").value;
    console.log(texto)
}

catchText();

/*
function encriptar(){
    ffilter = texto.split('');
    sfilter = ffilter.map((caracter) => {
        if (caracter === "a" || caracter === "A"){
            return "ai";
        } else if (caracter === "e" || caracter === "E"){
            return "enter";
        } else if (caracter === "i" || caracter === "I"){
            return "imer";
        } else if (caracter === "o" || caracter === "O"){
            return "ober";
        } else if (caracter === "u" || caracter === "U"){
            return "ufat";
        } else {
            return caracter;
        }
    });
}

boton1.addEventListener('click', encriptar,true);
*/
/*encriptar()

console.log(ffilter);
console.log(sfilter);
*/




