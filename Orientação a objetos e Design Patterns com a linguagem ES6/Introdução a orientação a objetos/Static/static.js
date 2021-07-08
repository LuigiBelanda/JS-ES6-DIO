/* 
Static 
- Permite que possamos acessar métodos/atributos sem instanciar uma classe

A palavra-chave static define um método estático de uma classe. Métodos estáticos são chamados sem a instanciação da sua classe e 
não podem ser chamados quando a classe é instanciada. Métodos estáticos são geralmente usados para criar funções de utilidades por 
uma aplicação.

Chamadas a métodos estáticos são feitas diretamente na classe e não podem ser feitas em uma instância da classe. Métodos estáticos 
são comumente utilizados como funções utilitárias.
*/

'use strict';

function Person() {}

Person.walk = function() {
    console.log("Walking...");
}

console.log(Person.walk());


// ==============================
// ==============================


'use strict';

class Person {
    static walk() {
        console.log("Walking...");
    }
}

console.log(Person.walk());