// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return (array[0]);
}


function devolverUltimoElemento(array) {
  return (array[array.length -1]);
}


function obtenerLargoDelArray(array) {
  return (array.length);
}


function incrementarPorUno(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i] + 1;
  } return (array);
}   


function agregarItemAlFinalDelArray(array, elemento) {
  array.push(elemento);
  return (array);
}


function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento);
  return (array);
}


function dePalabrasAFrase(palabras) {
  return (palabras.join(' '));
}


function arrayContiene(array, elemento) {
  return array.includes(elemento);
}


function agregarNumeros(numeros) {
  var acumulador = 0
  for (var i = 0; i < numeros.length; i++){
    acumulador = acumulador + numeros[i];
  } return acumulador;
}


function promedioResultadosTest(resultadosTest) {
  var promedio = 0
  for (var i = 0; i < resultadosTest.length; i++){
    promedio = promedio + resultadosTest[i];
  } return (promedio / resultadosTest.length);
}


function numeroMasGrande(numeros) {
  var mayor = 0
  for (var i = 0; i < numeros.length; i++){
    if (mayor < numeros[i]){
      mayor = numeros[i];
    }
  } return mayor;
}


function multiplicarArgumentos() {
  var producto = 1
  if (arguments.length === 0){
      return 0;
    } else if (arguments.length === 1){
      return arguments[0];
    }
  for (var i=0; i < arguments.length; i++){
    producto = producto * arguments[i];
  } return producto;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador = 0;
  for (var i=0; i<arreglo.length; i++){
    if (arreglo[i] > 18){
      contador = contador + 1;
    }
  } return contador;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
  if (numeroDeDia === 1 || numeroDeDia === 7){
    return 'Es fin de semana'
  } return 'Es dia Laboral'; 
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if (parseInt(String(n)[0]) === 9){
    return true;
  } return false;
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var acumulador = arreglo[0]
  for (var i = 1; i < arreglo.length; i++){
    if (acumulador === arreglo[i]){
      return true;
    }
  }return false;
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = []
  for (var i = 0; i < array.length; i++){
      if (array[i] === 'Enero'){
        nuevoArray.push("Enero");
      } else if (array[i] === 'Marzo'){
                nuevoArray.push("Marzo");
        } else if (array[i] === 'Noviembre'){
                   nuevoArray.push("Noviembre");
        }
    }
  if (nuevoArray.length === 3){
    return nuevoArray;
  } return "No se encontraron los meses pedidos";
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var nuevoArray = []
  for (var i=0; i < array.length; i++){
    if (array[i] > 100){
      nuevoArray.push(array[i]);
    }
  } return nuevoArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var nuevoArray = []
  var i = 0;
  for (var i = 0; i < 10; i++){
    numero = numero + 2;
    nuevoArray.push(numero);
    if (numero === i){
        return 'Se interrumpió la ejecución';
        break;
    }    
  } return nuevoArray
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var nuevoArray = []
  var i = 0;
  for (var i = 0; i < 10; i++){
    if (i === 5){
      continue;
    }  
    numero = numero + 2;
    nuevoArray.push(numero);
    } return nuevoArray
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
