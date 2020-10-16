const obtenerPokemon = require("./library");


obtenerPokemon('pikachu').then(pokemon => {
    let habilidades = pokemon.abilities.map(abilitie => {
        return abilitie.ability.name
    });
    console.log(`Nombre: ${pokemon.name} \nHabilidades: ${habilidades}`);
});