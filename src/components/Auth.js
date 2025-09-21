import {auth, provider} from '../firebase-config'
import { signInWithPopup } from 'firebase/auth'
import Cookies from 'universal-cookie'
const cookies = new Cookies();

export const Auth = (props) => {
    const {setIsAuth} = props;

import React from 'react'
import '../styles/Auth.css'
export const Auth = () => {
    const signInWithGoogle = () => {
        try {
       const result = await signInWithPopup(auth, provider)
       console.log(result);
       cookies.set("auth-token", result.user.refreshToken);
         setIsAuth(true);
    } catch (error) {
    return <div className="auth">
        <p>Sign in with Google to continue</p>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>