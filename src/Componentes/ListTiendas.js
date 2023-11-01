import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Tienda from './Tienda';

function ListTiendas(props) {
  const [elementos, setElementos] = useState([]);

  useEffect(() => {
    // Hacer una solicitud GET a la API para recuperar los elementos
    Axios.get('http://localhost:5000/productos') // Ajusta la URL según tu configuración
      .then((response) => {
        setElementos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // El segundo argumento vacío garantiza que la solicitud se realice solo una vez

  // Función para manejar la eliminación de productos
  const handleEliminarProducto = async (productId) => {
    try {
      // Realiza una solicitud DELETE al servidor para eliminar el producto por su ID
      const response = await Axios.delete(`http://localhost:5000/eliminarProducto/${productId}`);
      console.log('Producto eliminado exitosamente:', response.data);

      // Actualiza la lista de productos después de eliminar
      setElementos((prevElementos) => prevElementos.filter((element) => element.id !== productId));
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  const listTiendaRendered = elementos.map((element) => (
    <div key={element.id}>
      <Tienda value={element} addProductoToCarrito={props.fnAddCarrito} />
      <button onClick={() => handleEliminarProducto(element.id)}>Eliminar Producto</button>
    </div>
  ));

  const containerStyle = {
    marginTop: '30px',
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="row">{listTiendaRendered}</div>
    </div>
  );
}



export default ListTiendas;

