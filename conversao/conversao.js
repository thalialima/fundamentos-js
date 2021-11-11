//**conversão implícita permite que se converta um tipo de dado em outro**
// number to string, string to number

const numero = 456;
const numeroString = '456';

//número é diferente de texto
//compara tipo
console.log(numero === numeroString);

//essa é a conversão implícita
//compara valor
console.log(numero == numeroString);
//outro exemplo de conversão implícita
console.log(numero + numeroString); //456


//**conversão explícita
console.log(numero + Number(numeroString))