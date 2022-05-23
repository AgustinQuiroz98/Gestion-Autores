const controller = require("../controller/autores.controller");

module.exports = (app) => {
  app.get("/api/traer", controller.mostrarAutores);
  app.post("/api/crear", controller.agregarUnAutor);
  app.get("/api/traer/:id", controller.mostrarUnAutor);
  app.put("/api/editar/:id", controller.actualizarUnAutor);
  app.delete("/api/eliminar/:id", controller.borrarUnAutor);
};
