import React from 'react'
import { GoogleLogin } from 'react-google-login';
import Swal from 'sweetalert2'

export const Log_in = () => {

   const logeado_exito = (res) => {
      console.log("LOGUEADO CON ÉXITO:", res.profileObj);
      Swal.fire({
         icon: 'success',
         title: 'BIENVENIDO APP UTD',
         footer: '<a href="https://utd.edu.mx/">Why do I have this issue?</a>'
      })
   }
   const fallo_login = (res) => {
      console.log("FALLO EN EL ACCESO:", res.profileObj);
      Swal.fire({
         icon: 'error',
         title: 'Oops...',
         text: 'Las credenciales son incorrectas',
         footer: '<a href="">Why do I have this issue?</a>'
      })
   }

   return (
         <GoogleLogin
            clientId="889082775733-uft314q6mcdcam2in0dd7rd0nsq8uprc.apps.googleusercontent.com"
            buttonText="INGRESAR"
            onSuccess={logeado_exito}
            onFailure={fallo_login}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            className="googlelogin"
         />
   )
}
