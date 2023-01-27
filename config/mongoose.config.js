const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/schema_broma',()=>{
    console.log('Conectado a mongoDB')
})

//mongoose.set('strictQuery',true) para suprimir el warning pero no suprime