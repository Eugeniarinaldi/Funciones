const calcularFPS = (fps, minutos) => {
    return fps * minutos * 60 ;
}

console.log (calcularFPS (1, 1));
console.log (calcularFPS (10, 2));
console.log (calcularFPS (2,3));


/* Retorno implicito
const calcularFps = (fps, minutos) => fps * minutos * 60;

*/

