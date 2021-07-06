// funções = objetos que podem ser chamados

// declaração normal de uma função
function fn() {
    return "Code here (function normal)";
}

console.log(fn());


// arrow function - expressão 1
const arrowFn = () => "Code here (arrow function - expressão 1)"; // arrowFn = nome da função / () = parâmetros / => "" return da função

console.log(arrowFn());


// arrow function - expressão 2
const arrowFn2 = () => {
    return "Code here (arrow function - expressão 2)";
}

console.log(arrowFn2());


// funções também são objetos
fn.prop = "Posso criar propriedades";
console.log(fn());
console.log(fn.prop);


// receber parâmetros 
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);


// receber e retornar funções
/*
const controlFnExec => fnParam => allowed => {
    if (allowed) {
        fnParam();
    }
}
*/

const handleFnExecution = controlFnExec(fn);
handleFnExecution(true); // Executará a função fn
handleFnExecution();     // Não executará a função fn 


// controlFnExec como função
function controlFnExec(fnParam) {
    return function (allowed) {
        if (allowed) {
            fnParam();
        }
    }
}