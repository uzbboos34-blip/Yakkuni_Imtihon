import Joi from "joi";

class BrancheValidations {

    createBrancheSchema = Joi.object({
        name: Joi.string().required(),
        address: Joi.string().required()
    });
    
    updateBrancheSchema = Joi.object({
        name: Joi.string(),
        address: Joi.string()
    }).min(1);
}
export default new BrancheValidations();