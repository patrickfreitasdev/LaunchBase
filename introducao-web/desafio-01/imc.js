/**
 * Cálculo de IMC
 *
 * Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
 * Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa, por exemplo:
 *
 * const nome = "Carlos";
 * const peso = 84;
 * const altura = 1.88;
 *
 * Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:
 * SE o IMC maior ou igual a 30: Carlos você está acima do peso;
 * SE o IMC menor que 29.9: Carlos você não está acima do peso;
 */

const name = "Fulano";
const weight = 50;
const height = 1.58;

const imc = weight / (height * height);

//console.log(imc);

if (imc >= 30) {
  console.log(`IMC is ${imc}, you are not on the ideal weight`);
} else {
  console.log(`IMC is ${imc}, you are on the ideal weight`);
}
