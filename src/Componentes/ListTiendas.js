import Tienda from './Tienda';

function ListTiendas(props) {

    let listTiendaRendered = props.elements.map(element => {
        
        return <Tienda
        key={element.id}
        value={element}
        addProductoToCarrito={props.fnAddCarrito}
      />
      
        });
                
                    const containerStyle = {
                        marginTop: '30px', // 
                      };
                    
                    return(
                        <div className="container" style={containerStyle}>
                        <div className='row'>{listTiendaRendered}
                        </div>
                        </div>
                    );
                   
                }
                
 export default ListTiendas;