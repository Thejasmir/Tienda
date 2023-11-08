import React, { useState } from "react";
import axios from 'axios'; 

function CrearProducto(props) {
    const [producto, setProducto] = useState({
        titulo: "",
        precio: "",
        descripcion: "",
        foto: "",
        marca: "",
        color: "",
        recomendado: "",
        estado: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProducto({ ...producto, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Realiza una solicitud POST al servidor con los datos del nuevo producto
            const response = await axios.post('http://localhost:5000/CrearProductos', producto);

            // Maneja la respuesta del servidor, por ejemplo, redirige a otra página
            console.log('Producto creado exitosamente:', response.data);

            // Reinicia el estado del formulario si es necesario
            setProducto({
                titulo: "",
                precio: "",
                descripcion: "",
                foto: "",
                marca: "",
                color: "",
                recomendado: "",
                estado: ""
            });
        } catch (error) {
            // Maneja errores, por ejemplo, muestra un mensaje de error
            console.error('Error al crear el producto:', error);
        }
    };

    return (
        <form className="border border-2 border-secondary p-2 rounded" onSubmit={handleSubmit}>
            <input
                type="text"
                name="titulo"
                placeholder="Titulo"
                className="form-control mb-2"
                value={producto.titulo}
                onChange={handleChange}
            />
            <input
                type="number"
                name="precio"
                placeholder="Precio"
                className="form-control mb-2"
                value={producto.precio}
                onChange={handleChange}
            />
            <input
                type="text"
                name="descripcion"
                placeholder="Descripcion"
                className="form-control mb-2"
                value={producto.descripcion}
                onChange={handleChange}
            />
            <input
                type="text"
                name="marca"
                placeholder="Marca"
                className="form-control mb-2"
                value={producto.marca}
                onChange={handleChange}
            />
            <input
                type="text"
                name="color"
                placeholder="Color"
                className="form-control mb-2"
                value={producto.color}
                onChange={handleChange}
            />
            <input
                type="text"
                name="recomendado"
                placeholder="Recomendado"
                className="form-control mb-2"
                value={producto.recomendado}
                onChange={handleChange}
            />
            <input
                type="text"
                name="estado"
                placeholder="Estado"
                className="form-control mb-2"
                value={producto.estado}
                onChange={handleChange}
            />
            <input
                type="text"
                name="foto"
                placeholder="Foto"
                className="form-control mb-2"
                value={producto.foto}
                onChange={handleChange}
            />

            <input type="submit" className="btn btn-primary" value="Crear Producto" />
        </form>
    );
}

export default CrearProducto;
