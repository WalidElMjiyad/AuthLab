import type { Request , Response } from "express";

export function getStatus (req : Request , res : Response):void {
    res.status(200).json({
  "service": "AuthLab",
  "status": "running",
  "version": 1
})
}
