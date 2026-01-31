import { BedRequestError } from "../utils/error.js";
import validations from "../validations/branche.validations.js";

class BrancheValidation {
    create = (req, res, next) => {
        try {
            const {error} = validations.createBrancheSchema.validate(req.body);
            if (error) {
                throw new BedRequestError(400, error.details[0].message)
            }   
            next()
        } catch (error) {
            next(error)
        }
    }
    update = (req, res, next) => {
        try {
            const {error} = validations.updateBrancheSchema.validate(req.body);
            if (error) {
                throw new BedRequestError(400, error.details[0].message)
            }
            next()
        } catch (error) {
            next(error)
        }
    }   
}
export default new BrancheValidation();