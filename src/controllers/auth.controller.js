import AuthService from "../service/auth.service.js"

class AuthControllers {
    async register(req, res, next) {
        try {
            const data = await AuthService.register(req)
            if (data) {
                return res.status(data.status).json(data)
            }
        } catch (error) {
            next(error)
        }
    }

    async login(req, res, next) {
        try {
            const data = await AuthService.login(req)
            if (data) {
                return res.status(data.status).json(data)
            }
        } catch (error) {
            next(error)
        }
    }
}

export default new AuthControllers();