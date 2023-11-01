import React from 'react';

function Navegacion({ toggleFormulario, toggleListCarritos, mostrarFormulario, mostrarListCarritos }) {
  const navbarHeight = "80px"; // Ajusta la altura según la altura de tu barra de navegación

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
          <button className={`btn btn-primary`} onClick={toggleFormulario}>
            {mostrarFormulario ? 'Ocultar' : 'Crear'}
          </button>

          <button
            className={`btn ${mostrarListCarritos ? 'btn-light' : 'btn-primary'}`}
            onClick={toggleListCarritos}
          >
            {mostrarListCarritos ? '🛒' : '🛒'}
          </button>

          {/* Agrega botones adicionales según sea necesario */}
        </div>
      </nav>
      <div style={{ marginTop: navbarHeight }}>
        {/* Contenido principal */}
        {/* Agrega tus títulos y contenido aquí */}
      </div>
    </>
  );
}

export default Navegacion;

