/* 
Patterns mais utilizados no JS:
- Factory
- Singleton

(O objetivo desse pattern é criar uma única instância de uma função construtora e retorná-la toda vez em que for necessário utilizá-la)

Exemplo: JQUERY

- Decorator
- Observer
- Module
*/


// ==============================
// ==============================


var SETTINGS = {
    api: "http://localhost",
    trackJsToken: "12345"
}


// ==============================
// ==============================


function MyApp() {
    if (!MyApp.instance) {
        MyApp.instance = this;
    }

    return MyApp.instance;
}


// ==============================
// ==============================


function Pessoa() {
    if (!Pessoa.instance) {
        Pessoa.instance = this;
    }

    return Pessoa.instance;
}

const p = Pessoa.call({ name: "Luigi" });
const p2 = Pessoa.call({ name: "Lu"});

console.log(p);
console.log(p2); // depois de instanciar mesmo que passamos outro name ele não irá mudar, pois já foi instanciado