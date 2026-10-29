import { Router} from "express";
import {getStatus , getVersion , getDemo} from "./auth-controller";

const router = Router()


router.get("/status" , getStatus)
router.get("/version" , getVersion)
router.get("/demo-user/:id" , getDemo)


export default router