const mongoose = require("mongoose");

const AutorSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "nombre del autor es obligatorio"],
      minlength: [3, "el nombre debe tener al menos 3 caracteres"],
    },
    cita: {
      type: String,
    },
  },
  { timestamps: true }
);

const AutorModel = mongoose.model("autores", AutorSchema);

module.exports = AutorModel;
