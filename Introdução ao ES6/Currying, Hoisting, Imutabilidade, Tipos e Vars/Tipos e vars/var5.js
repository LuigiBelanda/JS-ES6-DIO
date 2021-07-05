const name = "Luigi";

// Não podemos alterar o valor
// name = "Guilherme"; - vai dar erro

// console.log(name); - vai dar erro esse console 

const user = {
    name: "Luigi"
};

// se for um objeto, podemos mudar suas propriedade
user.name = "Lu";

console.log(user);

// Não podemos fazer o objeto "apontar" para outro lugar
/*
user = {
    name:"Lu2"
};
*/

const persons = ["Guilherme", "Luigi", "Jennifer"];

// Podemos add novos itens
persons.push("João");
console.log(persons);

// Podemos remover algum item
persons.shift();
console.log(persons);

// Podemos alterar diretamente
persons[1] = "James";
console.log(persons);

// Mas não podemos fazer isso por exemplo
// persons = []

console.log("\nArray após as alterações: ", persons)