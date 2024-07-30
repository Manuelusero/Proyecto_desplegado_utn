import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { eliminarProductoPorId, obtenerProductoPorId } from '../../helpers/productos'
import { useGlobalContext } from '../../Context/GlobalContext'

const Detail = () => {
    const { producto_id } = useParams();
    const { handleDeleteProduct } = useGlobalContext();
    const navigate = useNavigate();

    const producto = obtenerProductoPorId(producto_id);

    if (!producto) {
        return <div>Producto no encontrado</div>;
    }
    // const Detail = () => {
    //     /* useParams retorna un objeto con los parametros de busqueda */
    //     const parametros = useParams()
    //     const { handleDeleteProduct } = useGlobalContext()

    //     console.log(parametros)


    const {
        nombre,
        descripcion,
        precio,
        id,
        stock,
        codigo,
        categoria,
        thumbnail
    } = obtenerProductoPorId(parametros.producto_id)



    return (
        <div>
            <h1>{nombre}</h1>
            <img src={thumbnail} />
            <span>Categoria: {categoria}</span>
            <p>
                {descripcion}
            </p>
            <span>
                <b>Precio</b>:{precio}
            </span>
            <br />
            <span>
                <b>Unidades disponibles</b>:
                {stock}
            </span>
            <br />
            <button>Comprar</button>
            <button onClick={() => handleDeleteProduct(id)}>Eliminar</button>
        </div>
    )
}

export default Detail
