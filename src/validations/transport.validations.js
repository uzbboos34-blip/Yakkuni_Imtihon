import Joi from "joi";

class TransportValidations {
    createTransportSchema = Joi.object({
        branch: Joi.string().required(),
        model: Joi.string().required(),
        color: Joi.string().required(),
        img: Joi.any().required(),
        price: Joi.number().min(0).required()   
    });

    updateTransportSchema = Joi.object({
        branch: Joi.string(),
        model: Joi.string(),
        color: Joi.string(),
        img: Joi.string(),
        price: Joi.number().min(0).required()   
    }).min(1);
}

export default new TransportValidations();