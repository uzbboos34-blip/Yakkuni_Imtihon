import staffService from "../service/staff.service.js"

class StaffControllers {
    async getAllStaffs(req, res, next) {
        try {
            const data = await staffService.getAllStaffs()
            if (data) {
                return res.status(200).json(data)
            }
        } catch (error) {
            next(error)
        }
    }
    async getStaffById(req, res, next) {
        try {
            const data = await staffService.getStaffById(req)
            if (data) {
                return res.status(200).json(data)
            }
        } catch (error) {
            next(error)
        }
    }
    async updateStaff(req, res, next) {
        try {
            const data = await staffService.updateStaff(req)
            if (data) {
                return res.status(200).json(data)
            }
        } catch (error) {
            next(error)
        }
    }
    async deleteStaff(req, res, next) {
        try {
            const data = await staffService.deleteStaff(req)
            if (data) {
                return res.status(200).json(data)
            }
        } catch (error) {
            next(error)
        }
    }   
}

export default new StaffControllers()