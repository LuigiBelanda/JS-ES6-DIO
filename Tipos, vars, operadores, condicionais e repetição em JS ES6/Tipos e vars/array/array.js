const users = ["Guilherme", "Luigi", "Ana"];

const gender = {
    MAN: Symbol("M"),
    WOMAN: Symbol("W")
}

const persons = [
    {
        name: "Guilherme",
        age: 20,
        gender: gender.MAN
    },
    {
        name: "Luigi",
        age: 25,
        gender: gender.MAN  
    },
    {
        name: "Ana",
        age: 30,
        gender: gender.WOMAN  
    }
];


// Retorna a quantidade de itens de um array
console.log("Itens:", persons.length);

// Verifica se é um array
console.log("A var persons é um array:", Array.isArray(persons));

// Iterar os itens
persons.forEach(person =>{
    console.log(`Nome: ${person.name}`);
});

// Filtrar o array (imutabilidade - ele não vai mudar nosso array principal, mas vai criar um novo com o filter)
const mens = persons.filter(person => person.gender === gender.MAN);
console.log("\nNova lista apenas com homens:", mens); // array novo com filter
console.log(persons); // array normal ainda

// Retorna um novo array
const personWithCourse = persons.map(person => {
    person.course = "Introdução ao JS";
    return person;
});

console.log("\nPessoas com a adição do course:", personWithCourse);

// Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log("\nSoma da idade das pessoas:", totalAge);
