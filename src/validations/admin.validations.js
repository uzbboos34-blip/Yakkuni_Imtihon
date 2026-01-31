import Joi from "joi";

class AdminValidations {
    createAdminSchema = Joi.object({
        branch: Joi.string().required(),
        username: Joi.string().min(3).max(30).required(),
        password: Joi.string().min(6).required(),
        email: Joi.string().email().required(),
        birth_date: Joi.string().required(),    
        gender: Joi.string().valid("Erkak", "Ayol").required(),
        role: Joi.string().valid('Admin', 'SuperAdmin').default('Admin'),
    });

    updateAdminSchema = Joi.object({
        branch: Joi.string(),
        username: Joi.string().min(3).max(30),
        password: Joi.string().min(6),
        email: Joi.string().email(),
        birth_date: Joi.string(),
        gender: Joi.string().valid('Erkak', 'Ayol'),
        role: Joi.string().valid('Admin', 'SuperAdmin').default('Admin') 
    }).min(1);
}
export default new AdminValidations();