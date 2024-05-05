
import { Button } from 'react-bootstrap'
import React, { useState } from 'react'


const Login = () => {

    const [inputUserName,setinputUserName] = useState("")

    const handleInputUsername = (event) => { 
        setinputUserName(event.target.value)
        if(inputUserName.toLowerCase().includes("o")){
            alert("Por favor, ¡Nombres de usuario sin la letra o!")
        }
    }

    const handleSubmitUsername = () => {
        if (inputUserName == "" || inputUserName.toLowerCase().includes("o")){
            alert("Usuario inválido para registrarse");
        }
        else{
            alert("¡Usuario registrado correctamente!")
        }
    }

    return (
        <>
            <input type='text' placeholder='Ingresá tu nombre de usuario' value={inputUserName} onChange={handleInputUsername} />
            <Button variant="dark" onClick={handleSubmitUsername}> Registrarse </Button>
            <p>Texto ingresado: {inputUserName}</p>
        </>
    )
}

export default Login