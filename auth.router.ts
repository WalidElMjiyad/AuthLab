import { Router} from "express";
import func from "./controller/getinfo.ts";

const router = Router()

router.get("/hello" , func.getName)

router.get("/about" , func.getInfo)


export default router