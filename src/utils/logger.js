import winston from "winston";
import path from "path";

const logDirectory = path.join(process.cwd(), "src", "logs");

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
    ),
    transports: [
        new winston.transports.File({ filename: path.join(logDirectory, 'error.log'), level: 'error' }),
    ]
});

export default logger;