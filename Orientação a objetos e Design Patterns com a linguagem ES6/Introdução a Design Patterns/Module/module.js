/* 
Patterns mais utilizados no JS:
- Factory
- Singleton
- Decorator
- Observer
- Module

(É um pattern que possibilita organizarmos melhor o nosso código, sem a necessidade de expor variáveis globais)
*/


// ==============================
// ==============================


class Person {
    constructor(name) {
        this.name = name;
    }
}

export default Person;

// Utilizar Person
import Person from './models/person';


// ==============================
// ==============================


let name = 'default';

function getName() {
    return name;
}

function setName(newName) {
    return name = newName;
}

module.exports = {
    getName,
    setName
};