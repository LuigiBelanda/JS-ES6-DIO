// Retorna o tamanho de uma string
const textSize = "texto".length; // length = quantidade caracteres de uma str
console.log(`Quantidade de letras: ${textSize}`);

// Retorna um array quebrando a string por um delimitador
const splittedText = "texto".split("x");
console.log("\nArray com as posições separadas pelo delimitador: ", splittedText);

// Busca por um valor e substitui por outro
const replacedText = "texto".replace("texto", "TExTO"); // troca uma parte da str por outra
console.log("\nSubstituição de valor: ", replacedText);

// Retorna a "fatia" de um valor
const lastChar = "texto".slice(-1);
console.log("\nÚltima letra de uma str:", lastChar);

const allWithouLastChar = "texto".slice(0, -1); // início - fim
console.log("\nValor da str da primeira menos a última:", allWithouLastChar);

const secondToEnd = "texto".slice(1);
console.log("\nValor da str da segunda letra até a última:", secondToEnd);

// Retorna N caracteres a partir de um posição
const twoCharsBeforeFirstPos = "texto".substr(0, 2); // início - quantidade de caracteres
console.log("\nAs duas primeiras letras são:", twoCharsBeforeFirstPos);
