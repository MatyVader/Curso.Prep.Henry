// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  if (x > y){
    return x;
  } else if (x < y){
    return y;
  }
  else return x;
}

function mayoriaDeEdad(edad) {
  if (edad >= 18){
    return "Allowed";
  } else return "Not allowed";
}
  
function conection(status) {
  if (status === 1){
    return "Online";
  } else if (status === 2){
    return "Away";
  } else return "Offline";
}

function saludo(idioma) {
  if (idioma === "aleman"){
    return "Guten Tag!";
  } else if (idioma === "mandarin") {
    return "Ni Hao!";
  } else if (idioma === "ingles"){
    return "Hello!";
  } return "Hola!";
}

function colors(color) {
switch (color){
    case 'blue':
      return "This is blue";
      break;
    case 'red':
      return "This is red";
      break;
    case 'green':
      return "This is green";
      break;
    case 'orange':
      return "This is orange";
      break;
    default:
      return "Color not found";
      break;
  }
}

function esDiezOCinco(numero) {
  if (numero === 10){
    return true;
  } else if (numero === 5){
    return true;
  } else return false;
}

function estaEnRango(numero) {
  if (numero < 50 && numero > 20){
    return true;
  } else return false;
}

function esEntero(numero) {
  if (numero % numero === 0 && Math.floor(numero) !== 0){
      return true;
   } else if (numero === 0){
            return true;
   }
    return false;
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  if (numero % 3 === 0 && numero % 5 === 0){
    return "fizzbuzz";
  } else if (numero % 3 === 0){
          return "fizz";
  } else if (numero % 5 === 0){
          return "buzz"; 
  } return numero; 
}

function operadoresLogicos(num1, num2, num3) {
  if (num1 < 0 || num2 < 0 || num3 < 0){
    return "Hay negativos";
  } else if (num1 === 0 || num2 === 0 || num3 === 0){
    return "Error";
  } else if (num1 > num3){
    if (num1 > num2){
      return "Número 1 es mayor y positivo";
    }
  } else if (num3 > num2){
          num3 = num3 + 1;
          return num3;
  } return false;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if (numero > 1 ){
    for (var i = 2; i < numero; i++){
      if (numero % i === 0){
        return false;
      }
    } return true;
    } return false;
  } 

function esVerdadero(valor){
  if (valor === true){
    return "Soy verdadero";
  } return "Soy falso";
}

function tablaDelSeis(){
  var array = []; 
  for (var i = 0; i <= 10; i++){
    var resultado = i * 6;
    array.push(resultado);     
  } return(array);  
}

function tieneTresDigitos(numero){
  if (numero.toString().length === 3){
    return true;
  } return false;
  
}

function doWhile(numero) {
  var contador = 1;
  do {
    contador = contador + 1;
    numero = numero + 5;
  } while (contador <= 8);
  return numero;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
