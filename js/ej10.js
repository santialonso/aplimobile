var num  =  [8,2,6,-7];
var num2 =  [8,5,6,7];
var num3 =  [0,0,0,0];
var num4 =  [1,1,1,1];
var numero = 8;

function contiene(numero,num){
    return num.some(num => num == numero);
}

console.log(contiene(numero,num));
console.log(contiene(numero,num2));
console.log(contiene(numero,num3));
console.log(contiene(numero,num4));