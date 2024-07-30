import { createContext, useContext, useState } from "react";
import { eliminarProductoPorId, obtenerProductos } from "../helpers/productos";
import { useNavigate } from "react-router-dom";

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
    const [productos, setProductos] = useState(obtenerProductos())
    const navigation = useNavigate()

    const handleDeleteProduct = (id) => {
        setProductos(eliminarProductoPorId(id))
        navigation('/')
    }

    const getUserData = () => {
        const user = JSON.parse(localStorage.getItem('user'))
        return user
        /*  if(user){
             return user
         }
         else{
             navigation('/login')
         } */
    }

    const logout = () => {
        localStorage.removeItem('user')
        navigation('/login')
    }

    return (
        <GlobalContext.Provider value={
            {
                productos: productos,
                handleDeleteProduct: handleDeleteProduct,
                getUserData: getUserData,
                logout: logout
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    /*Esto devolvera el objeto value proveido por el GlobalContext  */
    return useContext(GlobalContext)
}

/* 
const globalContextValues = useGlobalContext()
Retorna {nombre: nombre} 
*/