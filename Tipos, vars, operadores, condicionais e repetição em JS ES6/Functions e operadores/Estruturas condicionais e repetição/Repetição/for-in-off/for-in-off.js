let arr = [3, 5, 7];
arr.foo = "hello";

/*
 laço for…in “interage sobre propriedades enumeradas de um objeto, na ordem original de inserção”. Na prática, isso significa que o 
 laço enxerga as propriedades e não os seus valores.
*/
for (let i in arr) {
    console.log(i); 
}

/*
O laço for…of itera os valores das propriedades (neste caso), enquanto o laço for…in itera as propriedades. 
*/
for (let i of arr) {
    console.log(i);  // executa apenas para as propriedades enumeradas
}

/*
Os laços for…of e for…in apesar de serem bem parecidos, fazem coisas distintas. Enquanto o primeiro procura dentro da estrutura pela 
propriedade [Symbol.iterator] que define como ela deve ser iterada, o segundo itera pelas propriedades enumeradas do objeto. Os 
objetos iteráveis por definição no JavaScript já descrevem a propriedade para que ela exiba os seus valores (ex: Map, Set, Array), 
mas em qualquer outro tipo de estrutura essa decisão fica por conta do desenvolvedor.
*/