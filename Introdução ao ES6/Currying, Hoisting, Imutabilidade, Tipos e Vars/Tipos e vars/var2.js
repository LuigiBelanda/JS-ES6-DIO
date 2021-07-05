var test = "exemple";

(() => {
    // var test; (por conta do hoisting é como se essa linha de código existisse)
    // por isso ele mostra o valor como "undefined" mesmo criando a var test
    // antes da função, ai entramos na questão de escopo do var, let e const
    console.log(`Valor dentro de função "${test}"`);

    if (true) {
        var test = "exemple";
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();