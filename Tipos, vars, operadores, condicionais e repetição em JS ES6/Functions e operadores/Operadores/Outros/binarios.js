// in
something in somethingItems

// Arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores; // Retorna true
3 in arvores; // Retorna true
6 in arvores; // Retorna false
"cedro" in arvores; // retorna false (você deve especificar o número do índice, não o valor naquele índice)
"length" in arvores; // Retorna true (length é um propriedade de Array)

// Objetos predefinidos
"PI" in Math; // Retorna true
var minhaStr = new String("coral");
"length" in minhaStr; // Retorna true

// Objetos personalizados
var meucarro = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meucarro; // Retorna true
"modelo" in meucarro; // Retorna true

// instaceof - verifica se o objeto é a instância de algo
objeto instanceof tipoObjeto

var dia = new Date (2018, 12, 17);

if (dia instanceof Date) {
    // code here
}
