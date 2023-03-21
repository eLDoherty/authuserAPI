import { existName, existEmail, isHasSpecialChar } from "../../Helper.js";

export const RegisterValidation = async (req, res, next) => {

    const { username, email, password, confPassword } = req.body;

    const errors = {};
    
    if(await existName(username)) errors['username'] = 'Username already used';
    if(await existEmail(email)) errors['email'] = "Email already used";
    if(username.length < 6) errors['username'] = "Username should atleast 6 char";
    if(password !== confPassword) errors['password'] = "Password doesn't match";
    if(password.length < 6) errors['password'] = "Your password to short";
    if(isHasSpecialChar(username) && isHasSpecialChar(email)) errors['char'] = "Check again, Special char not allowed!";

    if(Object.keys(errors).length === 0) {
        next();
    } else {
        res.send({errors})
    }
}
