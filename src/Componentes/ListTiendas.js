import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Tienda from './Tienda';
import EliminarProducto from './EliminarProducto';
import EditarProducto from './EditarProducto';
import DetallesProducto from './DetallesProducto';
import './Styles.css';

function ListTiendas(props) {
  const [elementos, setElementos] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    Axios.get('http://localhost:5000/productos')
      .then((response) => {
        setElementos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleEliminarProducto = async (productId) => {
    try {
      const response = await Axios.delete(`http://localhost:5000/eliminarProducto/${productId}`);
      console.log('Producto eliminado exitosamente:', response.data);

      setElementos((prevElementos) => prevElementos.filter((element) => element.id !== productId));
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  const handleEditarProducto = (product) => {
    setEditProduct(product);
    setShowDetails(false);
  };

  const handleActualizarProducto = async (editedProduct) => {
    try {
      const response = await Axios.put(`http://localhost:5000/actualizarProducto/${editedProduct.id}`, editedProduct);
      console.log('Producto actualizado exitosamente:', response.data);

      setElementos((prevElementos) =>
        prevElementos.map((element) => (element.id === editedProduct.id ? editedProduct : element))
      );

      setEditProduct(null);
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
    }
  };

  const handleMostrarDetalles = (product) => {
    setSelectedProduct(product);
    setShowDetails(true);
  };

  const listTiendaRendered = elementos.map((element) => (
    <div key={element.id} className="col-md-4">
      <Tienda
        value={element}
        addProductoToCarrito={props.fnAddCarrito}
        handleEliminarProducto={() => handleEliminarProducto(element.id)}
        handleEditarProducto={() => handleEditarProducto(element)}
        handleMostrarDetalles={() => handleMostrarDetalles(element)}
      />
    </div>
  ));

  return (
    <div className="container" style={{ marginTop: '100px' }}>
      <div className="row">
        {listTiendaRendered}
        {showDetails && selectedProduct && (
          <DetallesProducto
            product={selectedProduct}
            handleMostrarDetalles={() => setSelectedProduct(null)}
          />
        )}

        {editProduct && (
          <EditarProducto
            product={editProduct}
            handleActualizarProducto={handleActualizarProducto}
          />
        )}
      </div>
    </div>
  );
}

export default ListTiendas;



