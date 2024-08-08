let texto = "a";
let array1 = ["a","e","i","o","u"];
let array2 = ["ai", "ei", "ai", "ou","ui"];
let ffilter =[];
let sfilter=[];


function encriptar (parrafo){
    ffilter = texto.split('');
    sfilter = ffilter.map((caracter) =>  {
    caracter === array1[0] ? array2[0]: caracter;
   });

     return console.log(sfilter);

  }

encriptar(texto)



