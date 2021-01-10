const esMayorDeEdad = (edad) => {
    if (edad >= 18) {
        return true
    } else {
        return false
    }
}

console.log (esMayorDeEdad (15));
console.log (esMayorDeEdad (18));
console.log (esMayorDeEdad (27));

