console.log("JavaScript listo para practicar");

/* FUNCION QUE CALCULA EL TOTAL DE UNA COMPRA */
function calcularTotal(precio, cantidad) {
  const totalProducto = precio * cantidad;
  return totalProducto;
}   


/* LLAMADA A LA FUNCIONES IMPLEMENTADAS */
const resultadoProducto = calcularTotal(50000, 3);
console.log("resultado de Multiplicar 50000 por 3: ", resultadoProducto); 