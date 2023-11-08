import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Tienda(props) {
  const [verMas, setVerMas] = useState(false);

  const toggleVerMas = () => {
    setVerMas(!verMas);
  };

  const listItemStyle = {
    borderBottom: '1px solid #ccc',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
  };

  const imageStyle = {
    width: '200px', // Ajusta el tamaño de la imagen según tus preferencias
    height: 'auto',
    borderRadius: '10px',
  };

  const buttonStyle = {
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: '18px',
  };

  return (
    <li style={listItemStyle}>
      <img src={props.value.foto} alt="Product" style={imageStyle} />
      <h2>{props.value.titulo}</h2>
      <p>{verMas ? props.value.descripcion : props.value.descripcion.substring(0, 20)}</p>
      <button onClick={toggleVerMas} style={buttonStyle}>
        {verMas ? 'Ver menos' : 'Ver más'}
      </button>
      <div>
        <button onClick={() => props.addProductoToCarrito(props.value)} style={buttonStyle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16">
            <path fill="currentColor" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0a2 2 0 0 1-4 0z" />
          </svg>
        </button>
      </div>
      <p style={{ fontSize: '24px' }}>${props.value.precio}</p>
      <div>
        <button onClick={() => props.handleEliminarProducto(props.value.id)} className="btn btn-danger">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26">
            <path fill="currentColor" d="M11.5-.031c-1.958 0-3.531 1.627-3.531 3.594V4H4c-.551 0-1 .449-1 1v1H2v2h2v15c0 1.645 1.355 3 3 3h12c1.645 0 3-1.355 3-3V8h2V6h-1V5c0-.551-.449-1-1-1h-3.969v-.438c0-1.966-1.573-3.593-3.531-3.593h-3zm0 2.062h3c.804 0 1.469.656 1.469 1.531V4H10.03v-.438c0-.875.665-1.53 1.469-1.53zM6 8h5.125c.124.013.247.031.375.031h3c.128 0 .25-.018.375-.031H20v15c0 .563-.437 1-1 1H7c-.563 0-1-.437-1-1V8zm2 2v12h2V10H8zm4 0v12h2V10h-2z" />
          </svg>
        </button>
        <button className="btn btn-primary">
        <Link to={`/editar/${props.value.id}`} className="text-white text-decoration-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19h1.4l8.625-8.625l-1.4-1.4L5 17.6V19ZM19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575t1.412.575l1.4 1.4q.575.575.6 1.388t-.55 1.387L19.3 8.925ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6l4.25 4.25Zm-3.525-.725l-.7-.7l1.4 1.4l-.7-.7Z"/></svg>
        </Link>
        </button>
        <button className="btn btn-info">
        <Link to={`/detalles/${props.value.id}`} className="text-white text-decoration-none"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26"><path fill="currentColor" d="M0 0v26h9V0H0zm2 2h5v3.75l-.906-.875l-1.282.625L3.22 3.594L2 4.656V2zm3.813.594a.602.602 0 0 0-.594.594c0 .321.272.593.593.593a.602.602 0 0 0 .594-.594a.602.602 0 0 0-.593-.593zM12 4v2h6V4h-6zm8 0v2h6V4h-6zM2 11h5v5H2v-5zm3 .813c-.355.053-.688.374-.688.374s-.035-.029-.093-.062c-.2-.114-.684-.34-1-.031c-.41.399-.031 1.094-.031 1.094s-.596.49-.407 1a.575.575 0 0 0 .25.28c.316.182.781.095.781.095s.21.44.532.624a.566.566 0 0 0 .312.063c.486-.027.657-.844.657-.844s.807-.09.937-.594c.115-.445-.494-.798-.625-.874c0 0 .158-.812-.281-1.063A.52.52 0 0 0 5 11.812zM12 12v2h6v-2h-6zm8 0v2h6v-2h-6zm-15.219.688c.028-.008.063-.018.094 0c.248.141-.344.687-.344.687s.762-.1.719.188c-.042.287-.719-.094-.719-.094s.317.704.032.75c-.286.046-.125-.75-.125-.75s-.63.537-.72.281c-.09-.254.657-.375.657-.375s-.66-.377-.438-.563c.223-.184.532.5.532.5s.115-.573.312-.624zM2 19h5v5H2v-5zm2.5.75s-.205.634-.406.719c-.201.085-.844-.219-.844-.219s.287.638.219.844c-.048.147-.719.406-.719.406s.642.23.688.406c.067.261-.188.844-.188.844s.59-.322.781-.219c.193.102.469.719.469.719s.205-.634.406-.719c.201-.085.844.219.844.219s-.29-.639-.219-.844c.054-.159.719-.406.719-.406s-.635-.247-.688-.406c-.085-.256.188-.844.188-.844s-.59.322-.781.219c-.192-.102-.469-.719-.469-.719zM12 20v2h6v-2h-6zm8 0v2h6v-2h-6zm-15.5.688a.82.82 0 0 1 .813.812a.82.82 0 0 1-.813.813a.82.82 0 0 1-.813-.813a.82.82 0 0 1 .813-.813z"/></svg></Link>
        </button>


      </div>
    </li>
  );
}

export default Tienda;



