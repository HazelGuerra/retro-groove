// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Container, Row, Col, Card, Button, Pagination } from 'react-bootstrap';
// import axios from "axios";

// function Posts() {
//     const [posts, setPosts] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const navigate = useNavigate();
//     const token = localStorage.getItem("token");
//     const urlServer = "http://localhost:2999";
//     const endpoint = "/landing";

//     const handleGetPosts = async () => {
//         try {
//             const response = await axios.get(urlServer + endpoint, {
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//             setPosts(response.data);
//         } catch (error) {
//             console.error("Error en la solicitud:", error);
//             alert("Hubo un error al cargar los productos. Por favor, inténtalo de nuevo. 🙁");
//         }
//     };

//     useEffect(() => {
//         handleGetPosts();
//     }, []);

//     const productsPerPage = 12; // Número de productos por página

//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = posts.slice(indexOfFirstProduct, indexOfLastProduct);

//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     return (
//         <div className="miContainer">
//             <br></br>
//             <Container>
//                 <Row>
//                     {currentProducts.map((post) => (
//                         <Col key={post._id} xs={12} sm={6} md={4} lg={3}>
//                             <Card className="card like-item">
//                                 <Card.Img variant="top" src={post.imagen} height={250}/>
//                                 <Card.Body>
//                                     <Card.Title>{post.titulo}</Card.Title>
//                                     <Card.Text>{post.formato}</Card.Text>
//                                     <Card.Text className="fw-bold">${post.precio}</Card.Text>
//                                     <Button variant="" className="btn btn-outline-dark" onClick={() => navigate(`/producto/${post.titulo}`)}>Ver más</Button>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//                 <br />
//                 <Pagination className="justify-content-center">
//                     {[...Array(Math.ceil(posts.length / productsPerPage)).keys()].map((pageNumber) => (
//                         <Pagination.Item
//                             key={pageNumber + 1}
//                             active={pageNumber + 1 === currentPage}
//                             onClick={() => handlePageChange(pageNumber + 1)}
//                         >
//                             {pageNumber + 1}
//                         </Pagination.Item>
//                     ))}
//                 </Pagination>
//             </Container>
//         </div>
//     );
// };

// export default Posts;
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Container, Row, Col, Card, Button, Pagination, Form } from 'react-bootstrap';
// import axios from "axios";

// function Posts() {
//     const [posts, setPosts] = useState([]);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [searchTerm, setSearchTerm] = useState(""); // Nuevo estado para el término de búsqueda
//     const navigate = useNavigate();
//     const token = localStorage.getItem("token");
//     const urlServer = "http://localhost:2999";
//     const endpoint = "/landing";

//     const handleGetPosts = async () => {
//         try {
//             const response = await axios.get(urlServer + endpoint, {
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//             setPosts(response.data);
//         } catch (error) {
//             console.error("Error en la solicitud:", error);
//             alert("Hubo un error al cargar los productos. Por favor, inténtalo de nuevo. 🙁");
//         }
//     };

//     useEffect(() => {
//         handleGetPosts();
//     }, []);

//     const productsPerPage = 12;

//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

//     // Filtrar productos por título usando el término de búsqueda
//     const filteredProducts = posts.filter(post => post.titulo.toLowerCase().includes(searchTerm.toLowerCase()));

//     const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

//     const handlePageChange = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     const handleSearchChange = (event) => {
//         setSearchTerm(event.target.value);
//     };

