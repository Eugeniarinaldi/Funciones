const generarEmail = (usuario, dominio) => {
return `${usuario}@${dominio}.com`;
}

const resultado = generarEmail ('adalovelace', 'gmail');

console.log(resultado);

