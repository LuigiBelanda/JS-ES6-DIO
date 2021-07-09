// forEach

// O método forEach() executa uma dada função em cada elemento de um array.

const arr = [1, 2, 3, 4, 5];

arr.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});


// ==============================
// ==============================


// map

// O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.

const arr2 = [1, 2, 3, 4, 5];

console.log(arr2.map(value => value * 2));


// ==============================
// ==============================


// flat

// O método flat() cria um novo array com todos elementos sub-arrays concatenados nele de forma recursiva até a profundidade especificada.

const arr3 = [1, 2, [3, 4]];

console.log(arr3.flat());


// ==============================
// ==============================


// flatMap

// O método flatMap() primeiro mapeia cada elemento usando uma função de mapeamento e, em seguida, nivela o resultado em um novo array. É idêntico a um map seguido por um flat de profundidade 1, mas flatMap é bastante útil e mescla ambos em um método um pouco mais eficiente.

const arr4 = [1, 2, 3, 4];

console.log(arr4.flatMap(value => [value * 2]));

console.log(arr4.flatMap(value => [[value * 2]]));


// ==============================
// ==============================


// Keys

// O método keys() retorna um novo Array Iterator que contém as chaves para cada index do array.

const arr5 = [1, 2, 3, 4];

const arrIterator = arr5.keys();

console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());
console.log(arrIterator.next());


// ==============================
// ==============================


// values

// O método values() retorna um novo objeto de  Array Iterator que contém os valores para cada índice no array.

const arr6 = [1, 2, 3, 4];

const arrIteratorValues = arr6.values();

console.log(arrIteratorValues.next());
console.log(arrIteratorValues.next());
console.log(arrIteratorValues.next());
console.log(arrIteratorValues.next());


// ==============================
// ==============================


// entries

// O método entries() retorna um novo objeto Array Iterator que contém os pares chave/valor para cada índice no array.

const arr7 = [1, 2, 3, 4];

const arrIteratorEntries = arr7.entries();

console.log(arrIteratorEntries.next());
console.log(arrIteratorEntries.next());
console.log(arrIteratorEntries.next());
console.log(arrIteratorEntries.next());
