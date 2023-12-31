import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context, { MyProvider } from "./context/index"; // Importa MyProvider desde el contexto
import "./index.css";

// Importa tus vistas
import Carrito from "./views/Carrito/Carrito.jsx";
import Home from "./views/Home/Home.jsx";
import Landing from "./views/Landing/Landing.jsx";
import Perfil from "./views/Perfil/Perfil.jsx";
import Producto from "./views/Producto/Producto.jsx";
import Registrarse from "./views/Registrarse/Registrarse.jsx";
import Favoritos from "./views/Likes/Likes.jsx";
import Vender from "./views/Vender/Vender.jsx";
import MisPosts from "./views/misPosts/MisPosts.jsx";

function App() {
  const [total, setTotal] = useState(0);
  const sharedState = { total, setTotal };

  return (
    <Context.Provider value={sharedState}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/vender" element={<Vender />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/registrarse" element={<Registrarse />} />
          <Route path="/producto/:titulo" element={<Producto />} />
          <Route path="/publicaciones" element={<MisPosts />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
