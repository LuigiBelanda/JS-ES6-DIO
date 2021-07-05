/*
O tipo de dados "symbol" é qualificado como um primitivo, onde valores desse tipo podem ser usados para fazer propriedades de objetos 
anônimos. Ele pode ser usado como chave de uma propriedade de objeto quando este tem a intenção de ser privada, para uso interno da 
classe ou do tipo do objeto em questão. Como exemplo, chaves do tipo symbol existem em vários objetos internos do JavaScript. Da 
mesma forma, pode-se construir classes que tenham membros privados usando essa técnica.

Um valor do tipo de dados "symbol" pode ser referenciado como um "valor symbol". Em JavaScript, um valor symbol é criado através da 
função Symbol(), que dinamicamente produz um valor único e anônimo. A única utilização sensata para para essa construção é 
armazená-la em uma variável que será utilizada como chave para uma propriedade de objeto cujo objetivo é torná-lo anônimo.
*/

const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols são únicos 
console.log("symbol1 é igual a symbol2: ", symbol1 === symbol2);

// Previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol("name");
const nameSymbol2 = Symbol("name");

const user = {
    [nameSymbol1]: "Luigi",
    [nameSymbol2]: "Lu",
    lastName: "Belanda"
}

console.log(user);

// Symbols criam propriedades que não são enumberables
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}

console.log("Propriedades do objeto user:", Object.keys(user));
console.log("Valores das propriedades do objeto user:", Object.values(user));

// Exibir symbols de um objeto 
console.log("Symbols registrados no objeto user:", Object.getOwnPropertySymbols(user));

// Acessando todas as propriedades do objeto
console.log("Todas as propriedades do objeto user:", Reflect.ownKeys(user));

// Criar um enum
const directions = {
    UP     : Symbol("UP"),
    DOWN   : Symbol("DOWN"),
    LEFT   : Symbol("LEFT"),
    RIGHT  : Symbol("RIGHT")
}