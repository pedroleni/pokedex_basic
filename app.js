
const pokemonContainer =document.querySelector('.pokemon-container')
const  fetchPokemon= async (id)=>{

    const rawPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const jsonPokemon = await rawPokemon.json();
    const pokemon = jsonPokemon;
    createPokemon(pokemon)
    //fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    //.then((res) => res.json())
   // .then((data) => {
     // createPokemon(data);});
}

const fetchPokemon2 =(number) =>{
    for (let i=1; i<= number; i++ ){
        fetchPokemon(i)
    }
}

function createPokemon(pokemon) {
    
    const card = document.createElement("div");
    card.classList.add("pokemon-block");

    const spriteContainer = document.createElement("div");
    spriteContainer.classList.add("img-container");

    const sprite = document.createElement("img");
    sprite.classList.add("imgPokemon")

    sprite.src = pokemon.sprites.other.dream_world.front_default;

    spriteContainer.appendChild(sprite);

    const number = document.createElement("p");
    number.classList.add("number")
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement("p");
    name.classList.add("name");
    name.textContent = pokemon.name;

    const  attack = document.createElement("p");
    attack.classList.add("Attack");
    attack.innerHTML = `<p><span>Attack: </span>${pokemon.stats[2].base_stat}</p>`

    const  attack_special = document.createElement("p");
    attack_special.classList.add("AttackSpecial");
    attack_special.innerHTML = `<p><span>Attack special: </span>${pokemon.stats[4].base_stat}</p>`

    const speed = document.createElement("p");
    speed.classList.add("speed");
    speed.innerHTML = `<p><span> Speed: </span>${pokemon.stats[5].base_stat}</p>`

    card.appendChild(spriteContainer);
    card.appendChild(name);
    card.appendChild(number);
    card.appendChild(attack);
    card.appendChild(attack_special);
    card.appendChild(speed);



    pokemonContainer.appendChild(card);
}
fetchPokemon2(151);
