import Context from "../../context/index";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import { Image } from "react-bootstrap";
import { Text } from "react-bootstrap";
import "./Carrito.css";
import NavB from "../../components/Navbar";

export default () => {
  const { data, setData } = useContext(Context);
  const { carrito, setCarrito } = useContext(Context);
  const { total, setTotal } = useContext(Context);

  const addProducto = (id) => {
    //busco en el carrito si ya existe
    let item = carrito.find((x) => x.id === id);

    //busco en el carrito si no existe, entonces lo creo
    if (!item) {
      const producto = data.find((x) => x.id === id);
      item = {
        id: producto.id,
        name: producto.name,
        precio: producto.precio,
        img: producto.img,
        cantidad: 1,
      };
      //actualiza el carrito
      setCarrito([...carrito, item]);
    } else {
      //clono el carrito para poder actualizarlo
      let clone = [...carrito];

      //busco el indice donde se encuentra el item
      let index = clone.findIndex((x) => x.id === id);

      //actualizo la cantidad del item
      clone[index].cantidad++;

      //actualizo el carrito con el clone
      setCarrito(clone);
    }
    calcularTotal();
  };

  const calcularTotal = () => {
    let resultado = 0;
    carrito.forEach((item) => (resultado += item.cantidad * item.price));
    setTotal(resultado);
  };

  const subProducto = (id) => {
    let item = carrito.find((x) => x.id === id);

    if (item) {
      //clono el carrito para poder actualizarlo
      let clone = [...carrito];

      //busco el indice donde se encuentra el item
      let index = clone.findIndex((x) => x.id === id);

      //actualizo la cantidad del item
      clone[index].cantidad--;

      //actualizo el carrito con el clone
      setCarrito(clone);
    }
    calcularTotal();
  };

  return (
    <div className="carrito"> 
    <NavB />
      <h1 className="detalles ">Detalles del pedido:</h1>
      <div className="card carro">
      <ul className="carrito-container">
        {carrito.map((producto) => (
          <div className="carrito-info">
            <div className="carrito-info1">
              <Image src={producto.img} />
              <p>{producto.name}</p>
              <p>{producto.precio * producto.cantidad}</p>
            </div>
            <div className="carrito-info2">
              <Button variant="danger" onClick={() => addProducto(producto.id)}>
                +
              </Button>
              <span>{producto.cantidad}</span>
              <Button variant="danger" onClick={() => subProducto(producto.id)}>
                -
              </Button>
            </div>
          </div>
          
        ))}
      </ul>
      </div>
      <br />
      <div className="carrito-total">
        <h1>Total:{total}</h1>
        <Button>Ir a pagar</Button>
      </div>
    </div>
  );
};