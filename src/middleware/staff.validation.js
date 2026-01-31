import validation from "../validations/staff.validations.js";
import { BedRequestError } from "../utils/error.js";

class StaffValidation {
    update = (req, res, next) => {
        try {
            const {error} = validation.updateStaffSchema.validate(req.body);
            if (error) {
                throw new BedRequestError(400, error.details[0].message)
            }
            next()
        } catch (error) {
            next(error)
        }
    }   
}
export default new StaffValidation();