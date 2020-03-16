var minhaVar = 'Minha Variavel';
function minhaFunc(x, y) {
    return x + y;
}
//ES 6 OU ES 2015
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; }); //es 2015
var matematica = /** @class */ (function () {
    function matematica() {
    }
    matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return matematica;
}());
var n1 = "sadasdasd";
n1 = 4;
