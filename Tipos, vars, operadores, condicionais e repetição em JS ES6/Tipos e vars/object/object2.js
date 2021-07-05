const user = {
    name: "Luigi",
    lastName: "Belanda"
};

// Recupera as chaves do objeto
console.log("Propriedades do objeto user:", Object.keys(user));

// Recupera os valores das chaves dos objeto
console.log("\nValores das propriedades do objeto user:", Object.values(user));

// Retorna um array de arrays contendo [ name_prop, valor_prop]
console.log("\nLista de propriedades e valores:", Object.entries(user));

// Mergear propriedades de objetos
Object.assign(user, {fullName: "Luigi Belanda"});
console.log("\nAdiciona a propriedade fullName no objeto user", user);

console.log("\nRetorna um novo objeto mergeando dois ou mais objetos", Object.assign({}, user, {age: 26})); // aqui primeiro passamos um objeto vazio, onde vamos fazer o merge com oq queremos, assim entramos um pouco no conceito de imutabilidade
console.log(user); // podemos ver que ainda o objeto principal não foi alterado, apenas criamos um novo e ai fizemos o merge

// Previne todas as alterações em um objeto
const newObj = {foo: "bar"};
Object.freeze(newObj); // não deixa fazermos mais nenhuma alteração no objeto

newObj.foo = "changes";
delete newObj.foo;
newObj.bar = "foo";

console.log("\nVar newObj após as alterações:", newObj);

// Permite apenas a alteração de propriedades existentes em um objeto
const person = {name: "Luigi"};
Object.seal(person); // aqui podemos apenas mudar a propriedade name, de resto não podemos criar e nem deletar propriedades

person.name = "Luigi Belanda";
delete person.name;
person.age = 17;

console.log("\nVar person após as alterações:", person);