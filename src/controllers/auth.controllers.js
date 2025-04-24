import { asyncHandler } from "../utils/async-handler.js"

const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body
    
    // validation -
    registrationValidation(req.body)

})

export {registerUser}