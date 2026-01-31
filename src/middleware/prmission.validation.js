import validation from "../validations/permission.validations.js";
import { BedRequestError } from "../utils/error.js";

class PermissionValidation {
    create = (req, res, next) => {
        try {
            const {error} = validation.createPermissionSchema.validate(req.body);
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
            const {error} = validation.updatePermissionSchema.validate(req.body);
            if (error) {
                throw new BedRequestError(400, error.details[0].message)
            }
            next()
        } catch (error) {
            next(error)
        }
    }   
}
export default new PermissionValidation();