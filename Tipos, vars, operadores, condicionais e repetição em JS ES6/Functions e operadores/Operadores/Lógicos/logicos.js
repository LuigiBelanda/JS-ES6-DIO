// AND lógico (&&)
exp1 && exp2

var a1 = true && true;
var a2 = true && false;
var a3 = false && true;
var a4 = false && (3 == 4);
var a5 = "Gato" && "Cão";
var a6 = false && "Gato";
var a7 = "Gato" && false;

// OU lógico (||)
exp1 || exp2

var a1 = true || true;
var a2 = true || false;
var a3 = false || true;
var a4 = false || (3 == 4);
var a5 = "Gato" || "Cão";
var a6 = false || "Gato";
var a7 = "Gato" || false;

// NOT lógico (!)
!exp1


var n1 = !true;
var n2 = !false;
var n3 = !"Gato";