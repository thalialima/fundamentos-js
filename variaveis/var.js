// var

var altura = 5;
var comprimento = 7;

// não é necessário declarar a variável área pois o node já faz isso
// porém é boa prática fazê-lo
area = altura * comprimento;

console.log(area);

// com var é possival começar a usar a variáveis antes de declará-las
// pois o js carrega elas primeiro
// isso pode causar problemas
var area;

// hoje em dia a var não é mais utilizada comumente, pois é muito propensa a bugs