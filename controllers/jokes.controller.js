const { count } = require('../models/jokes.model');
const Broma = require('../models/jokes.model')

//TODA la logica para crear, recuperar, actualizar, eliminar CRUD
//mantendrán toda la lógica para cada modelo (es decir, crear, actualizar, etc.)
// En nuestro controlador, exportamos diferentes funciones que realizan las operaciones CRUD basicas utilizando nuestro modelo usuario

//OBTENER TODAS LAS BROMAS
const findAllJokes = (req, res)=>{
    Broma.find()//operacion en la base datos con promise
        .then(alljokes=>res.json({bromas : alljokes}))
        .catch(err =>res.json({message: "Error al obtener todas las bromas",error: err}));
}

//CREAR UNA BROMA POST
const newJoke = (req, res)=>{
    Broma.create(req.body) //operacion en la base de datos
    .then(nuevochiste=>res.json({broma : nuevochiste}))
    .catch(err=> res.json({message: "Error al crear nuevo chiste", error : err}));
}

//ECONTRAR UNA BROMA POR ID O RETORNAR UNA BROMA RANDOM
const findOneJoke = (req,res)=>{
    const recibe = req.params._id;
    if (recibe == "random"){
        Broma.count().exec((err, count) =>{
           /*  El método exec() ejecuta una busqueda sobre las coincidencias de una expresión regular en una cadena especifica. Devuelve el resultado como array, o null. */
            // Get a random entry
            var random = Math.floor(Math.random() * count)
          
            //De todos los usuarios toma uno y le un offset gracias a nuestro nro random de manera que ahora ya no siempre muestra el primero
            Broma.findOne().skip(random).exec(
              (err, documento)=> {
                res.json({bromarnd: documento})
              })
          })
    }else{
    Broma.findOne({_id: recibe}) //operacion en la base de datos
    .then(unaBroma=>res.json({broma : unaBroma}))
    .catch(err=>res.json({message : "Error al encontrar una brom", error : err}))}
}

//PUT ACTUALIZA UNA BROMA o edita 
const updateJoke = (req,res)=>{
    const id = req.params._id;
    Broma.findOneAndUpdate({_id: id},req.body,{new : true})
    .then(bromUpgrade=> res.json({broma: bromUpgrade}))
    .catch((err)=>res.json({message: "Error al editar broma", error : err}));
}
//DELETE
const borrarBroma = (req,res)=>{
    const id = req.params._id;
    Broma.findByIdAndRemove({_id: id})
    .then((bromremovida)=>res.json({broma : bromremovida}))
    .catch((err)=>{res.json({
        message : "No se pudo borrar broma",
        error : err})
    })

}



module.exports = {
    findAllJokes,
    newJoke,
    findOneJoke,
    updateJoke,
    borrarBroma
}