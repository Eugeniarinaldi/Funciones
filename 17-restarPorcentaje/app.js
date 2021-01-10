const calcularPorcentaje = (numero, porcentaje) => {
    return numero * porcentaje/100;
}

const restarPorcentaje = (numero, porcentaje) => {
    return numero - calcularPorcentaje (numero, porcentaje)
}


console.log (restarPorcentaje(100, 15)); // 85
console.log (restarPorcentaje(10, 40)) // 6
console.log (restarPorcentaje(200, 10)) // 180