import { body } from "express-validator";

const userRegistrationValidator = () => {
    return [
        body('email')
        .trim()
        .notEmpty().withMessage("Email is required!!")
        .isEmail().withMessage("Email is Invalid!!"),

        body("username")
        .trim()
        .notEmpty().withMessage("Username is required!!")
        .isLength({min: 3}).withMessage("username should be atleast 3 chars")
        .isLength({max: 13}).withMessage("username should not exceed 13 chars")
    ]
}


const userLoginValidator = () => {
    return [
        body("email")
        .isEmail().withMessage("Email is not valid!!"),

        body("password")
        .notEmpty().withMessage("Password cannot be empty!!")
    ]
}


export {userRegistrationValidator, userLoginValidator}