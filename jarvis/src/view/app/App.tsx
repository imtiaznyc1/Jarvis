import React from 'react'
import logoTransp from "../../assets/jarvisLogoTransparent.png"
import googleIcon from "../../assets/googleIcon.png"
import './app.css';

export const App = () => {
    return(
        <div>
            <h1>Hello! I am pleased to be assisting you today...</h1>
            <img className="logo" src = {logoTransp} alt = "Jarvis Logo" />

            <p>To begin, please proceed by logging in with Google to enable me to provide you with 
                important information from your account.
            </p>
            <img className="dLogo" src = {googleIcon} alt="Discord Logo" />
            <p className='discordTag'>L o g  &nbsp;  I n</p>
        </div>
    )
}
