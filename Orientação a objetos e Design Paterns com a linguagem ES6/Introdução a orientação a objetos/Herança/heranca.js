/*
Herança 
- Baseada em protótipos
- prototype (var que armazena as definições de nosso objeto)
- __proto__ (toda vez que a gente cria uma var no JS ela tem essa referência (__proto__) que aponta pro prototype do tipo que a gente criou)
- constructor
*/

'use strict';

const myText = 'Hello prototype';

// myText.split('');
console.log(myText.split('')); // <- de onde vem esse split


// ==============================
// ==============================


'use strict';

const myText = String('Hello prototype');
// Estou usando a função construtora String, onde toda função construtora tem um prototype atrelado a ela
// E toda vez que eu crio uma var a partir de uma função construtora eu tenho a referencia do __proto__ 

console.log(myText.__proto__.split);
// f split () { [native code] }


// ==============================
// ==============================


'use strict';

console.log(String.prototype.split);
// f split () { [native code] }


// ==============================
// ==============================


'use strict';

const myText = String('Hello prototype');

console.log(myText.__proto__.split === String.prototype.split); // True


// ==============================
// ==============================


'use strict';

const myText = String('Hello prototype');

console.log(myText.__proto__.split === String.prototype.split); // True

console.log(myText.constructor === String); // True



// ==============================
// ==============================


// __proto__ -> prototype -> constructor

/*

const myText = 'Hello prototype';

myText.constructor -> String
myText.__proto__ -> String.prototype

*/


// ==============================
// ==============================


'use strict';

function Animal() {};

console.log(Animal.constructor);

// Animal.constructor -> function -> Function.prototype.constructor -> object() {} -> object.prototype = null;


// ==============================
// ==============================


'use strict';

function Animal() {
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.qtdePatas); // 4

/*
Oq acontece quando chamamos uma função construtora usando o "NEW"?

new Foo(...);

1 - Um novo objeto é criado, herdando Foo.prototype
2 - A função construtora Foo é chamada com os argumentos especificados e com o "this" vinculado ao novo objeto criado
3 - Caso a função construtora tenha um retorno explícito, será respeitado o seu "return". Se não, será retornado o objeto criado no passo 1
*/


// ==============================
// ==============================


function Pessoa1(name) {
    this.name = name;
}

const p = new Pessoa1 ('Luigi');

function Pessoa2(name) {
    this.name = name;

    return {
        name: "teste"
    }
}

const p2 = new Pessoa2 ('Lu');

console.log(p); // Pessoa { name: 'Luigi' }
console.log(p2); // { name: 'teste' } - aqui ocorre oq falamos no 3º ponto do texto anterior


// ==============================
// ==============================


'use strict';

function Animal() {
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.__proto__ === Animal.prototype) // True


// ==============================
// ==============================


'use strict';

function Animal() {
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.__proto__ === Animal.prototype) // True

console.log(Animal.__proto__ === Function.prototype) // True


// ==============================
// ==============================


'use strict';

function Animal() {
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro instanceof Animal) // True

console.log(cachorro instanceof Function) // False


// ==============================
// ==============================


'use strict';

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
}

function Cachorro(morde) {
    Animal.call(this, 4); // call - permite que passamos um contexto para a função ser chamada

    this.morde = morde;
}

const pug = new Cachorro(false);

console.log(pug);


// ==============================
// ==============================


'use strict';

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
    this.movimentar = function() {};
}

function Cachorro(morde) {
    Animal.call(this, 4); 

    this.morde = morde;
    this.latir = function() {
        console.log("Au! Au!");
    }
}

const pug = new Cachorro(false);
const putbull = new Cachorro(true);

console.log(pug);
console.log(putbull);


// ==============================
// ==============================


'use strict';

function Animal() {}

Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function() {}

function Cachorro(morde) {
    this.qtdePatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function() {
    console.log("Au! Au!")
}

const pug = new Cachorro(false);
const putbull = new Cachorro(true);

console.log(pug);
console.log(putbull);