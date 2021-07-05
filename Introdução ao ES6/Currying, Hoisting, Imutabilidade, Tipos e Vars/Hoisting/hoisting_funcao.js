function fn() {
    log("Hoisting de função");

    function log(value) {
        console.log(value);
    }
}

fn();

// por conta do hoisting podemos chamar uma função antes mesmo de 
// criar ela, igual no exemplo assim