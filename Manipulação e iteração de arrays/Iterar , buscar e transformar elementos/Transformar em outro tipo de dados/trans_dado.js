// join 

// O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.

const arr = [1, 3, 2, 5, 4];

console.log(arr.join('-'));


// ==============================
// ==============================


// reduce

// Retorna um novo tipo de dado iterando cada posição de um array

const arr2 = [1, 2, 3, 4, 5];

console.log(arr2.reduce((total, value) => total += value, 0));