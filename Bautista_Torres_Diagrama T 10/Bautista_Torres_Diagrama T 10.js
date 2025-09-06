//Bloque 1//
function saluda() {
   console.log("¡Hola!");
}
saluda();
console.log("¿Cómo estás?");
// Variable|Valor
// No hay ninguna variable en este bloque//

//Bloque 2//
function saluda() {
   console.log("¡Hola!");
   return 50;
}
var resultado = saluda();
console.log("El resultado es:"+resultado);
//variable|valor//
// resultado|50//
// se imprime "¡Hola!" y luego "El resultado es:50"//

//Bloque 3//
function suma(numero) {
   console.log("El número es:"+numero);
   return numero + 20;
}
var resultado = suma(5);
console.log("El resultado es:"+resultado);
// variable|valor
// resultado|25
// se imprime "El número es:5" y luego "El resultado es:25"//

//Bloque 4 – Hay un giro inesperado//
var numero = 10;
console.log(numero);
function imprimeYRegresa(numero2) {
   console.log(numero2);
   return numero2;
}
var resultado = imprimeYRegresa(7);
console.log(resultado);
console.log(numero);
// variable|valor//
// numero|10//
// numero2|7//
// resultado|7//
// se imprime "10", "7" y luego "7"//

//Bloque 5//
var numero = 10;
console.log(numero);
function alCuadrado(numero2) {
   console.log(numero2);
   return numero2 * numero2;
}
var resultado = alCuadrado(7);
console.log(resultado);
console.log(numero);
//variable|valor//
// numero|10//
// numero2|7//
// resultado|49//
// se imprime "10", "7" y luego "49"//

//Bloque 6//
function alCuadrado(numero) {
   console.log("El número es:"+numero);
   var cuadrado = numero * numero;
   return cuadrado;
}
var resultado = alCuadrado(2) + alCuadrado(5);
console.log("El resultado es:"+resultado);

//Bloque 7//
function sumatoria(numero1, numero2) {
   return numero1 + numero2;
}
console.log(sumatoria(4, 3));
console.log(sumatoria(2, 9));
//variable|valor//
//numero1|4//
//numero2|3//
//resultado|7//
//numero1|2//
//numero2|9//
//resultado|11//
//se imprime "7" y luego "11"//

//Bloque 8//
function imprimirSumatoria(numero1, numero2) {
   console.log(numero1);
   return numero1 + numero2;
}
console.log(imprimirSumatoria(4, 3));
console.log(imprimirSumatoria(2, 9));
//variable|valor//
//numero1|4//
//numero2|3//
//se imprime "4" y luego "7"//
//numero1|2//
//numero2|9//
//se imprime "2" y luego "11"//

//Bloque 9//
function sumatoria(numero1, numero2) {
   var suma = numero1 + numero2
   console.log("La suma es:"+suma);
   return suma;
}
var resultado = sumatoria(4, 3) + sumatoria(2, 9);
console.log("El resultado es:"+resultado);
//variable|valor//
//numero1|4//
//numero2|3//
//suma|7//
//se imprime "La suma es:7"//
//numero1|2//
//numero2|9//
//suma|11//
//se imprime "La suma es:11"//
//resultado|18//
// se imprime "El resultado es:18"//

//Bloque 10 – Tómalo con calma, ya que es un desafío más complejo//
function sumatoria(numero1, numero2) {
   var suma = numero1 + numero2
   console.log("La suma es:"+suma);
   return suma;
}
var resultado = sumatoria(1,2) + sumatoria(3,sumatoria(4,1)) + sumatoria(sumatoria(2,3),sumatoria(4,1));
console.log("El resultado es:"+resultado);
//variable|valor//
//numero1|1//
//numero2|2//
//suma|3//
//se imprime "La suma es:3"//
//numero1|3//
//numero2|sumatoria(4,1)//
//numero2|5//
//suma|8//
//se imprime "La suma es:8"//
//numero1|sumatoria(2,3)//
//numero1|5//
//numero2|sumatoria(4,1)//
//numero2|5//
//suma|10//
//se imprime "La suma es:10"//
//resultado|21//
// se imprime "El resultado es:21"//
