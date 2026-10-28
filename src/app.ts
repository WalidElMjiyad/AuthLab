import  express  from "express"
import authRouter from "./modules/auth-routes"

const app = express()
app.use("/auth" , authRouter)

export default app