// contendrán todos los esquemas
const mongoose = require('mongoose')


//aqui debe estar nuestro schema 
const JokeSchema = mongoose.Schema({ //_id se agrega por defecto
    setup : String,
    punchline : String
})

//y tambien debe estar nuestro modelo que debe ser exportado

//cada archivo en js viene a ser un modulo y hay que exportarlo
module.exports= mongoose.model("broma",JokeSchema);




