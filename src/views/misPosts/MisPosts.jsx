import React, { useEffect, useState } from "react";
import LikeItem from "../../components/Likesitem copy/likeitem.jsx";
import Navbar from "../../components/Navbar/navbar.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/footer/Footer.jsx";
import { Container, Row, Col, Card, Button, Pagination } from "react-bootstrap";

const MisPosts = () => {
  const [likes, setLikes] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  console.log("Token:", token);
  const urlServer = "http://localhost:2999";
  const endpoint = "/publicaciones";
  console.log("Token:", token);
  const handleGetLikes = async () => {
    try {
      const response = await axios.get(urlServer + endpoint, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("response", response.data);
      setLikes(response.data);
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert(
        "Hubo un error al cargar los productos. Por favor, inténtalo de nuevo. 🙁"
      );
    }
  };
  useEffect(() => {
    handleGetLikes();
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
      <div className="miContainer body">
        <Row className="justify-content-center">
          {likes.map((productos) => (
            <Col xs={12} sm={6} md={4} lg={3}>
              <LikeItem key={productos._id} productos={productos} />
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default MisPosts;
