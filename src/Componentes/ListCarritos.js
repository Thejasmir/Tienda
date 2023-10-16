import Carrito from './Carrito';

function ListCarritos(props) {
  // Función para eliminar un elemento del carrito
 {/* const eliminarDelCarrito = (productoId) => {
    const nuevoCarrito = props.elements.filter(element => element.Id !== productoId);
    props.actualizarCarrito(nuevoCarrito);
  };*/}
  

  const listaCarritosRendered = props.elements.map(element => (
    <Carrito
      key={element.id} // Asigna 'element.Id' como clave única
      value={element}
      eliminarDelCarrito={props.eliminarDelCarrito} // Pasa la función para eliminar productos
    />
  ));

  return (
    <div>
      <h4>Lista carrito</h4>
      {listaCarritosRendered}
    </div>
  );
}

export default ListCarritos;
