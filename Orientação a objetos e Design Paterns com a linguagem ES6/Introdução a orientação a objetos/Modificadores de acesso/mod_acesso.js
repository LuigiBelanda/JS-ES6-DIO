/*
Privado / Publico

name é privado, ele não é exposto quando chamamos new Person
assim so acessamos ele com o getName e setName
*/

'use strict';

function Person(initialName) {
    let name = initialName;

    this.getName = function() {
        return name;
    }

    this.setName = function(newName) {
        name = newName;
    }
}

const p = new Person('Luigi');

console.log(p);

console.log(p.getName());

// console.log(p.name());

p.setName("Lu");
console.log(p.getName());