class YO{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }

    presentarse(){
        return "hola mi nombre es "+ this.nombre+" tengo "+ this.edad+" años";
    }

}

var persona=new YO("Santiago","25");

console.log(persona.presentarse());