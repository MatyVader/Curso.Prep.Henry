// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Esto es un string';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1990;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  var cadena = str;
  return cadena;
}

function suma(x, y) {
  var sumar = x + y;
  return sumar;
}

function resta(x, y) {
  var restar = x - y;
  return restar; 
}

function multiplica(x, y) {
  var producto = x * y;
  return producto;
}

function divide(x, y) {
  var division = x / y;
  return division;
}

function sonIguales(x, y) {
  if (x === y) { 
      return true;
  }
  return false
}

function tienenMismaLongitud(str1, str2) {
  if (str1.length === str2.length) {
      return true;
  }
  return false;  
}

function menosQueNoventa(num) {
  if (num < 90){
    return true;
  }
  return false;
}

function mayorQueCincuenta(num) {
  if (num > 50){
    return true;
  } 
  return false;

}

function obtenerResto(x, y) {
  var resto = x % y;
  return resto;
  
}

function esPar(num) {
  if (num % 2 === 0){
    return true;
  }
  return false;
}

function esImpar(num) {
  if (num % 2 !== 0){
    return true;
  }
  return false;
}

function elevarAlCuadrado(num) {
  var cuadrado = num * num;
  return cuadrado;
  
}

function elevarAlCubo(num) {
  var cubo = Math.pow(num,3);
  return cubo;
  
}

function elevar(num, exponent) {
  var potencia = Math.pow(num,exponent);
  return potencia;
  
}

function redondearNumero(num) {
  var redondeo = Math.round(num);
  return redondeo;
  
}

function redondearHaciaArriba(num) {
  var redondeo = Math.ceil(num);
  return redondeo;
  
}

function numeroRandom() {
  var random = Math.random();
  return random;  
}

function esPositivo(numero) {
  if (numero > 0){
    return "Es positivo";
  }
  else if (numero < 0){
    return "Es negativo";
  }
  return false;
}

function agregarSimboloExclamacion(str) {
  var nuevaCadena = str + "!";
  return nuevaCadena;
}

function combinarNombres(nombre, apellido) {
  var nombreApellido = nombre + " " + apellido;
  return nombreApellido;
  
}

function obtenerSaludo(nombre) {
  var saludo = "Hola " + nombre + "!";
  return saludo;
}

function obtenerAreaRectangulo(alto, ancho) {
  var areaRec = alto * ancho;
  return areaRec;  
}


function retornarPerimetro(lado){
  var perimetro = lado * 4;
  return perimetro;  
}


function areaDelTriangulo(base, altura){
  var areaTri = (base * altura) / 2;
  return areaTri;
}


function deEuroAdolar(euro){
  var dolares = euro * 1.20;
  return dolares;  
}


function esVocal(letra){
  if (letra.length === 1) {
    if (letra === "a"){
      return "Es vocal";
    }
    else if (letra === "e"){
      return "Es vocal";
    }
    else if (letra === "i"){
      return "Es vocal";
    }
    else if (letra === "o"){
      return "Es vocal";
    }
    else if (letra === "u"){
      return "Es vocal";
    }
    return "Dato incorrecto";       
  }
  return "Dato incorrecto";
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
