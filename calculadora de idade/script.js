const formulario = document.getElementById("formulario");
const nome = document.getElementById("nome");
const nascimento = document.getElementById("nascimento");


const nomeResultado = document .getElementById("nomeResultado");
const dataResultado = document .getElementById("dataResultado");
const idadeResultado = document .getElementById("dataResultado");
const  boxResultado = document .getElementById("resultado");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();//impede que a tela recarregue

  //pagar o valor dos inputs
  const valornome = nome.value;
  const valornascimento = nascimento.value;

  console.log(valornome);
  console.log(valornascimento);

  // separa a data em 3 valores
  const datasepara = valornascimento.split("-");
  console.log(datasepara);

//Armazena as datas separata em forma numerico
 const anonascimento = Number (datasepara[0]);
 const mesnascimento = Number (datasepara[1]);
 const dianascimento = Number (datasepara[2]);
 
 //console.log(anonacimento);
 
 const hoje =new Date ();

 const anoatual = hoje.getFullYear ();//pega somente o ano
 const  mesatual = hoje.getMonth()+ 1 ; // paga somente o mes
 const  diaatual = hoje.getDate(); // paga o dia

 console.log(hoje);
 console.log(anoatual);
 console.log(mesatual); 
 console.log(diaatual);

 let idade = anoatual - anonascimento;

 //console.log(idade) 

 if (mesnascimento > mesatual ){
  idade = idade - 1;
  }
 console.log(idade);

 if (mesatual==mesnascimento && diaatual< diaatual) {
  
 } else {
  console.log(idade=idade);

 }
 
  const dataformada = dianascimento + "/" + mesnascimento + "/" +  anonascimento 
  
  //Inserindo os valores nos elementos HTML
  nomeResultado.textContent = valornome;
  dataResultado.textContent = dataformada;
  idadeResultado.textContent = idade;
  // Exibindo o elentos com a imformação
  boxResultado.style.display =  "block";



})





