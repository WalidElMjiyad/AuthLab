import type { Request , Response } from "express";
import getV , {getAuthStatus , getPublicUser} from "./auth-service"

export function getStatus (req : Request , res : Response):void {
    const data = getAuthStatus()
    res.status(200).json(data)
}

export function getVersion(req : Request , res : Response): void
{
    const version = getV()
    res.status(200).json(version)
}

export function getDemo(req : Request , res : Response): void
{
    const id = Number(req.params.id)
    if (!Number.isInteger(id) || id <= 0)
    {
        res.status(400).json({
            message : "Invalid user ID"
        })
        return
    }

    const user = getPublicUser(id)
    if (!user)
    {
        res.status(404).json({
            message : "user not found"
        })
        return
    }
    res.status(200).json(user)
}
