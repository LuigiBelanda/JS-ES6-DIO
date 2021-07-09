// Criar um array

const arr = [1, 2, 3];
const arr2 = new Array(1, 2, 3);


// ==============================
// ==============================


// Array.of

/* 
O método Array.of() cria um nova instância de Array com um número variável de argumentos, independentemente do número ou do tipo dos 
argumentos.

A diferença entre o Array.of() e o construtor de Array é no tratamento dos argumentos inteiros: Array.of(7) cria um array com um 
único elemento, 7, enquanto Array(7) cria um array vazio de propriedade length igual a 7 (Nota: isso quer dizer um array com 7 
espaços vazios, e não com valores do tipo undefined).
*/

const pessoas = Array.of("Luigi", "Lu", "Lulu");
console.log(pessoas);

const numbersAndStrings = Array.of(1, 2, "Luigi", "Lu");
console.log(numbersAndStrings);


// ==============================
// ==============================


// Array

const arrTeste = Array(7);
console.log(arrTeste); // aqui temos o output de um array com 7 posições vazias, isso só acontece quando passamos apenas um parâmetro do tipo inteiro


// ==============================
// ==============================


// Array.from

/* 
O método Array.from() cria uma nova instância de um Array quando for passado um array-like ou um iterable object como argumento.

Array.from() deixa você criar um Array de:

objetos array-like (objetos com a propriedade length e elementos indexados); ou
Objetos iteráveis (objetos onde você pode coletar seus elementos, assim como Map e Set).
*/

const divs = document.querySelectorAll('div'); // node list
const arrFrom = Array.from(divs); // aqui transformamos a node list em array