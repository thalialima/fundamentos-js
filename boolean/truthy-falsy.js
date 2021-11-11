// boolean
const usuarioLogado = true
const contaPaga = false

// truthy false
// não são boolen mas podem fazer esse papel

// 0 => false
console.log(0 == false)
console.log('' == false)

// 1 => true
console.log(1 == true)

// null (vazio)
// foi construído como um objeto
// não pode ser alterado para não quebrar códigos existentes

let variavel;
let varNull = null;

console.log(variavel);
console.log(varNull);

let numero = 3;
let texto = 'Thalia';

console.log(typeof numero);
console.log(typeof texto);
console.log(typeof variavel);
console.log(typeof varNull);