import PermissionService from "../service/permission.service.js";

class PermissionController {
    async getAllPermissions(req, res, next) {
        try {
            const permissions = await PermissionService.getAllPermissions()
            if (permissions) {
                return res.status(permissions.status).json(permissions)
            }
        } catch (error) {
            next(error)
        }
    }

    async ownPermissions(req, res, next) {
        try {
            const permissions = await PermissionService.ownPermissions(req)
            if (permissions) {
                return res.status(permissions.status).json(permissions)
            }
        } catch (error) {
            next(error)
        }
    }       
    async createPermission(req, res, next) {
        try {
            const permission = await PermissionService.createPermission(req)
            if (permission) {
                return res.status(permission.status).json(permission)
            }
        } catch (error) {
            next(error)
        }
    }
    async updatePermission(req, res, next) {
        try {
            const permission = await PermissionService.updatePermission(req)
            if (permission) {
                return res.status(permission.status).json(permission)
            }
        } catch (error) {
            next(error)
        }
    }
    async deletePermission(req, res, next) {
        try {
            const permission = await PermissionService.deletePermission(req)
            if (permission) {
                return res.status(permission.status).json(permission)
            }
        } catch (error) {
            next(error)
        }
    }
}

export default new PermissionController();