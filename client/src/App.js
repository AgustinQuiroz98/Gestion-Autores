import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Crearautor from "./components/CrearAutor";
import EditarAutor from "./components/EditarAutor";
import ListaAutores from "./components/ListaAutores";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ListaAutores />} />
          <Route path="/crear" element={<Crearautor />} />
          <Route path="/editar/:_id" element={<EditarAutor />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
