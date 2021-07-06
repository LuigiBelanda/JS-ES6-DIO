/*

switch (expressão) {
    case value:
        break;
    case value2:
        break;
    default:
        break;
}

*/

const fruit = "pera";

switch (fruit) {
    case "banana":
        console.log("R$ 3,00 / Kg")
        break;
    case "pera":
    case "laranja":
    case "abacaxi":
        console.log("R$ 2,00 / Kg")
        break;
    case "uva":
        console.log("R$ 5,00 / Kg")
        break;
    default:
        console.log("Produto não existe no estoque");
        break;
}
