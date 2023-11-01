import { useState } from "react";
import axios from 'axios'; 

function CrearProducto(props) {

    const [titulo, setTitulo] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [foto, setFoto] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        const nuevoProducto = {
            titulo,
            precio,
            descripcion,
            foto
        };

        try {
            // Realiza una solicitud POST al servidor con los datos del nuevo producto
            const response = await axios.post('http://localhost:5000/CrearProductos', nuevoProducto);

            // Maneja la respuesta del servidor, por ejemplo, redirige a otra página
            console.log('Producto creado exitosamente:', response.data);

            // Reinicia el estado del formulario si es necesario
            setTitulo("");
            setPrecio("");
            setDescripcion("");
            setFoto("");
        } catch (error) {
            // Maneja errores, por ejemplo, muestra un mensaje de error
            console.error('Error al crear el producto:', error);
        }
    };

        
    
    return(
            <form className="border border-2 border-secondary p-2 rounded" onSubmit={handleSubmit}>
                <input placeholder="Titulo"
                    className="form-control mb-2"
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)} />
                
    
                <input placeholder="Precio"
                    className="form-control mb-2"
                    value={precio}
                    onChange={(event) => setPrecio(event.target.value)} />
    
                <input placeholder="Descripcion"
                    className="form-control mb-2"
                    value={descripcion}
                    onChange={(event) => setDescripcion(event.target.value)} />
                
                <input placeholder="Foto" 
                    className="form-control mb-2"
                    value={foto}
                    onChange={(event) => setFoto(event.target.value)} />
                     <input type="submit" className="btn btn-primary" value="Crear Producto" />
    
            </form>
        );
}

export default CrearProducto;