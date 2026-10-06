 let pokemons=[]

  const listaPokemons = document.getElementById("listaPokemons");
  const campoBusca= document.getElementById("campoBusca");
  const botoestipo = document.querySelectorAll(".tipo");

 function buscarPokemons(){
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
 .then(resposta => resposta.json())
 .then(dados=> {
     const lista = dados.results

     const consultas = lista.map(pokemon =>{
         return fetch(pokemon.url)
         .then(resposta => resposta.json())
        })
        Promise.all (consultas)
        .then (resultado =>{
            pokemons = resultado
            mostrarPokemons(pokemons)
            
            
            
        })
    })
}
function mostrarPokemons(lista){
    listaPokemons.innerHTML = ""
    lista.forEach(P=> {
        const card = document.createElement("div")
        
        card.classList.add("card")
        card.innerHTML = `
        <img src="${P.sprites.front_default}" alt="" srcset="">
        <h3>${P.name}</h3>
        <p>${P.id}</p>
        <p>${P.types[0].type.name}</p>
        
        `;
        listaPokemons.appendChild(card);
        
        
        
        
        
    });
}

botoestipo.forEach(b => {
    b.addEventListener("click",function(){
    const tipoSelecionado = b.dataset.tipo  

 if (tipoSelecionado=="todos"){
    mostrarPokemons(pokemons)
    return;  
 }
    const resultado = pokemons.filter(P=>{
      return P.types.some(tipo =>{

      return tipo.type.name == tipoSelecionado;

    }) 
    })

    mostrarPokemons(resultado);
})

});

campoBusca.addEventListener("input",function(){
    const texto =campoBusca.value .toLowerCase()

    const resultado = pokemons.filter(P=>{
        return P.name.includes(texto);

    })
    mostrarPokemons(resultado);
})


 buscarPokemons()























