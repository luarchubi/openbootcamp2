//listas, arrays; o arreglo
const lista = [1, "hola", true, undefined, null];
const lista2 = new Array(2, "hola", true, undefined, null);
const lista3 = 3;
lista3[0] = "soy el primer valor, index, 0"; //le da valor a una de las posiciones
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);

//objetos

const movil = {
  //crea el objeto "movil" con 4 atributos PONER COMAS
  anchura: 4,
  alto: 19,
  marca: "samsung",
  isWhite: true,
  contactos: ["tomas", "francisco"], //esto es una array o lista
  tarjeta: {
    //un objeto dentro de un objeto
    marca: "sandisk",
    almacenamiento: "32 gb",
  },
};

movil.anyio = 2019; //le agrega nuevos atributos a un objeto
movil.marca = "xiomi";

console.log(movil.isWhite); //se accede a los atributos a traves del operador "."
console.log(movil.marca);

//fechas//

const ahora = new Date();
console.log(new Date());

const fecha_milis = new Date(10);
console.log(fecha_milis);

const fechaCadena = new Date("march 25 2020");
console.log(fechaCadena);

const fechaValores = new Date("2022, 4, 15");
console.log(fechaValores);

const dia = ahora.getDate();
const month = ahora.getMonth();
const anyo = ahora.getYear();
console.log(dia, month, anyo);
