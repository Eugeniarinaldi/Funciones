const calcularPuntaje = (facil, normal, dificil) => {
    const ejercicioUno = facil * 3;
    const ejercicioDos = normal * 5;
    const ejercicioTres = dificil * 10;
    return ejercicioUno + ejercicioDos + ejercicioTres;
}

const resultado = calcularPuntaje (3, 0, 0);
console.log (resultado);

