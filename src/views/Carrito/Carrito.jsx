import React, { useEffect, useState } from "react";
import CarritoItem from "../../components/CarritoItem/CarritoItem.jsx";
import Navbar from "../../components/Navbar/navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./carrito.css";
import Footer from "../../components/footer/Footer.jsx";
import Hero from "../../components/hero/hero.jsx";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Pagination,
  Table,
} from "react-bootstrap";

/*const Carrito = () => {
  const [carrito, setCarrito] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const urlServer = "http://localhost:2999";
  const endpoint = "/carrito";

  const handleGetCarrito = async () => {
    try {
      const response = await axios.get(urlServer + endpoint, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("response", response.data);
      setCarrito(response.data);
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert(
        "Hubo un error al cargar los productos. Por favor, inténtalo de nuevo. 🙁"
      );
    }
  };
  useEffect(() => {
    handleGetCarrito();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Debes iniciar sesión para vender productos.");
      navigate("/");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero title="Mi carrito musical" />
      <div className="miContainer cart body">
        <ul className="miLista">
          {carrito.map((producto) => (
            <li key={producto._id}>
              <CarritoItem productos={producto} />
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
};

export default Carrito;*/
const Carrito = () => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const urlServer = "http://localhost:2999";
  const endpoint = "/carrito";

  const handleGetCarrito = async () => {
    try {
      const response = await axios.get(urlServer + endpoint, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("response", response.data);
      setCarrito(response.data);
      calcularTotal(response.data);
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert(
        "Hubo un error al cargar los productos. Por favor, inténtalo de nuevo. 🙁"
      );
    }
  };

  const calcularTotal = (productos) => {
    let total = 0;
    productos.forEach((producto) => {
      // Verificar si el precio es un número válido
      const precio = parseFloat(producto.precio);
      if (!isNaN(precio)) {
        total += precio;
      }
    });
    setTotal(total);
  };

  useEffect(() => {
    handleGetCarrito();
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("Debes iniciar sesión para vender productos.");
      navigate("/");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero title="Mi carrito musical." />
      <div className="miContainer cart body">
        <ul className="miLista">
          {carrito.map((producto) => (
            <li key={producto._id}>
              <CarritoItem productos={producto} />
            </li>
          ))}
        </ul>
        <br />
        <div className="carrito-total">
          <h1>Total: ${total}</h1>
          <button
            type="button"
            className="btn btn-outline-dark "
            onClick={() => alert("Gracias por tu compra")}
          >
            Ir a pagar
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Carrito;
