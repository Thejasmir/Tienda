import React from 'react';

function Carrito(props) {
  const { value, eliminarDelCarrito } = props;

  const handleEliminar = () => {
    eliminarDelCarrito(value.id); // Llama a la función de eliminación con el ID del producto
  };

  return (
    <div>
      <div className="alert alert-info p-0" role="alert">
        <img width="50px" src={value.foto} />
        <small>{value.Titulo}</small>
      </div>
      <button onClick={handleEliminar}>🗑︎</button>
    </div>
  );
}

export default Carrito;
 