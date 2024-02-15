let num1 = 2;
let num2 = new Number(5.6);
let num3 = 9.795;
let num4 = '1.7';

console.log(
    num1,
    num2,
    num3.toFixed(1)                 //Redondea el numero a 1 decimal
    );

console.log(parseInt(num3));        //Convierte el valor a un valor numerico
console.log(parseFloat(num3));      //Parte flotante del numero

let suma = num3 + parseInt(num4)

console.log(parseInt(suma.toFixed()));      //Se convierte la suma a entero y luego se redondea al entero mas cercano