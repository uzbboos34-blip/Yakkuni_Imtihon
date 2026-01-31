import { BedRequestError } from "../utils/error.js";
import validations from "../validations/auth.validations.js";
class AuthValidations {
    register = (req, res, next) => {
        try {
            const {error} = validations.registerSchema.validate(req.body); 
            if (error) {
                throw new BedRequestError(400, error.details[0].message)
            }
            next()
        } catch (error) {
            next(error)
        }
    }    

    login = (req, res, next) => {
        try {
            const {error} = validations.loginSchema.validate(req.body); 
            if (error) {
                throw new BedRequestError(400, error.details[0].message)
            }
            next()
        } catch (error) {
            next(error)
        }
    } 
    
}
export default new AuthValidations();