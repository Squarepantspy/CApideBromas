//manejara todas nuestras rutas para cada modelo

const controladorBromas = require('../controllers/jokes.controller')



module.exports = (app)=>{
    app.get("/api/jokes",controladorBromas.findAllJokes);
    app.post("/api/jokes/new",controladorBromas.newJoke);
    app.get("/api/jokes/:_id",controladorBromas.findOneJoke);
    app.put("/api/jokes/update/:_id",controladorBromas.updateJoke);
    app.delete("/api/jokes/delete/:_id",controladorBromas.borrarBroma)
}