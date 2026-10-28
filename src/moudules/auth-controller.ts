import type { Request , Response } from "express";

function getName (req : Request , res : Response):void {
    res.status(200).json({
        name : "Authlab"
    })
}

function getInfo (req : Request , res : Response):void {
    res.json({
        project : "Authlab",
        stack : "ts , express"
    })
}

export default {getName , getInfo}