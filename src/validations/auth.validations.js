import Joi from "joi";

class AuthValidations {
    registerSchema = Joi.object({
        branch: Joi.string().required(),
        username: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(6).required(),
        email: Joi.string().email().required(),
        birth_date: Joi.string().required(),    
        gender: Joi.string().valid("Erkak", "Ayol").required(),
        role: Joi.string().valid('Staff', 'Admin', 'SuperAdmin').default('Staff'),
        otp: Joi.number().required()
    });

    loginSchema = Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    }); 
}
export default new AuthValidations();