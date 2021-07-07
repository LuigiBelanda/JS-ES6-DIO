/*
Encapsulamento 
- Serve para ocultar detalhes do funcionamento interno
*/

'use strict';

function Person(initialName) {
    var name = initialName;

    Object.defineProperty(this, 'name', {
        get: function () {
            return name;
        },
        set: function (value) {
            name = value;
        }
    });
}