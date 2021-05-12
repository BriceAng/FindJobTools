import React, { useState } from 'react';
import axios from 'axios';
import SignInForm from './SignInForm';

const SignUpForm = () => {
    const [formSubmit, setFormSubmit] = useState(false)
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [controlPassword, setControlPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        const terms = document.getElementById('terms');
        const firstNameError = document.querySelector('.firstname.error');
        const lastNameError = document.querySelector('.lastname.error');
        const emailError = document.querySelector('.email.error');
        const passwordError = document.querySelector('.password.error');
        const passwordConfirmError = document.querySelector('.password-confirm.error');
        const termsError = document.querySelector('.terms.error');

        passwordConfirmError.innerHTML = "";
        termsError.innerHTML = "";

        if (password !== controlPassword || !terms.checked) {
            if (password !== controlPassword) passwordConfirmError.innerHTML = "Les mots de passe ne correspondent pas";
            if (!terms.checked) termsError.innerHTML = "Veuillez valider les conditions générales";
        } else {
            await axios({
                method: "post",
                url: `${process.env.REACT_APP_API_URL}api/user/register`,
                data: {
                    firstName,
                    lastName,
                    email,
                    password
                }
            })
                .then((res) => {
                    if (res.data.errors) {
                        firstNameError.innerHTML = res.data.errors.firstName;
                        lastNameError.innerHTML = res.data.errors.lastName;
                        emailError.innerHTML = res.data.errors.email;
                        passwordError.innerHTML = res.data.errors.password;
                    } else {
                        setFormSubmit(true);
                    }
                })
                .catch((err) => console.log(err));
        }
    }

    return (
        <>
            {formSubmit ? (
                <>
                    <SignInForm />
                    <h4>Enregistrement réussi</h4>
                </>
            ) : (
                <form action="" onSubmit={handleRegister} id="sign-up-form" >

                    <label htmlFor="lastname">Nom</label>
                    <br />
                    <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastName}
                    />
                    <div className="lastname error"></div>

                    <label htmlFor="firstname">Prénom</label>
                    <br />
                    <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                    <div className="firstname error"></div>

                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                        type="text"
                        name="email"
                        id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <div className="email error"></div>

                    <label htmlFor="password">Mot de passe</label>
                    <br />
                    <input
                        type="password"
                        name="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <div className="password error"></div>

                    <label htmlFor="password-conf">Confirmer mot de passe</label>
                    <br />
                    <input
                        type="password"
                        name="password-conf"
                        id="password-conf"
                        onChange={(e) => setControlPassword(e.target.value)}
                        value={controlPassword}
                    />
                    <div className="password-confirm error"></div>

                    <input type="checkbox" id="terms" />
                    <label htmlFor="tems" >J'accepte les <a href="/" target="_blank" rel="noopener noreferrer">condition d'utilisation général</a></label>
                    <br />
                    <div className="terms error"></div>

                    <input type="submit" value="Valider l'inscription" />
                </form>
            )}
        </>
    );
};

export default SignUpForm;