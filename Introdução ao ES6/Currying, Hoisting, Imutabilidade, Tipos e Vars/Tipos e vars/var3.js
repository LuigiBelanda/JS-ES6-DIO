(() => {
   
    let test = "Valor da função";
    console.log(`Valor dentro de função "${test}"`);

    if (true) {
        let test = "Valor do if"; 
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após a execução do if "${test}"`);
})();