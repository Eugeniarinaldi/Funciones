
const calcularPorcentaje = (numero, porcentaje) => {
    return numero * porcentaje/100;
}

const sumarPorcentaje = (numero, porcentaje) => {
    return numero + calcularPorcentaje (numero, porcentaje)
}

console.log (sumarPorcentaje(100, 15)); // 115
console.log (sumarPorcentaje(10, 50)) // 15
console.log (sumarPorcentaje(200, 10)) // 220
