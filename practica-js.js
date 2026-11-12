console.log("JavaScript listo para practicar");

/* FUNCION QUE CALCULA EL TOTAL DE UNA COMPRA */
function calcularTotal(precio, cantidad) {
  const totalProducto = precio * cantidad;
  return totalProducto;
}   

/* FUNCION QUE SUMA DOS NUMEROS */
function sumar(a, b) {
  const totalSuma = a + b;
  return totalSuma;
}

/* FUNCION QUE RESTA DOS NUMEROS */
function restar(a, b) {
  const totalResta = a - b;
  return totalResta;
}



/* LLAMADA A LA FUNCIONES IMPLEMENTADAS */
const resultadoProducto = calcularTotal(50000, 3);
console.log("resultado de Multiplicar 50000 por 3: ", resultadoProducto); 

const resultadoSuma = sumar(10, 5);
console.log("Resultado de la SUMA: 10 + 5 = ", resultadoSuma);

const resultadoResta = restar(25, 15);
console.log("Resultado de la RESTA: 25 - 15 = ", resultadoResta);