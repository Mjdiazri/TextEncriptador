/*Ingresar mensaje
let texto = "Ingresa tu texto";
console.log(typeof(texto));

//Cambiar de string a array
console.log(texto.split(''))
console.log(typeof(texto));
*/
/*const vocala = 'ai';
//Ingresar texto
let texto = prompt ("Ingresa un texto");
let lista = [];
//Cambiar de string a array
function conversor (parrafo){
    lista = parrafo.split('')
    return console.log (lista);
    for (let i = 0; i < lista.length; i++){
        if(lista[i]== a ){
            lista.toSpliced(i,1,vocala)
        }
    }
}
//Ejecutar funcion
conversor(texto);
console.log(lista);
*/

let texto = "aeiou";
let lista = [];
const vocales = ["o","e","i","o","u"];
let lista2 =[];

const conversor = (texto) =>{
    lista = texto.split('');
//    console.log(lista);
}

conversor(texto);
//console.log(typeof(lista));

//for (let i = 0; i<lista.length; i++){
//    lista[i] == vocales[0] ? lista2 = lista.toSpliced(lista[i],1,"ai"):
//    lista[i] == vocales[1] ? lista2 = lista.toSpliced(lista[i],1,"enter"):
//    lista[i] == vocales[2] ? lista2 = lista.toSpliced(lista[i],1,"imes"):
//    lista[i] == vocales[3] ? lista2 = lista.toSpliced(lista[i],1,"ober"):
//    lista[i] == vocales[4] ? lista2 = lista.toSpliced(lista[i],1,"ufat"):"";
//}

/*for (let i = 0; i<lista.length; i++){
    if (lista [i] == "a"){
        console.log(lista[i]);
        lista2 = lista.toSpliced(lista[i],1,"ai")
        console.log(lista2);
    } else if (lista [i] == "e"){
        console.log(lista[i]);
        lista2 = lista.toSpliced(lista[i],1,"enter")
        console.log(lista2);
    }
}
*/
/*for (let i = 0; i<lista.length; i++){
    if (lista[i] == vocales[0]){
        console.log(lista[i],vocales[0])
        lista2 =  lista.toSpliced(lista[i],1,"ai");
    } else if (lista[i] == vocales [1]){
        lista2 = lista.toSpliced(lista[i],1,"enter");        
    } else if (lista[i] == vocales [2]){
        lista2 = lista.toSpliced(lista[i],1,"imes");
    } else if (lista[i] == vocales [3]){
        lista2 = lista.toSpliced(lista[i],1,"ober");
    } else if (lista[i] == vocales [4]){
        lista2 = lista.toSpliced(lista[i],1,"ufat");
    }
}
    */
//let lista2 = lista.toSpliced(lista[0],1,"ai")
//console.log(lista2)
