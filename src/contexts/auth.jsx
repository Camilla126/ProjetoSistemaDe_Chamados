import { useState, createContext, useEffect } from 'react'
import { auth, db } from '../services/firebaseConnection'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from "firebase/firestore"

export const AuthContext = createContext({});


function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false)

    function signIn(email, password) {
        alert("logado")
    }

    function signUp(email, password, name) {
        console.log(name)
    }

    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                signIn,
                signUp
            }}

        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;