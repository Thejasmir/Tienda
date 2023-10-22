import React from 'react';

function Navegacion({ toggleFormulario, toggleListCarritos, mostrarFormulario, mostrarListCarritos }) {
  
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="d-flex ml-auto">
        <button className={`btn btn-primary`} onClick={toggleFormulario}>
          {mostrarFormulario ? 'Ocultar' : 'Crear'}
        </button>

        <button
          className={`btn ${mostrarListCarritos ? 'btn-light' : 'btn-primary'}`}
          onClick={toggleListCarritos}
        >
          {mostrarListCarritos ? '🛒' : '🛒'}
        </button>
      </div>
    </nav>
  );
}

export default Navegacion;

