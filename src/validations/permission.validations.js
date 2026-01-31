import Joi from "joi";

class PermissionValidations {
    createPermissionSchema = Joi.object({
        StaffId: Joi.string().required(),
        permissionModel: Joi.string().valid('Branch', 'Transport', 'Staff').required(),
        actions:  Joi.array().items(Joi.string().valid('GET','POST','PUT','DELETE')).default(['GET'])
    });
    updatePermissionSchema = Joi.object({
        StaffId: Joi.string(),
        permissionModel: Joi.string().valid('Branch', 'Transport', 'Staff'),
        actions: Joi.array().items(Joi.string().valid('GET', 'POST', 'PUT', 'DELETE'))
    }).min(1);
}

export default new PermissionValidations();