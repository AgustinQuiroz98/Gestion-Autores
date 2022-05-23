import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Editarautor = () => {
  const { _id } = useParams();
  const [nombre, setNombre] = useState("");
  const [cita, setCita] = useState("");
  const navigate = useNavigate();

  useEffect(
    () =>
      axios
        .get(`http://localhost:8000/api/traer/${_id}`)
        .then((response) => {
          setNombre(response.data.nombre);
          setCita(response.data.cita);
        })
        .catch((err) => console.error(err)),
    [_id]
  );

  const submit = () => {
    axios
      .put(`http://localhost:8000/api/editar/${_id}`, {
        nombre,
        cita,
      })
      .then((response) => console.log(response))
      .catch((err) => console.error(err));

    navigate("/");
  };
  return (
    <>
      <h1>Edit Author</h1>
      <Link to={"/"}>Home</Link>
      <h2>Edit this author:</h2>
      <div>
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
      </div>
    </>
  );
};

export default Editarautor;
