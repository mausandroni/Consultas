import React, { useState } from 'react';
import AgregarProducto from './AgregarProducto';
import Coleccion from './Coleccion';
//import { useState } from 'react';
function Productos() {
    //const [categorias, setCategorias] = useState(['Gaseosas', 'Galletitas', 'Arroz', 'Azúcar']);
    const [categorias, setCategorias] = useState([]);
    // eslint-disable-next-line
    /* const handleAgregar = () => {
        //setCategorias([...categorias, 'Cervezas']);
        
        setCategorias(['Cervezas', ...categorias]);
        //setCategorias(cat => [...cat, 'Cervezas']);
    } */
    
    return (
        <>
            <h1>Productos</h1>
            <AgregarProducto
                setCategorias={setCategorias}
            />
            <ol>
             {/*    {
                    categorias.map(categoria => {
                        return <li key={categoria}>{categoria}</li>
                    })
                } */}
            </ol>
            {/* <button 
                onClick={handleAgregar} 
                type="button" 
                className="btn btn-secondary">
                    Agregar Producto
            </button> */}
            <Coleccion categorias={categorias}/>
        </>
    )
}
export default Productos;