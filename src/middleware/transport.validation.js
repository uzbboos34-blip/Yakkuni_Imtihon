import validation from "../validations/transport.validations.js";
import { BedRequestError } from "../utils/error.js";

class TransportValidation {
    create = (req, res, next) => {
        try {
            const data = {
                ...req.body,
                img: req.files
            };
            const {error} = validation.createTransportSchema.validate(data);
            
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
            const {error} = validation.updateTransportSchema.validate(req.body);
            if (error) {
                throw new BedRequestError(400, error.details[0].message)
            }
            next()
        } catch (error) {
            next(error)
        }
    }   
}
export default new TransportValidation();