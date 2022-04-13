import axios from 'axios';
import { onAuthStateChanged } from 'firebase/auth';
import React, {createContext, useContext, useEffect, useReducer, useState} from 'react';
import { authentication } from '../../Firebase/Firebase';
import AuthReducer from './AuthReducer';
import { useNavigate } from 'react-router-dom';
// import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithGoogle, onAuthStateChanged} from 'firebase/auth';
// import {auth} from '../../Firebase-Config/firebase-config';
import { signOut } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user')) || {},
    isAuthenticated: false,
    error: false,
}
// const UserContext = createContext();
export const AuthContext = createContext(INITIAL_STATE);

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    // const createUser= (email, password) => {
    //     return createUserWithEmailAndPassword( auth, email, password)
    // }

    const [user, setUser]= useState(null);
    const [userData, setUserData] = useState(null);
    const [LoadingInitail, setLoadingInitail]= useState(true)


    useEffect (()=>{
        onAuthStateChanged(authentication, async(user)=>{
            if(user){
                setUser (user);
                const getUserData= async()=>{
                    const token= await authentication.currentUser.getIdToken();
                    await axios
                    .post(`http://127.0.0.1:5000/api/auth/register`)
                    .then(res=>{
                        setUserData(res.data)
                    })
                    .catch ((err)=> {
                        console.log(err.response)
                    })
                    
                    
                }
                await getUserData();
            }
            else{
                setUser(null);
                setUserData(null);
            }
            setLoadingInitail(false);
        })
    })
    let info = JSON.parse (localStorage.getItem('user'));
    const Navigate= useNavigate();
    console.log(info);
     const logOut = async() => {
         await signOut(authentication).catch(error => {
             console.log(error);
         })
        localStorage.clear('user');
        dispatch({
            type: 'LOGOUT',
        })
        Navigate('/login');
    }
   
    const signInWithGoogle= async() => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(authentication,provider).then(async (result)=>{
            const user = result.user;
            await axios 
            .post (`http://127.0.0.1:5000/api/auth/login`, {
                email: user.email,
                firstName: user.displayName.spilit(' ')[0],
                lastName: user.displayName.split(' ')[1],
                uid: user.uid,

            })
            .then(res=>{
                console.log(res.data);
                Navigate('/home');
            })
            .catch((err)=>{
                console.log(err);
                setUser(null);
                setUserData(null);
                console.log(err)

            });
        })
    }


    return(
        <AuthContext.Provider
         value={{
             logOut,
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