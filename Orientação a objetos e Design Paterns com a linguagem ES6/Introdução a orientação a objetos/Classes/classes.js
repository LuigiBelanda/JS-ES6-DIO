/*
Classes
- Criado no ES6
- É uma simplificação da herança de protótipos
- palavra chave: class

Classes em JavaScript são introduzidas no ECMAScript 2015 e são simplificações da linguagem para as heranças baseadas nos 
protótipos. A sintaxe para classes não introduz um novo modelo de herança de orientação a objetos em JavaScript. Classes em 
JavaScript provêm uma maneira mais simples e clara de criar objetos e lidar com herança.

O método constructor é um tipo especial de método para criar e iniciar um objeto criado pela classe. Só pode existir um método 
especial com o nome "constructor" dentro da classe. Um erro de sintáxe SyntaxError será lançado se a classe possui mais do que uma 
ocorrência do método constructor.

Um construtor pode usar a palavra-chave super para chamar o construtor de uma classe pai.

A palavra-chave extends é usada em uma declaração de classe, ou em uma expressão de classe para criar uma classe como filha de uma 
outra classe.

A palavra-chave (keyword) super é utilizada para chamar funções que pertencem ao pai do objeto.
*/

'use strict';

class Animal {
    constructor(qtdePatas) {
        this.qtdePatas = 4;
    }
}

class Cachorro extends Animal {
    constructor(morde) {
        super(4);
        this.morde = 4;
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug);
console.log(pitbull);


// ==============================
// ==============================


'use strict';

class Animal {
    constructor() {
        this.qtdePatas = 0;
    }

    movimentar() {}
}

class Cachorro extends Animal {
    constructor(morde) {
        super();
        this.qtdePatas = 4;
        this.morde = morde;
    }

    latir() {
        console.log("Au! Au!");
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug);
console.log(pitbull);
