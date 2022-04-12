import React, {createContext, useContext, useReducer} from 'react';
import AuthReducer from './AuthReducer';
// import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithGoogle, onAuthStateChanged} from 'firebase/auth';
// import {auth} from '../../Firebase-Config/firebase-config';

const INITIAL_STATE = {
    isAuthenticated: false,
    user: {},
    error: null,
}
// const UserContext = createContext();
export const AuthContext = createContext(INITIAL_STATE);

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    // const createUser= (email, password) => {
    //     return createUserWithEmailAndPassword( auth, email, password)
    // }
    return(
        <AuthContext.Provider
         value={{
             user:state.user,
             isAuthenticated: state.isAuthenticated,
             error: state.error,
            dispatch
            }}>
            {children}
         </AuthContext.Provider>
        //  <UserContext.Provider value={createUser}>
        //     {children}
        //  </UserContext.Provider>
    )
}