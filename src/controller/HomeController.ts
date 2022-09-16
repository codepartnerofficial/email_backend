import { Request, Response } from "express";

export async function home(req:Request,res:Response){
        res.send('Home Page is working fine');
}
