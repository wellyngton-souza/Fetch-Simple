let botao = document.querySelector("button");
let spaceResposta = document.querySelector("span");

const BuscarApi = async () =>{
    try {
        let pokemonSelect = document.querySelector("input").value;
        let url = `https://pokeapi.co/api/v2/pokemon/${pokemonSelect.toLocaleLowerCase()}`;
        let resposta = await fetch(url);
        resposta = await resposta.json();
        return resposta;
    } catch (error) {
        console.log(error);
    }
}

botao.addEventListener("click",async ()=>{
    let buscar = await BuscarApi();

    let name = buscar?.name || "Aprenda a digitar o nome de um pokemon";
    let imgpokemon = buscar?.sprites?.front_default || "";

    spaceResposta.innerHTML = `<p>${name} <img src=${imgpokemon}></img></p>`
});