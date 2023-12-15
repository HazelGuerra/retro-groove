import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavB from "../../components/Navbar/navbar.jsx";
import axios from "axios";
import "./index.css";

const Producto = () => {
  const { titulo } = useParams();
  const [producto, setProducto] = useState({
    titulo: "",
    descripcion: "",
    formato: "",
    imagen: "",
    precio: 0,
  });

  useEffect(() => {
    const obtenerProducto = async () => {
      const urlServer = "http://localhost:2999";
      const endpoint = `/producto/${titulo}`;
      const token = localStorage.getItem("token"); 

      try {
        const response = await axios.get(urlServer + endpoint, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setProducto(response.data);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    obtenerProducto();
  }, [titulo]);

  return (
    <>
      <NavB />
      <div className="contenedor">
        <div key={producto.id} className="contenedorCard">
          <div className="cardContent">
            <img src={producto.imagen} alt={producto.titulo} />
            <div className="cardText">
              <h1>{producto.titulo}</h1>
              <h5>{`$${producto.precio}.-`}</h5>
              <h5>{producto.descripcion}</h5>
              <div className="botones">
                <Button variant="primary">🛒</Button>
                <Button variant="primary">❤</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Producto;
