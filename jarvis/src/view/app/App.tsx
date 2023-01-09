import React from 'react'
import logo from '../../assets/jarvisLogo.jpg'
export const App = () => {
    return(
        <div>
            <h1>Hello! I am pleased to be assisting you today...</h1>
            <p>To begin, please proceed by logging into discord to enable me to provide you with 
                important information from your account. If you wish not to login, you may proceed without doing so.
            </p>
            <img src = {logo} alt = "Logo" />
        </div>
    )
}
