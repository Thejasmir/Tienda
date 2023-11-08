import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';

function EditarProducto({ handleActualizarProducto }) {
  const { productId } = useParams();
  const [editedProduct, setEditedProduct] = useState(null);

  useEffect(() => {
    const obtenerDetallesProducto = async () => {
      try {
        const response = await Axios.get(`http://localhost:5000/obtenerProducto/${productId}`);
        setEditedProduct(response.data);
      } catch (error) {
        console.error('Error al obtener los detalles del producto:', error);
      }
    };

    obtenerDetallesProducto();
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editedProduct) {
      try {
        const response = await Axios.put(
          `http://localhost:5000/actualizarProducto/${editedProduct.id}`,
          editedProduct
        );
        console.log('Producto actualizado exitosamente:', response.data);
        handleActualizarProducto(editedProduct);
      } catch (error) {
        console.error('Error al actualizar el producto:', error);
      }
    }
  };

  return (
    <div>
      <h2>Editar Producto</h2>
      <form onSubmit={handleSubmit}>
        {editedProduct && (
          <>
            <div className="form-group">
              <label>Título:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Título"
                value={editedProduct.titulo}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, titulo: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Precio:</label>
              <input
                type="number"
                className="form-control"
                placeholder="Precio"
                value={editedProduct.precio}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, precio: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Descripción:</label>
              <textarea
                className="form-control"
                placeholder="Descripción"
                value={editedProduct.descripcion}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, descripcion: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Marca:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Marca"
                value={editedProduct.marca}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, marca: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Color:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Color"
                value={editedProduct.color}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, color: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Recomendado:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Recomendado"
                value={editedProduct.recomendado}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, recomendado: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>Estado:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Estado"
                value={editedProduct.estado}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, estado: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label>URL de la foto:</label>
              <input
                type="text"
                className="form-control"
                placeholder="URL de la foto"
                value={editedProduct.foto}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, foto: e.target.value })
                }
              />
            </div>
          </>
        )}
        <div className="form-buttons">
          <button type="submit" className="btn btn-primary">
            Actualizar
          </button>
          <Link to="/" className="btn btn-secondary">
            Atrás
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EditarProducto;


