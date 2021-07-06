(() => {
    this.name = "Arrow function";

    const getNameArrowFn = () => this.name; 

    function getName() {
        return this.name;
    }

    const user = {
        name: "Nome no objeto de execução",
        getNameArrowFn,
        getName
    }

    // arrow function sempre vai referenciar o escopo em que por exemplo o this.name foi criado, ou seja "Arrow function"
    console.log(user.getNameArrowFn());

    // Por outro lado a função normal referencia apenas o this.name do seu escopo, no contexto em que ela foi criada
    console.log(user.getName());
})();