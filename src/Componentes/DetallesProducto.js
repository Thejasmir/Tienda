import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';

function DetallesProducto() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Realiza una solicitud para obtener los detalles del producto con el productId
    // Reemplaza la URL con la correcta para tu API
    Axios.get(`http://localhost:5000/obtenerProducto/${productId}`)
      .then((response) => {
        setProduct(response.data); // Establece los detalles del producto en el estado
      })
      .catch((error) => {
        console.error('Error al obtener los detalles del producto:', error);
      });
  }, [productId]);

  return (
    <div>
      <h2>Detalles del Producto</h2>
      {product ? (
        <>
          <p>Título: {product.titulo}</p>
          <p>Precio: ${product.precio}</p>
          <p>Descripción: {product.descripcion}</p>
          <p>Marca: {product.marca}</p>
          <p>Color: {product.color}</p>
          <p>Recomendado: {product.recomendado}</p>
          <p>Estado: {product.estado}</p>
          <p>Foto: <img src={product.foto} alt="Producto" style={{ maxWidth: '100%' }} /></p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
      <div className="form-buttons">
        <Link to="/" className="btn btn-secondary">
          Volver
        </Link>
      </div>
    </div>
  );
}

export default DetallesProducto;
