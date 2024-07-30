import React, { useEffect } from 'react'


import icono from '../../assets/vite.svg'
import { obtenerProductos } from '../../helpers/productos'
import { crearProducto } from '../../helpers/productos'
import { useGlobalContext } from '../../Context/GlobalContext'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom'
import ProductList from '../../Components/ProductList/ProductList'

const Home = () => {
    const { productos, getUserData, logout } = useGlobalContext()
    const user = getUserData()



    return (
        <div>
            {
                user
                    ?
                    <button onClick={logout}>Cerrar sesion</button>
                    :
                    <Link to={'/login'}>Login</Link>
            }
            {
                (user && user.role === 'admin')
                &&
                <>
                    <Link to={'/product/new'}>Crear producto</Link>
                    <Link to={'/cart'}>Carrito</Link>
                </>
            }
            {
                (user && user.role === 'user')
                &&
                <>
                    <Link to={'/cart'}>Carrito</Link>
                </>
            }

            <div className='imageContainer'>
                <img src="/imagenes/Juan.jpg" alt="" />
            </div>
            <h1>Elige nuestros productos <img src={icono} alt="" /></h1>
            <ProductList productos={productos} />
        </div>
    )
}

export default Home