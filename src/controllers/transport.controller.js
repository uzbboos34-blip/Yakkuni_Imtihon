import TransportService from "../service/transport.service.js";

class TransportControllers {
    async getAllTransports(req, res, next) {
        try {
            const transports = await TransportService.getAllTransports(req)
            if (transports) {
                return res.status(transports.status).json(transports)
            }
        } catch (error) {
            next(error)
        }
    }
    async createTransport(req, res, next) {
        try {
            const transport = await TransportService.createTransport(req)
            if (transport) {
                return res.status(transport.status).json(transport)
            }
        } catch (error) {
            next(error)
        }
    }
    async updateTransport(req, res, next) {
        try {
            const transport = await TransportService.updateTransport(req)
            if (transport) {
                return res.status(transport.status).json(transport)
            }
        } catch (error) {
            next(error)
        }
    }
    async deleteTransport(req, res, next) {
        try {
            const transport = await TransportService.deleteTransport(req)
            if (transport) {
                return res.status(transport.status).json(transport)
            }
        } catch (error) {
            next(error)
        }
    }       
        
}

export default new TransportControllers();