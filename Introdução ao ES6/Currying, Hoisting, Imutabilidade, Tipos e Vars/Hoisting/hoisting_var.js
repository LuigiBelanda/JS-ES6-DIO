function fn() {
    console.log(text); 
    // como aqui estamos chamando um var antes de atribuir um valor nela
    // ela será "undefined", em outras linguagens provavelmente daria erro essa chamada da var

    var text = "Exemplo";

    // depois de declararmos ela e darmos um valor para ela
    // o seu valor vai ser "Exemplo"
    console.log(text);
}

fn();

