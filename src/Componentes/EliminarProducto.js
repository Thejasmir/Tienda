import React from 'react';

function EliminarProducto({ productId, handleEliminarProducto }) {
  const handleClick = () => {
    handleEliminarProducto(productId);
  };

  return (
    <button onClick={handleClick} className="btn btn-danger">
      Eliminar
    </button>
  );
}

export default EliminarProducto;
