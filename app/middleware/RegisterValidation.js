import { existName, existEmail } from "../../Helper.js";

export const RegisterValidation = async (req, res, next) => {

    const { username, email, password, confPassword } = req.body;

    const errors = {
        username: false,
        email: false
    }
    
    if( await existName( username ) ) errors.username = 'Username already used';
    if( await existEmail( email ) ) errors.email = "Email already used";

    if( errors.username === false && errors.email === false ) {
        next();
    } else {
        res.send({ errors })
    }
}
