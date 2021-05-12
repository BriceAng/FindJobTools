import React, { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const Log = (props) => {
    const [signUpModal, setSignUpModal] = useState(props.signUp);
    const [signInModal, setSignInModal] = useState(props.signIn);

    const handleModals = (e) => {
        if (e.target.id === "register") {
            setSignInModal(false);
            setSignUpModal(true);
        } else if (e.target.id === "connection") {
            setSignInModal(true)
            setSignUpModal(false);
        }
    }
    return (
        <div className="connection-form">
            <div className="form-container">
                <ul>
                    <li onClick={handleModals} id="connection" className={signInModal ? "active-btn" : null} >Se connecter</li> 
                    <li onClick={handleModals} id="register" className={signUpModal ? "active-btn" : null} >S'inscrire</li>
                </ul>
                {signInModal && <SignInForm />}
                {signUpModal && <SignUpForm />}
            </div>
        </div>
    );
};

export default Log;