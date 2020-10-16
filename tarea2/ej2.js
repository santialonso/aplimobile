const requestPromise = require("request-promise");
const { get } = require("request-promise");
const obtenerChiste = require("./library");
obtenerChiste().then((response) =>{
    console.log (response);
    console.log('correcto');
  }).catch((error) => {
      console.log('error');
  });