/* 
Patterns mais utilizados no JS:
- Factory

(Todas as funções que retornam um objeto, sem a necessidade de chama-lás com o new, são consideradas funções factory(fábrica))

- Singleton
- Decorator
- Observer
- Module
*/


// ==============================
// ==============================


// EX DE NÃO FACTORY

function FakeUser() {
    this.name = "Luigi";
    this.lastName = "Belanda";
}

// Não é Factory
const user = new FakeUser();
console.log(user);


// ==============================
// ==============================


// EX DE FACTORY

function FakeUser() {
    return {
        name: "Luigi",
        lastName: "Belanda"
    }
}

// Factory
const user = FakeUser();
console.log(user);


// ==============================
// ==============================


// EX DE FACTORY (COM ARGUMENTOS)

function FakeUser(name) {
    return {
        name,
        lastName: "Belanda"
    }
}

// Factory - argumento
const user = FakeUser("Luigi");
console.log(user);


// ==============================
// ==============================


// EX DE FACTORY (customProprities)

function FakeUser(customProprities) {
    return {
        name: "Luigi",
        lastName: "Belanda",
        ...customProprities
    }
}

// Factory - argumento (customProprities)
const user = FakeUser({name: "Lu", age: 17});
console.log(user);