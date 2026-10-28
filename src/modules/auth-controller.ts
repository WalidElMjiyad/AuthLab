import type { Request , Response } from "express";
import {getAuthStatus} from "./auth-service"

export function getStatus (req : Request , res : Response):void {
    const data = getAuthStatus()
    res.status(200).json(data)
}
