import React from 'react'
import firebaseApp from '../../Services/Firebase'
import FIREBASE_AUTH_PROVIDERS from '../../Services/FirebaseAuth'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import './Login.css'

const Login = () => {
    const uiConfig = {
        signInOptions: [
            FIREBASE_AUTH_PROVIDERS.GOOGLE,
            FIREBASE_AUTH_PROVIDERS.EMAIL
        ],
        signInSuccessUrl: '/tracker'
    }
    return(
        <div className="Login">
            <h1>Welcome to Organize My Apps!</h1>
            <h4>A tool to track your employment applications</h4>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()}/>
        </div>
    )
}

export default Login