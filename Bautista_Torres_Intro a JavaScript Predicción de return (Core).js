//Bloque 1//
function saluda() {
   console.log("¡Hola!");
}
saluda();
console.log("¿Cómo estás?");
//console.log("¡Hola!")|local//
//console.log("¿Cómo estás?")|global//

//Bloque 2//
function saluda() {
   console.log("¡Hola!");
   return 50;
}
var resultado = saluda();
console.log("El resultado es:"+resultado);
//