
//Pegar os elementos no html

const formulario = document.getElementById("formulario")


const nome = document.getElementById("nome");
const peso= document.getElementById("peso");
const altura = document.getElementById("altura");


const nomeResultado = document.getElementById("nomeResultado")
const pesoResultado = document.getElementById("pesoResultado")
const alturaResultado = document.getElementById("alturaResultado")
const boxResultado = document.getElementById("imcResultado")
const classificação = document.getElementById("classificacao")
const resultado= document.getElementById("resultado")


formulario.addEventListener("submit", function(event){
    event.preventDefault();//Impede que a tela recarregue


 //Pegar o valor dos inputs
 const valorNome = nome.value;
 const valorPeso= Number(peso.value);
 const valorAltura= Number(altura.value);


//Calculando o imc
const imc = valorPeso / (valorAltura * valorAltura);


let resultadoimc
if (imc < 18.5) {
    resultado = "Abaixo do peso"
} else if (imc < 25){
    resultadoimc = "Peso adequado"
}else if (imc < 30){
    resultadoimc = "Sobrepeso"
}else {
    resultadoimc = "Obesidade"
}


//Inserindo os valores nos elementos HTML
nomeResultado.textContent = valorNome;
pesoResultado.textContent = valorPeso;
alturaResultado.textContent = valorAltura;
boxResultado.textContent = imc.toFixed(2)
classificação.textContent = resultadoimc;




//Exibindo o elemento com as informações
resultado.style.display = "block";




})


































