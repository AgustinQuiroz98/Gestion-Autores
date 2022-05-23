import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Crearautor = () => {
  const [nombre, setNombre] = useState("");
  const [cita, setCita] = useState("");
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/crear", { nombre, cita })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));

    navigate("/");
  };
  return (
    <form>
      <h1>Create Author</h1>
      <Link to={"/"}>Home</Link>

      <h2>Add a new author:</h2>

      <label htmlFor="nombre">Author Name</label>
      <input
        type="text"
        name="nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <label htmlFor="cita">Author Quote</label>
      <input
        type="text"
        name="cita"
        value={cita}
        onChange={(e) => setCita(e.target.value)}
      />

      <button onClick={() => navigate("/")}>Cancel</button>
      <button onClick={submit}>Submit</button>
    </form>
  );
};

export default Crearautor;
