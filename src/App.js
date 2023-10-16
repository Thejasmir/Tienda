import Saludo from './Componentes/Saludo';
import Navegacion from './Componentes/Navegacion';
import ListTiendas from './Componentes/ListTiendas';
import ListCarritos from './Componentes/ListCarritos';
import dataTienda from './Data/Tienda';
import { useState } from 'react';

function App() {
  const [listTiendas, setListTiendas] = useState(dataTienda);
  const [listTiendaCarritos, setListTiendaCarritos] = useState([]);

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


  // Función para eliminar un elemento del carrito
  function eliminarDelCarrito(productoId) {
    const nuevoCarrito = listTiendaCarritos.filter(element => element.id !== productoId);
    setListTiendaCarritos(nuevoCarrito);
  }

  return (
    <div>
      <Navegacion />
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <ListTiendas elements={listTiendas} fnAddCarrito={addProductoToCarrito} />
          </div>
          <div className="col-md-3">
            <ListCarritos elements={listTiendaCarritos} eliminarDelCarrito={eliminarDelCarrito} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
