const AutorModel = require("../models/autor.model");

const mostrarAutores = async (req, res) => {
  try {
    const getAll = await AutorModel.find();
    res.json(getAll);
  } catch (err) {
    console.error(err);
    res.json({
      message: "No fue posible traer la lista de autores" + err.message,
    });
  }
};

const agregarUnAutor = async (req, res) => {
  try {
    const { nombre, cita } = req.body;
    const newAuthor = await AutorModel.create({ nombre: nombre, cita: cita });
    res.json(newAuthor);
  } catch (err) {
    console.error(err);
    res.json({
      message: "No fue posible agregar el autor" + err.message,
    });
  }
};

const mostrarUnAutor = async (req, res) => {
  try {
    const { id } = req.params;
    const getOne = await AutorModel.findOne({ _id: id });
    res.json(getOne);
  } catch (err) {
    console.error(err);
    res.json({
      message: "No fue posible mostrar el autor" + err.message,
    });
  }
};

const actualizarUnAutor = async (req, res) => {
  try {
    const { id } = req.params;
    const updateAuthor = await AutorModel.findOneAndUpdate(
      { _id: id },
      req.body,
      { new: true }
    );
    res.json(updateAuthor);
  } catch (err) {
    console.error(err);
    res.json({
      message: "No fue posible editar el autor" + err.message,
    });
  }
};

const borrarUnAutor = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAuthor = await AutorModel.deleteOne({ _id: id });
    res.json(deleteAuthor);
  } catch (err) {
    console.error(err);
    res.json({
      message: "No fue posible borrar el autor" + err.message,
    });
  }
};

module.exports = {
  mostrarAutores,
  agregarUnAutor,
  mostrarUnAutor,
  actualizarUnAutor,
  borrarUnAutor,
};
