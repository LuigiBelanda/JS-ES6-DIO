// push

// O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.

const frutas = ["Melancia", "Laranja", "Uva"]

console.log(frutas.push("Abacaxi")); // output = 4 (numero de elementos no array)

console.log(frutas); // output [ 'Melancia', 'Laranja', 'Uva', 'Abacaxi' ]


// ==============================
// ==============================


// pop

// O método pop() remove o último elemento de um array e retorna aquele elemento.

const arrFrutas = ["Melancia", "Laranja", "Uva"];
const removedItem = arrFrutas.pop();

console.log(removedItem); // output = uva (elemento que foi removido)
console.log(arrFrutas); // output = [ 'Melancia', 'Laranja' ] (novo array)


// ==============================
// ==============================


// unshift

// O método unshift() adiciona um ou mais elementos no início de um array e retorna o número de elementos (propriedade length) atualizado.

const arrFrutas2 = ["Melancia", "Laranja", "Uva"];
const arrLength = arrFrutas2.unshift('Abacaxi');

console.log(arrLength); // output = 4 (numero de elementos no array)
console.log(arrFrutas2); // output = [ 'Abacaxi', 'Melancia', 'Laranja', 'Uva' ] (novo array com o "Abacaxi" no começo)


// ==============================
// ==============================


// shift
// O método shift()remove o primeiro elemento de um array e retorna esse elemento. Este método muda o tamanho do array.

const arrFrustas3 = ["Melancia", "Laranja", "Uva"];
const removedItemShift = arrFrustas3.shift();

console.log(removedItemShift); // output = Melancia (elemento que foi retirado)
console.log(arrFrustas3); // output = [ 'Laranja', 'Uva' ] (novo array)


// ==============================
// ==============================


// concat

/*
concat cria um novo array unindo todos os elementos que foram passados como parâmetro, na ordem dada, para cada argumento e seus 
elementos (se o elemento passado for um array).

concat não altera a si mesmo ou a qualquer um dos argumentos passados, apenas providencia um novo array contendo uma cópia de si 
mesmo e dos argumentos passados. Os elementos copiados são:

Referência aos objetos (e não o objeto): concat copia a referência aos objetos para o novo array. Tanto o original quanto a cópia 
apontam para o mesmo objeto. Ou seja, se o objeto foi modificado, tais mudanças serão visíveis no objeto original e no array.

Strings e numbers (diferente dos objetos String e Number): concat copia os valores de strings e numbers para o novo array. Qualquer 
alteração no novo array não refletirá no original, e vice versa.
*/

const pessoas1 = ["Luigi", "Ana", "Laura"];
const pessoas2 = ["João", "Gabriela", "Gustavo"];

const todasPessoas = pessoas1.concat(pessoas2);

console.log(pessoas1); // output = [ 'Luigi', 'Ana', 'Laura' ]
console.log(pessoas2); //  output = [ 'João', 'Gabriela', 'Gustavo' ]
console.log(todasPessoas); // output = [ 'Luigi', 'Ana', 'Laura', 'João', 'Gabriela', 'Gustavo' ]


// ==============================
// ==============================


// slice

/*
O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as posições início e fim (fim não é 
necessário) de um array original. O Array original não é modificado.

slice não altera o array original. Retorna uma cópia de elementos do array original. Elementos do array original são copiados para o 
array retornado da seguinte maneira:

Para referências de objeto (e não o objeto real), slice copia referencias de objeto em um novo array. Ambos, o original e o novo 
array referem-se ao mesmo objeto. Se um objeto referenciado é alterado, as alterações são visíveis em ambos, no novo array e no 
array original.
Para strings e números (não objetos String e Number), slice copia strings e números em um novo array. Alterações na string ou número 
em um array não afetam o outro array.
Se um novo elemento é adicionado a qualquer array, o outro não é afetado.
*/

const arrNum = [1, 2, 3, 4, 5, 6];

console.log(arrNum.slice(0, 2)); // output = [ 1, 2 ]
console.log(arrNum.slice(2)); // output = [ 3, 4, 5, 6 ]
console.log(arrNum.slice(-1)); // output = [ 6 ]
console.log(arrNum.slice(-3)); // output = [ 4, 5, 6 ]


// splice

// O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

const arrNum = [1, 2, 3, 4, 5, 6];

console.log(arrNum.splice(2)); // output = [ 3, 4, 5, 6 ]
console.log(arrNum); // output = [ 1, 2 ]