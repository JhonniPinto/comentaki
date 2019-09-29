import React, {createContext, useState} from 'react'
import firebase from '../firebase'

export const AuthContext = createContext()

const useGetUser = () => {
    const [user, setUser] = useState(null)
    firebase
        .auth()
        .onAuthStateChanged(currentUser => {
            if (currentUser) {
                setUser(currentUser)
            } else {
                setUser(null)
            }
        })
    return user
}

const useCreateUser = () => {
    const [state, setState] = useState({success: '', error: ''})
    const create = (email, passwd) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, passwd)
                .then((user) => user && setState({...state, success: true}))
                .catch(e => setState({...state, error: e.message}))
    }
    return [state, create]
}

const useSignInUser = () => {
    const [state, setState] = useState({success: '', error: ''})
    const signIn = (email, passwd) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, passwd)
                .then(() => setState({...state, success: true}))
                .catch(e => setState({...state, error: e.message}))
    }
    return [state, signIn]
}


export const AuthProvider = ({children}) => {
    const user = useGetUser()
    const [createState, createMethod] = useCreateUser()
    const [signInState, signInMethod] = useSignInUser()
    const signOut = () => {
        firebase
            .auth()
            .signOut()
    }
    return (
        <AuthContext.Provider value={{
            user, 
            create: {createState, createMethod}, 
            sign: {signInState, signInMethod},
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}