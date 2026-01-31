import logger from "./logger.js";


export default (error, req, res, next) =>{
        if (error.status && error.status < 500) {
            return res.status(error.status).json({
            status:error.status,
            message:error.message,
            name:error.name
            })
        }else{
        logger.error(error)
        return res.status(500).json({
            status:500,
            message:"InternalServerError"
        })
    }
}