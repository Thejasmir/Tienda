import Navegacion from './Componentes/Navegacion';
import ListTiendas from './Componentes/ListTiendas';
import ListCarritos from './Componentes/ListCarritos';
import dataTienda from './Data/Tienda';
import CrearProducto from './Componentes/CrearProducto';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditarProducto from './Componentes/EditarProducto'; // Asegúrate de importar el componente EditarProducto
import DetallesProducto from './Componentes/DetallesProducto';

function App() {
  const [listTiendas, setListTiendas] = useState(dataTienda);
  const [listTiendaCarritos, setListTiendaCarritos] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mostrarListCarritos, setMostrarListCarritos] = useState(false);

    // Función para agregar un producto al carrito
function addProductoToCarrito(element) {
  // Verificar si el producto ya está en el carrito
  if (!listTiendaCarritos.some(item => item.id === element.id)) {
    setListTiendaCarritos([...listTiendaCarritos, element]);
  } else {
    // Producto ya en el carrito, mostrar un mensaje o realizar alguna acción
    console.log('El producto ya está en el carrito.');
  }
}


function nuevoProducto(element){
  setListTiendas([...listTiendas, element]);
}

  // Función para eliminar un elemento del carrito
  function eliminarDelCarrito(productoId) {
    const nuevoCarrito = listTiendaCarritos.filter(element => element.id !== productoId);
    setListTiendaCarritos(nuevoCarrito);
  }

   // Función para mostrar u ocultar el formulario
   function toggleFormulario() {
    setMostrarFormulario(!mostrarFormulario);
  }

   // Función para mostrar u ocultar la lista de carritos
   function toggleListCarritos() {
    setMostrarListCarritos(!mostrarListCarritos);
  }

  return (
    <Router>
      <div>
        <Navegacion
          toggleFormulario={toggleFormulario}
          toggleListCarritos={toggleListCarritos}
          mostrarFormulario={mostrarFormulario}
          mostrarListCarritos={mostrarListCarritos}
        />
              <Routes>
          <Route path="/" element={<div className="container">
            <div className="row">
              <div className={`col-md-${mostrarFormulario ? '9' : mostrarListCarritos ? '9' : '12'}`}>
                <ListTiendas elements={listTiendas} fnAddCarrito={addProductoToCarrito} />
              </div>
              {mostrarFormulario && (
                <div className="col-md-3">
                  <CrearProducto fnNuevoProducto={nuevoProducto} />
                </div>
              )}
              {mostrarListCarritos && !mostrarFormulario && (
                <div className="col-md-3">
                  <ListCarritos elements={listTiendaCarritos} eliminarDelCarrito={eliminarDelCarrito} />
                </div>
              )}
            </div>
          </div>} />
          <Route path="/editar/:productId" element={<EditarProducto />} />
          <Route path="/detalles/:productId" element={<DetallesProducto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
