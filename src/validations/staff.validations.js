import Joi from "joi";

class StaffValidations {
    updateStaffSchema = Joi.object({
        branch: Joi.string(),
        username: Joi.string().min(3).max(30),
        password: Joi.string().min(6),
        email: Joi.string().email(),
        birth_date: Joi.string(),
        gender: Joi.string().valid('Erkak', 'Ayol'),
        role: Joi.string().valid('Staff', 'Admin', 'SuperAdmin').default('Staff') 
    }).min(1);
}
export default new StaffValidations();