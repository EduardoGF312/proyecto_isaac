import React from 'react'
import { GoogleLogout } from 'react-google-login';
import Swal from 'sweetalert2'

export const Logout = () => {
    const Logout = () => {
       console.log("SESIÓN TERMINADA GARCIA EDUARDO");
       Swal.fire({
          icon: 'success',
          title: 'Sesión terminada, adios!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
    }

  return (
    <div>
        <GoogleLogout
            clientId="889082775733-uft314q6mcdcam2in0dd7rd0nsq8uprc.apps.googleusercontent.com"
            buttonText={"CERRAR SESIÓN"}
            onLogoutSuccess={Logout}
         />
    </div>
  )
}
