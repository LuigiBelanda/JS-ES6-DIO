(() => {
   
    const test = "Valor da função";
    console.log(`Valor dentro de função "${test}"`);

    if (true) {
        const test = "Valor do if"; 
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();