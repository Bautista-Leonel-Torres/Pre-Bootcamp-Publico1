// Funcion del bloque 1//
function muestraPintor() {

   var infoContacto = ["Diego", "Rivera", "Guanajuato", "México", 812345678];

   console.log(infoContacto);

}
//variable|Valor
//infoContacto|["Diego", "Rivera", "Guanajuato", "México", 812345678]//
//Al llamar a la funcion muestraPintor(), se imprime el arreglo completo en la consola.//

// Funcion del bloque 2//
function muestraCompras() {
   var listaSupermercado = ["arroz", "frijoles", "lentejas", "pan"];

   var listaOficina = ["clips", "papel", "lapices"];

   listaOficina.push("Post-its");

   console.log(listaOficina);
} 

   //variable|Valor//
   //listaSupermercado| ["arroz", "frijoles", "lentejas", "pan"]//
   //listaOficina| ["clips", "papel", "lapices"]//
   //listaOficina|["clips", "papel", "lapices", "Post-its"]//
   //al llamar a la funcion muestraCompras(), se imprime el arreglo listaOficina lo cual muestra ["clips", "papel", "lapices", "Post-its"]//

// Funcion del bloque 3//
var biblioteca = ["Cien Años de Soledad", "Pedro Páramo", "La Casa de los Espíritus"];

biblioteca.push("El Laberinto de la Soledad");

biblioteca[1] = "El Llano en Llamas";

console.log(biblioteca);

//variable|Valor//
//biblioteca|["Cien Años de Soledad", "Pedro Páramo", "La Casa de los Espíritus"]//
//biblioteca|["Cien Años de Soledad","Pedro Páramo", "La Casa de los Espíritus", "El Laberinto de la Soledad"]//
//biblioteca|["Cien Años de Soledad", "El Llano en Llamas", "La Casa de los Espíritus", "El Laberinto de la Soledad"]//
//Al poner en un consol.log() la variable biblioteca, se imprime el arreglo de esta el cual queda como  ["Cien Años de Soledad", "El Llano en Llamas", "La Casa de los Espíritus", "El Laberinto de la Soledad"]//