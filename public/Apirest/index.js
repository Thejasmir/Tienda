const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());

const credenciales = {
    host: 'localhost', // Debes utilizar comillas alrededor de 'localhost'
    user: 'root', // Usuario de la base de datos
    password: '', // Contraseña de la base de datos
    database: 'tienda_db', // Nombre de la base de datos
}

app.get('/productos', (req, res) => {

    var connection = mysql.createConnection(credenciales);
    connection.query('SELECT * FROM productos', (err, results) => {
        if (err) {
            console.error('Error executing query: ' + err.stack);
            return res.status(500).json({ message: 'Error al consultar la base de datos' });
        }

        res.json(results);
    });
    connection.end();
});

// Ruta para crear un nuevo producto
app.post('/CrearProductos', (req, res) => {
    const { titulo, precio, descripcion, foto } = req.body;

    // Validación básica de los datos (puedes agregar más validaciones según tus necesidades)
    if (!titulo || !precio || !descripcion || !foto ) {
        return res.status(400).json({ message: 'Faltan campos obligatorios' });
    }

    // Crea una conexión a la base de datos
    const connection = mysql.createConnection(credenciales);

    // Inserta el nuevo producto en la base de datos
    const sql = 'INSERT INTO productos (titulo, precio, descripcion, foto) VALUES (?, ?, ?, ?)';
    const values = [titulo, precio, descripcion, foto]; // Corrección de los nombres de variables

    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error al crear el producto:', err);
            return res.status(500).json({ message: 'Error al crear el producto' });
        }

        // Producto creado con éxito
        res.status(201).json({ message: 'Producto creado con éxito' });
    });

    // Cierra la conexión a la base de datos
    connection.end();
});

// Esta es la nueva ruta para buscar productos
app.get('/buscarProductos', (req, res) => {
    const searchTerm = req.query.term; // Obtiene el término de búsqueda de la consulta

    // Valida que se haya proporcionado un término de búsqueda
    if (!searchTerm) {
        return res.status(400).json({ message: 'Término de búsqueda no proporcionado' });
    }

    // Crea una conexión a la base de datos
    const connection = mysql.createConnection(credenciales);

    // Realiza una consulta SQL para buscar productos que coincidan con el término
    const sql = 'SELECT * FROM productos WHERE titulo LIKE ? OR descripcion LIKE ?'; // Corrección del nombre de la columna
    const values = [`%${searchTerm}%`, `%${searchTerm}%`];

    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error al buscar productos:', err);
            return res.status(500).json({ message: 'Error al buscar productos' });
        }

        // Envía los resultados de la búsqueda como respuesta
        res.json(results);
    });

    // Cierra la conexión a la base de datos
    connection.end();
});

// Ruta para eliminar un producto por su ID
app.delete('/eliminarProducto/:id', (req, res) => {
    const productoId = req.params.id; // Obtiene el ID del producto a eliminar

    // Valida que se haya proporcionado un ID válido
    if (!productoId) {
        return res.status(400).json({ message: 'ID de producto no proporcionado' });
    }

    // Crea una conexión a la base de datos
    const connection = mysql.createConnection(credenciales);

    // Realiza una consulta SQL para eliminar el producto por su ID
    const sql = 'DELETE FROM productos WHERE id = ?';
    const values = [productoId];

    connection.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error al eliminar el producto:', err);
            return res.status(500).json({ message: 'Error al eliminar el producto' });
        }

        if (result.affectedRows === 0) {
            // No se encontró ningún producto con el ID proporcionado
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        // Producto eliminado con éxito
        res.json({ message: 'Producto eliminado con éxito' });
    });

    // Cierra la conexión a la base de datos
    connection.end();
});


app.listen(5000, () => {
    console.log('Server running on port 5000');
});
