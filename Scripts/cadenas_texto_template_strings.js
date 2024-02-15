//Strings: datos en forma de texto.

let a = 'hola';
let b = ' que tal';
let c = ' como estas?';
let lorem = '   Do you really know what you are capable of?   ';
let e = 'you'

console.log(
    a.toUpperCase(),            //Todo mayusculas
    b.toLowerCase(),            //Todo minusculas
    c.length                    //Longitud del string 
    ); 

console.log(lorem.includes(e));     //true == coincidencia

console.log(
    lorem + '\n',
    lorem.trim(),                    //Quita los espacios en blanco
    lorem.split(' ')                 //Combierte el string en un array
    );          


//Template Strings:

let nombre = 'Ari'
let pregunta = 'como estas?'

let saludo = 'Hola, mi nombre es' + nombre + pregunta;          //Concatenacion

console.log(saludo);

let saludo2 = `Hola, mi nombre es ${nombre}, ${pregunta}`;      //Interpolacion

console.log(saludo2);