import adminService from "../service/admin.service.js"

class AdminControllers {
    async getAllAdmins(req, res, next) {
        try {
            const data = await adminService.getAllAdmins()
            if (data) {
                return res.status(200).json(data)
            }
        } catch (error) {
            next(error)
        }
    }
    async getAdminById(req, res, next) {
        try {
            const data = await adminService.getAdminById(req)
            if (data) {
                return res.status(200).json(data)
            }
        } catch (error) {
            next(error)
        }
    }
    async createAdmin(req, res, next) {
        try {
            const data = await adminService.createAdmin(req)
            if (data) {
                return res.status(200).json(data)
            }
        } catch (error) {
            next(error)
        }
    }
    async updateAdmins(req, res, next) {
        try {
            const data = await adminService.updateAdmins(req)
            if (data) {
                return res.status(200).json(data)
            }
        } catch (error) {
            next(error)
        }
    }
    async deleteAdmins(req, res, next) {
        try {
            const data = await adminService.deleteAdmins(req)
            if (data) {
                return res.status(200).json(data)
            }
        } catch (error) {
            next(error)
        }
    }   
}

export default new AdminControllers()