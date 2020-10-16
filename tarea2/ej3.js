const obtenerPokemon = require("./library");

// Codigo funcion callback


  function datos (pokemon){
     console.log("Pokemon name " + pokemon.name);
      console.log("Abilities ");
      pokemon.abilities.forEach(ab => {
          console.log(ab.ability.name)
      });
   };