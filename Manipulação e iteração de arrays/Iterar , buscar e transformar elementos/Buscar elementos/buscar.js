// find

// O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.

const arr = [1, 2, 3, 4];

const arrFind = arr.find(value => value > 2);

console.log(arrFind);


// ==============================
// ==============================


// findIndex

// O método findIndex() retorna o índice no array do primeiro elemento que satisfizer a função de teste provida. Caso contrário, retorna -1, indicando que nenhum elemento passou no teste.

const arr2 = [1, 2, 3, 4];

const arrFindIndex = arr2.findIndex(value => value > 2);

console.log(arrFindIndex);


// ==============================
// ==============================


// filter 

// O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.

const arr3 = [1, 2, 3, 4];

const arrFilter = arr3.filter(value => value > 2);

console.log(arrFilter);


// ==============================
// ==============================


// indexOf 

// O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.

const arr4 = [1, 3, 3, 4, 3];

const arrIndexOf = arr4.indexOf(3);

console.log(arrIndexOf);


// ==============================
// ==============================


// lastIndexOf 

// O método lastIndexOf() retorna o ultimo índice que um certo elemento pode ser encontrado no array, ou -1 se o elemento não estiver presente. O array é pesquisado de trás para frente, começando pelo fromIndex.

const arr5 = [1, 3, 3, 4, 3];

const arrlastIndexOf = arr5.lastIndexOf(3);

console.log(arrlastIndexOf);


// ==============================
// ==============================


// includes

// O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.

const arr6 = [1, 3, 3, 4, 3];

const arrInclude1 = arr6.includes(1);
const arrInclude2 = arr6.includes(2);

console.log(arrInclude1);
console.log(arrInclude2);


// ==============================
// ==============================


// some

// O método some() testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false.

const arr7 = [1, 3, 3, 4, 3];

const arrSome = arr7.some(value => value % 2 === 0);

console.log(arrSome);


// ==============================
// ==============================


// every

// O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida.

const arr8 = [1, 3, 3, 4, 3];

const arrEvery = arr8.every(value => value % 2 === 0);

console.log(arrEvery);