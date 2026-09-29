const formulario =document.getElementById("formulario");

const nome = document.getElementById("nome");
const nascimento = document.getElementById("nascimento");


formulario.addEventListener("submit",function(event){
    event.preventDefault();//impede que a tela recarregue

    //pagar o valor dos inputs
  const valornome = nome.value;
const valornascimento = nascimento.value;

console.log(valornome);
console.log(valornascimento);

// separa a data em 3 valores
const datasepara = valornascimento.split("-");
console.log(datasepara);
}) 

