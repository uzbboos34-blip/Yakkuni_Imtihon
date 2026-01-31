import express from "express";
import { config } from "dotenv";
import { connectDB } from "./database/config.js";
import errorHandler from "./utils/errorHandler.js";
import indexRouter from "./routers/index.js";
import fileupload from "express-fileupload";
config()

const app = express()
app.use(express.json())
app.use(fileupload())
connectDB()

app.use(indexRouter.branchRouter)
app.use(indexRouter.transparentRouter)
app.use(indexRouter.otpRouter)
app.use(indexRouter.permissionRouter)
app.use(indexRouter.staffRouter)
app.use(indexRouter.authRouter)
app.use(indexRouter.adminRouter)


app.use(errorHandler)
app.listen(process.env.PORT, ()=> console.log("Server is running...."))