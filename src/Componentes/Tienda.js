import React, { useState } from 'react';


function Tienda(props) {
  const [verMas, setVerMas] = useState(false);

  const toggleVerMas = () => {
    setVerMas(!verMas);
  };
  const cardStyle = {
    height: '100%',
  };
  
  const cardImgStyle = {
    width: '100%',
    height: 'auto',
  };

  let sectionVerMas = null;

  if (verMas) {
    sectionVerMas = (
      <div>
        <hr />
        {props.value.descripcion}
        <button onClick={toggleVerMas} className="btn btn-link">
          ver menos
        </button>
      </div>
    );
  } else {
    sectionVerMas = (
      <button onClick={toggleVerMas} className="btn btn-link">
        ver más
      </button>
    );
  }

  return (
    <div className="col-md-4">
      <div className="card mb-3" style={cardStyle}>
        <img src={props.value.foto} className="card-img-top" alt="..." style={cardImgStyle} />
        <div className="card-body">
          <h5 className="card-title">{props.value.titulo}</h5>
          {props.value.descripcion.substring(0, 20)}
          {sectionVerMas}
          <button
              onClick={()=>props.addProductoToCarrito(props.value)}
              className="btn btn">🛒</button>
          <p className="card-text">
            <small className="text-muted">{props.value.precio}</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tienda;
