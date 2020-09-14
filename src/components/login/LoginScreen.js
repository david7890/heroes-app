import React, { useContext } from 'react'
import { authContext } from '../../auth/authContext'
import { types } from '../../types/types'

export const LoginScreen = ({history}) => {
    //extraer funcion
    //const {dispatch} = useContext(authContext)

    const handleLogin = () =>{
        history.push('/')

    }
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr></hr>
            <input 
                type="text" 
                placeholder="Escribe tu nombre" 
                className="form-control"
            >
            </input>
            <button
                className="btn btn-primary mt-3"
                onClick={handleLogin}
            >
                ENTRAR
            </button>
        </div>
    )
}
