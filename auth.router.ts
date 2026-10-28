import { Router} from "express";


const router = Router()

router.get("/hello" , (req , res)=>{
    res.json({
        name : "Authlab"
    })
})

router.get("/about" , (req , res)=>{
    res.json({
        project : "Authlab"
    })
})


export default router