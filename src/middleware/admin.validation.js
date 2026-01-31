import validation from "../validations/admin.validations.js";
import { BedRequestError } from "../utils/error.js";

class AdminValidation {

    create = (req, res, next) => {
        try {
            const {error} = validation.createAdminSchema.validate(req.body);
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
            const {error} = validation.updateAdminSchema.validate(req.body);
            if (error) {
                throw new BedRequestError(400, error.details[0].message)
            }
            next()
        } catch (error) {
            next(error)
        }
    }   
}
export default new AdminValidation();