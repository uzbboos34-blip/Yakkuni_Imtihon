import Permission from "../models/permission.js";
import { UnauthorizedError } from "../utils/error.js";

export const checkPermission = (model, action) => {
    return async (req, res, next) => {
        try {
            const user = req.user;
            
            if (user.role === "SuperAdmin") {
                return next();  
            }
            const permission = await Permission.findOne({
            StaffId: user.id,
            permissionModel: model,
            actions: action
            })
        
            if (!permission) {
            throw new UnauthorizedError(403, "You do not have permission");
            }

            next();
        } catch (error) {
            next(error);
        }
    };
};
