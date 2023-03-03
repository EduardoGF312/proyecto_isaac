import React from 'react';
import '../App.css';
import Swal from 'sweetalert2'
import Button from 'react-bootstrap/Button';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Form from 'react-bootstrap/Form';
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Log_in } from '../components/Log_in';
import { Logout } from '../components/Logout';
import { useState, useEffect } from 'react'
import { gapi } from 'gapi-script'

function Login() {

    const key_login = "889082775733-uft314q6mcdcam2in0dd7rd0nsq8uprc.apps.googleusercontent.com";

    const [user, setUser] = useState({});

    useEffect(() => {
        const start = () => {
            gapi.Auth2.init({
                clientId: key_login,
            });
        }
        gapi.load("client:auth2", start)
    }, [])

    const logeado_exito = (respuesta_exitosa) => {
        console.log("LOGUEADO CON ÉXITO:", respuesta_exitosa.profileObj);
        setUser(respuesta_exitosa.profileObj);
        Swal.fire({
            icon: 'success',
            title: 'BIENVENIDO APP UTD',
        })
    }

    const fallo_login = (res) => {
        console.log("FALLO EN EL ACCESO:", res.profileObj);
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'LAS CREDENCIALES SON ERRONEAS',
        })
    }

     const Logout = () => {
        console.log("SESIÓN TERMINADA GARCIA EDUARDO");
        Swal.fire({
           icon: 'success',
           title: 'Sesión terminada, adios!',
           footer: '<a href="">Why do I have this issue?</a>'
         })
     }

    return (
        <>
            <h1 className='text-center mt-3'>APP PARCILA II</h1>
            <Form className='w-50 mx-auto mt-5 formulario'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='fw-bold'>Correo Electronico: </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='fw-bold'>Password: </Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" style={{ display: "flex", justifyContent: "space-between" }} controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordarme" />
                    <Form.Text>
                        <a href='#'>Olvidaste tu contraseña?</a>
                    </Form.Text>
                </Form.Group>
                <Button className="w-100 fw-bold" variant="primary" type="submit">
                    INGRESAR
                </Button>
                <Form.Group className='text-center mt-4'>
                    No eres usuario? <a href='#'>Registrarse</a>
                    <p className='mt-3'>o ingresa con:</p>
                </Form.Group>
                <Form.Group className='text-center'>
                    <FontAwesomeIcon icon={faGoogle} color="blue" className='me-4' />
                    <FontAwesomeIcon icon={faFacebook} color="blue" />

                    <GoogleLogin
                        clientId={key_login}
                        buttonText="INGRESAR"
                        onSuccess={logeado_exito}
                        onFailure={fallo_login}
                        cookiePolicy={'single_host_origin'}
                        isSignedIn={true}
                        className="googlelogin"
                    />
                    <GoogleLogout
                        clientId={key_login}
                        buttonText={"CERRAR SESIÓN"}
                        onLogoutSuccess={Logout}
                    />
                </Form.Group>
            </Form>

            <div className="datos" class={user ? "profile" : "hidden"}>
                <img src={user.imageUrl} alt="" />
                <h4>{user.name}</h4>
                <h4>{user.email}</h4>
            </div>
        </>
    )
}
export default Login;

