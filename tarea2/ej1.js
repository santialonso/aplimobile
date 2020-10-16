const obtenerChiste = require("./library");

// Codigo funcion callback
let joke = (element) => element.forEach(element => {
    console.log(`${element.setup} ${element.punchline}`)
}) 

obtenerChiste(joke);