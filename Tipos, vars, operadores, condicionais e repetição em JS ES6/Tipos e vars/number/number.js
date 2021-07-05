const myNumber = 12.4032;

// Transforma número para str
const numberAsString = myNumber.toString();
console.log("Número transformado em str: ", typeof numberAsString); //typeof = retorna o tipo da var

// Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log("\nNúmero com duas casas decimais: ", fixedTwoDecimals);

// Transforma str em float
console.log("\nString parseada para float:", parseFloat("13.22"));

// Transforma str em int
console.log("\nString parseada para int:", parseInt("13.20"));

// não existe float e nem int no JS, apenas o tipo number