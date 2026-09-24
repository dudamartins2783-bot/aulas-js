// "Uva"
// "Banana"
// "Amora"
// "Melancia"
// "kiwi"
// "Abacate""
// //            0      1        2       3        4
// let frutas=["Uva","Banana","Amora","Melancia","kiwi","Abacate"];
// console.log(frutas[0]);//motra a linha completa na mesma linha
// console.log(frutas[2]);//mostra o item da posicao mencionado entre colchete

// console.log(frutas.length);//Mostra o tamanho do array


// "São caetano do sul"
//  "Rio de janeiro"
//  "Belém"
//  "Porto Alegre"
// "São Paulo"
// //                0                       1            2       3               4
// let cidades=["São caetano do sul","Rio de janeiro", "Belém","Porto Alegre","São Paulo"];
// console.log(cidades);//motra a linha completa na mesma linha
// cidades[1] ="Suzano";//altera o valor da posiçao espesifica
// console.log(cidades[1]);//mostra o item da posição mencinado entre colchete

// console.log(cidades.length);//Mostra o tamanho do array

// let cidades =["São paulo", "santo Andre" ,"São caetano"]
// console.log(cidades[0]);
// console.log(cidades[1]);
// cidades.log(cidades[2]);
// cidades.log(cidades[3]);
// cidades.log(cidades[4]);
// for (let index = 0; index <3.; index++) {
//     console.log(cidades[index]);
    
// }for (let index = 0; index < cidades.length; index++) {
//     confirm.log(cidades[index]);
    
// }

// let nomes=["duda", "cris", "silvia", "julia" ,"Helena", "eduarda", "Maitê "]

// console.log(nomes[0]);
// console.log(nomes[1]);
// console.log(nomes[2]);
// console.log(nomes[3]);
// console.log(nomes[4]);
// console.log(nomes[5]);

// for (let index = 0; index <5.; index++) {
//     console.log(nomes[index]);
    
// }
// for (let index = 0; index < nomes.length; index++) {
//     console.log(nomes[index]);
    
// }


// let preços= [50,90,20,30,10];

// for (let index = 0; index < preço.length; index++) {
//     console.log (preço[index]);
    
// }

// let preços =[22,19,56,87,67];
// //               0         1        2        3        4
// let produtos=["camiseta","saia", "calça", "meia","batom"]

// for (let index = 0; index < preços.length; index++) {
//  console.log(preços[index]);
    
// }
// for (let index = 0; index < produtos.length; index++) {
//     console.log(produtos[index]);
    
// }

// //
// for (let index = 0; index <=10; index++) {//contador de 0 a 10
   

// if (index >=5) {//verificandose é maior ou igual a 5
//     console.log(index)//motra o número
// }
// }
  
// let numero =[5,10,2,20,12,7,17,9,12]
// for (let index = 0; index < número.length; index++) {//lendo o array} 
    
    
//     if (número [index]>=10) {//contador de 0 a 10 
    
// }
// }


// let numero =[5,10,2,20,12,7,17,9,12]
// for (let index = 0; index < numero.length; index++) {//lendo o array} 
//     let sobra=numero[index]%2
    
//     if (sobra==0) {
//         console.log("o numero"+numero [index]+"é par");
//     } else {
//         console.log("o numero"+numero[index]+"é impar");
//     }
// }
let nota=[10,8,7,9,3,6,4,2]
for (let index = 0; index < nota.length; index++) {//lendo o array} 
    if (nota[index]>=7) {
        console.log(nota[index]+ " Aprovado ")
    } else {
        console.log(nota[index]+ " Reprovato ")
    }
}
 
let temperatura=[18,26,31,17,33,21,32,12]
 for (let index = 0; index < temperatura.length; index++) {
    if (temperatura[index]>=30) {
        console.log(temperatura[index]+" temperatura Alta ");
    }else if (temperatura[index]>=20 && temperatura[index]>=30 ) {
        console.log(temperatura[index]+"")
    }    
    else { 
        console.log(temperatura[index]+" temperatura Baixo ")
    }
    
 }

