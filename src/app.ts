import  express  from "express"
import authRouter from "./moudules/auth-routes"

const app = express()
app.use("/home" , authRouter)

app.listen(3000 , ()=>{
    console.log("Server listening on port 3000");
})