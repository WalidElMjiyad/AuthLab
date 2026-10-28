import { Router} from "express";
import {getStatus} from "./auth-controller";

const router = Router()


router.get("/status" , getStatus)


export default router