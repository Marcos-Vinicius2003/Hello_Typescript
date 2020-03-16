var minhaVar = 'Minha Variavel';

function minhaFunc(x, y) {
    return x + y;
}

//ES 6 OU ES 2015
let num = 2;
const PI = 3.14;

var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(valor => return valor * 2) //es 2015

class matematica {
    soma(x, y) {
        return x + y;
    }
}

var n1 = "sadasdasd";
n1 = 4;