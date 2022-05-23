import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./styles.css";

const Listaautores = () => {
  const [lista, setLista] = useState([]);
  const navigate = useNavigate();

  useEffect(
    () =>
      axios
        .get("http://localhost:8000/api/traer")
        .then((response) => {
          setLista(response.data);
        })
        .catch((err) => console.error(err)),
    []
  );
  return (
    <>
      <h1>Favorite authors</h1>
      <Link to={"/crear"}>Add an author</Link>
      <table>
        <thead>
          <tr>
            <th scope="col">Author</th>
            <th scope="col">Actions available</th>
          </tr>
        </thead>
        <tbody>
          {lista.map((autor, i) => (
            <tr key={i}>
              <td className="name">{autor.nombre}</td>
              <td className="actions">
                <button onClick={() => navigate(`/editar/${autor._id}`)}>
                  Edit
                </button>
                <button
                  onClick={() =>
                    axios
                      .delete(`http://localhost:8000/api/eliminar/${autor._id}`)
                      .then((response) => navigate("/"))
                      .catch((err) => console.error(err))
                  }
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Listaautores;
