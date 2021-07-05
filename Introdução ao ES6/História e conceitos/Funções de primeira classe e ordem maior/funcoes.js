function getName() {
    return "Luigi Belanda";
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);

// Funções de primeira classe e ordem maior
// Basicamente, função de primeira é uma função que pode ser atribuída
// em uma var, ela pode ser atribuída a uma estrutura de dados, pode ser 
// passada por argumentos e até retornada por outras funções