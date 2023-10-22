import { useState } from "react";

function CrearProducto(props) {

    const [titulo, setTitulo] = useState("");
    const [precio, setPrecio] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [foto, setFoto] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        props.fnNuevoProducto({
            'Titulo': titulo,
            'Precio': precio,
            'descripcion': descripcion,
            'foto': foto
        });

        setTitulo("");
        setPrecio("");
        setDescripcion("");
        setFoto("");
    }
    return(
        <form onSubmit={(e) => handleSubmit(e)}
          className="border border-2 border-secundary p-2 rounded">
            <input placeholder="Titulo"
                className="form-control mb-2"
                type='text'
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)} />

            <input placeholder="Precio"
                className="form-control mb-2"
                type='text'
                value={precio}
                onChange={(e) => setPrecio(e.target.value)} />
        
        <input placeholder="Descripcion"
                className="form-control mb-2"
                type='text'
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)} />

        <input placeholder="Foto"
                className="form-control mb-2"
                type='text'
                value={foto} 
                onChange={(e) => setFoto(e.target.value)} />

        <input type="submit" value="Crear"
                className="btn btn-primary"/>
        </form>

    );
}

export default CrearProducto;