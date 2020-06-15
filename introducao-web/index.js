//Criar um programa que calcula a media
//Das notas do aluno e envia
// mensagem do calculo da media
// Se a media for maior q 5, parabens para turma

const nome = "Patrick";
const notaAluno01 = 9.8;

const nome2 = "Silvana";
const notaAluno02 = 10;

const nome3 = "Fulano";
const notaAluno03 = 2;

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3;

if (media > 5) {
  // Se sim Faz alguma coisa
  console.log(`Parabens Turma, a media foi ${media}`);
} else {
  // Se nao Faz alguma coisa
  console.log(`A media foi ${media}, menor que 5`);
}
