/* 
Um closure (fechamento) é uma função que se "lembra" do ambiente — ou escopo léxico — em que ela foi criada.

function init() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  displayName();
}
init();

A função init() cria uma variável local chamada name, e depois define uma função chamada displayName(). displayName() é uma função
aninhada (um closure) — ela é definida dentro da função init(), e está disponível apenas dentro do corpo daquela função. Diferente de 
init(), displayName() não tem variáveis locais próprias, e ao invés disso reusa a variável name declarada na função pai.
*/

function init() {
    const exemplo = "Essa var";

    return function() {
        console.log(`1 - O valor da var como exemplo é: ${exemplo}.`);
        
        return function() {
            console.log(`2 - O valor da var como exemplo é: ${exemplo}.`);
        
            return function() {
                console.log(`3 - O valor da var como exemplo é: ${exemplo}.`);
            }
        }
    }
}

const initFn1 = init();

const initFn2 = initFn1();

const initFn3 = initFn2();

initFn3();

// podemos chamar todas as funções ali de cima da seguinte forma também
// init()()()();