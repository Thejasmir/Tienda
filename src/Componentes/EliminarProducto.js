import { useState } from "react";
import axios from 'axios';

function Producto(props) {
    const { id, titulo, precio, descripcion, foto } = props.producto;

    const handleEliminarProducto = async () => {
        try {
            // Realiza una solicitud DELETE al servidor para eliminar el producto por su ID
            const response = await axios.delete(`http://localhost:5000/eliminarProducto/${id}`);
            console.log('Producto eliminado exitosamente:', response.data);

            // Puedes realizar alguna actualización en la interfaz de usuario después de eliminar el producto si es necesario
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    };

    return (
        <div>
            {/* Renderiza los detalles del producto */}
            <p>producto ID: {id}</p>
            <p>titulo: {titulo}</p>
            <p>precio: {precio}</p>
            <p>descripción: {descripcion}</p>
            <p>foto: {foto}</p>

            {/* Agrega un botón para eliminar el producto */}
            <button onClick={handleEliminarProducto}>Eliminar Producto</button>
        </div>
    );
}

export default Producto;
