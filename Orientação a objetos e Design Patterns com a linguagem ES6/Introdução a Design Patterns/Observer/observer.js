/* 
Patterns mais utilizados no JS:
- Factory
- Singleton
- Decorator
- Observer

(É um pattern muito popular em aplicações JS. A instância (subscriber) mantém uma coleção de objetos (observers) e notifica todos eles quando ocorrem mudanças no estado)

Exemplo: Vue.JS e RxJs

- Module
*/


// ==============================
// ==============================


class Observable {
    // cada instância da classe Observer
    // começa com um array vazio de observadores/observers
    // que reagem a uma mudança de estado
    constructor() {
        this.observables = []; // Lista de observers
    }

    // adicione a capacidade de inscrever um novo objeto / Elemento DOM
    // essencialmente, adicione algo ao array de observadores
    subscribe(fn) {
        this.observables.push(fn); // dar subscribe nos observers
    }

    // adicione a capacidade de cancelar a inscrição de um objeto em particular
    // essencialmente, remove algum item do array de observadores
    unsubscribe(fn) {
        this.observables = this.observables.filter(obs => obs !== fn);
    }

    // atualiza todos os objetos inscritos / Elementos DOM
    // e passa alguns dados para cada um deles
    notify(data) {
        this.observables.forEach(fn => fn(data)); // notifica os observers
    }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify("notified 1");

o.unsubscribe(logData2);

o.notify("notified 2");