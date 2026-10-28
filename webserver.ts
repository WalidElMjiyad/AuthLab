import  express  from "express"
import authRouter from "./auth.router.ts"






// import express , {Request, Response , NextFunction}from "express"


// app.use(express.json())

// function handller( req : Request, res : Response , next : NextFunction ): void {
    //     console.log(`${req.method} and ${req.baseUrl} and ${req.path}`)
    //     next()
    // }
    
    // app.use(handller)
    
    
// app.post("/home/users" , (req , res)=>{
//     console.log(req.body);
//     res.json({name:"walid" , id : 11})
// })

const app = express()
app.use("/home" , authRouter)



app.listen(3000 , ()=>{
    console.log("Server listening on port 3000");
})


