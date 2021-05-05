module.exports.signUpErrors = (err) => {
    let errors = { firstName: '', lastName: '', email: '', password: '' }

    if (err.message.includes('firstName'))
        errors.firstName = "Votre prénom doit contenir au moins 2 caractères";
    if (err.message.includes('lastName'))
        errors.lastName = "Votre nom doit contenir au moins 2 caractères";
    if (err.message.includes('email'))
        errors.email = "Email incorrect";
    if (err.message.includes('password'))
        errors.password = "Le mot de passe doit faire 6 caractères minium";
    if (err.code === 11000)
        errors.email = "Cet email est déjà enregistré";

    return errors
}

module.exports.signInErrors = (err) => {
    let errors = { email: '', password: '' }

    if (err.message.includes("email")) 
        errors.email = "Email inconnu";
    if (err.message.includes("password"))
        errors.password = "Le mot de passe est incorrect";

    return errors
}