//     return (
//         <div className="miContainer">
//             <br />
//             <Container>
//                 {/* Barra de búsqueda */}
//                 <Row>
//                     <Col xs={12}>
//                         <Form.Group controlId="searchForm">
//                             <Form.Label>Buscar por título:</Form.Label>
//                             <Form.Control
//                                 type="text"
//                                 placeholder="Ingrese el título del producto"
//                                 value={searchTerm}
//                                 onChange={handleSearchChange}
//                             />
//                         </Form.Group>
//                     </Col>
//                 </Row>
//                 {/* Fin de la barra de búsqueda */}
//                 <Row>
//                     {currentProducts.map((post) => (
//                         <Col key={post._id} xs={12} sm={6} md={4} lg={3}>
//                             <Card className="card like-item">
//                                 <Card.Img variant="top" src={post.imagen} height={250}/>
//                                 <Card.Body>
//                                     <Card.Title>{post.titulo}</Card.Title>
//                                     <Card.Text>{post.formato}</Card.Text>
//                                     <Card.Text className="fw-bold">${post.precio}</Card.Text>
//                                     <Button variant="" className="btn btn-outline-dark" onClick={() => navigate(`/producto/${post.titulo}`)}>Ver más</Button>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//                 <br />
//                 <Pagination className="justify-content-center">
//                     {[...Array(Math.ceil(filteredProducts.length / productsPerPage)).keys()].map((pageNumber) => (
//                         <Pagination.Item
//                             key={pageNumber + 1}
//                             active={pageNumber + 1 === currentPage}
//                             onClick={() => handlePageChange(pageNumber + 1)}
//                         >
//                             {pageNumber + 1}
//                         </Pagination.Item>
//                     ))}
//                 </Pagination>
//             </Container>
//         </div>
//     );
// };

// export default Posts;

import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Pagination,
  Form,
} from "react-bootstrap";
import axios from "axios";
import "../miApi/miapi.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFormat, setSelectedFormat] = useState(""); // Nuevo estado para el formato seleccionado
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const urlServer = "http://localhost:2999";
  const endpoint = "/landing";

  const handleGetPosts = async () => {
    try {
      const response = await axios.get(urlServer + endpoint, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setPosts(response.data);
    } catch (error) {
      console.error("Error en la solicitud:", error);
      alert(
        "Hubo un error al cargar los productos. Por favor, inténtalo de nuevo. 🙁"
      );
    }
  };

  useEffect(() => {
    handleGetPosts();
  }, []);

  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Filtrar productos por título y formato
  const filteredProducts = posts.filter(
    (post) =>
      post.titulo.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedFormat === "" || post.formato === selectedFormat)
  );

  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormatChange = (event) => {
    setSelectedFormat(event.target.value);
  };

  return (
    <div className="miContainer">
      <br />
      <Container>
        {/* Barra de búsqueda */}
        <Row>
          <Col xs={12} sm={6}>
            <Form.Group controlId="searchForm">
              <Form.Label>Buscar por título:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingrese el título del producto"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={6}>
            <Form.Group controlId="formatoSelect">
              <Form.Label>Filtrar por formato:</Form.Label>
              <Form.Control
                as="select"
                value={selectedFormat}
                onChange={handleFormatChange}
              >
                <option value="">Todos los formatos</option>
                <option value="Vinilo">Vinilo</option>
                <option value="CDs">CD</option>
                <option value="Cassete">Cassete</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        {/* Fin de la barra de búsqueda */}
        <Row className="mt-5">
          {currentProducts.map((post) => (
            <Col key={post._id} xs={12} sm={6} md={4} lg={3} className="">
              <Card className="card like-item">
                <Card.Img variant="top" src={post.imagen} height={250} />
                <Card.Body>
                  <Card.Title>{post.titulo}</Card.Title>
                  <Card.Text>{post.formato}</Card.Text>
                  <Card.Text className="fw-bold">${post.precio}</Card.Text>
                  <Button
                    variant=""
                    className="btn btn-outline-dark"
                    onClick={() => navigate(`/producto/${post.titulo}`)}
                  >
                    Ver más
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <br />
        <Pagination className="justify-content-center custom-pagination">
          {[
            ...Array(
              Math.ceil(filteredProducts.length / productsPerPage)
            ).keys(),
          ].map((pageNumber) => (
            <Pagination.Item
              key={pageNumber + 1}
              active={pageNumber + 1 === currentPage}
              onClick={() => handlePageChange(pageNumber + 1)}
            >
              {pageNumber + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </Container>
    </div>
  );
}

export default Posts;
