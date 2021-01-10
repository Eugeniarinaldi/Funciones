const aceptaDeposito = (monto) => {
    if (monto % 10 == 0){
        return true
    } else {
        return false
    }
}

console.log (aceptaDeposito (440));
console.log (aceptaDeposito (123));
console.log (aceptaDeposito (500.50));
console.log (aceptaDeposito (1000));