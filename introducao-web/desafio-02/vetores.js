// Vetores e objetos
// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

// As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

// { nome: 'C++', especialidade: 'Desktop' }
// { nome: 'Python', especialidade: 'Data Science' }
// { nome: 'JavaScript', especialidade: 'Web/Mobile' }
// Por exemplo:

// const objeto = {
//   propriedade: [
//     { nome: "C++", especialidade: "Desktop" },
//     { nome: "JavaScript", especialidade: "Web/Mobile" }
//   ]
// };
// Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

// O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

const objeto = {
  propriedade: [
    { linguagem: "C++", nome: "Carlos", idade: 32, especialidade: "Desktop" },
    {
      linguagem: "Python",
      nome: "Fulano",
      idade: 44,
      especialidade: "Data Science",
    },
    {
      linguagem: "JavaScript",
      nome: "Fulano2",
      idade: 23,
      especialidade: "Web/Mobile",
    },
  ],
};

objeto.propriedade.forEach((usuario) => {
  console.log(
    `O usuário ${usuario.nome} tem ${usuario.idade} anos e usa a tecnologia ${usuario.linguagem} com ${usuario.especialidade}`
  );
});
