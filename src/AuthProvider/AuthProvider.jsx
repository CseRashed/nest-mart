import React, { createContext } from 'react'
import Swal from 'sweetalert2'
//create context
export const AuthContext = createContext()
export default function AuthProvider({ children }) {
    const logIn = (email) => {
        console.log(email)
    }

    const registerUser = (name, email, password) => {
        if (name && email && password) {
            Swal.fire({
                title: `User Register Successfully`,
                icon: "success",
                draggable: true
            });


        }else{
            Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: '<a href="#">Why do I have this issue?</a>'
});
        }

    }
    const info = { logIn, registerUser }
    return (
        //wrap children
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    )
}
