import React, {createContext, useContext, useReducer} from 'react';
import AuthReducer from './AuthReducer';

const INITIAL_STATE = {
    isAuthenticated: false,
    user: {},
    error: null,
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

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
    )
}