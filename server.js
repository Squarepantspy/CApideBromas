//maneja toda la lógica del servidor con express
//importar express
const express = require('express')
const app = express()
const PORT = 8000


//middleware colocar antes de las consultas por enrutamiento
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//llamar a la conexion a la base datos 
require('./config/mongoose.config')

//apuntar el enrutamiento, conectarnos a las rutas 
const Rutasbromas = require('./routes/jokes.routes')
Rutasbromas(app) //le pasamos como parametro la aplicacion 





//para saber si el servidor esta corriendo esto tiene que estar debajo de los otros bloques de codigo
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})