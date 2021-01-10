const haceFrio = (temperatura) => {
    if (temperatura <= 12){
    return true 
    }   else  {
        return false
    }
}

console.log (haceFrio (12));
console.log (haceFrio (22));
console.log (haceFrio (3));
console.log (haceFrio(-2));