// currying basicamente é técnica que transforma uma função com N parâmetros 
// em apenas 1 função que recebe um parâmetro.

/*
Currying é o processo de transformar uma função que espera vários argumentos em uma função que espera um único argumento e retorna
outra função curried. Por exemplo, uma função que recebe três argumentos, ao sofrer currying, resulta em uma função que recebe um 
argumento e retorna uma função que recebe um argumento, que por sua vez retorna uma função que recebe um argumento e retorna o 
resultado da função original.
*/

function soma(a) {
    return function(b) {
        return a + b;
    }
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));

// na função acima basicamente criamos a função some com argumento "a"
// que por sua vez return uma função com o argumento "b"
// que retorna o valor de "a" + "b"
