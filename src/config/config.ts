import { RouterBaseSetup } from '@cppay/mvc-server';
import * as fs from 'fs';
import * as path from 'path'
import { PoolConfig } from 'pg';
import { routes } from '../router';

export const SERVER_CONFIG: ServerConfig = {
    port: Number(process.env.PORT) || 3010,
    cors: Boolean(process.env.CORS) || true,
    corsOption:{
        host:""
    },
    router:RouterBaseSetup.setUp(routes),
    saltRound:process.env.SALT_ROUND || 10
}

interface ServerConfig {
    port: number,
    cors: boolean,
    corsOption:{
        host:string
    },
    router:any,
    saltRound: string|number
}

export const mailconfig:any = {
    
    host: process.env.MAIL_HOST || "smtp.zoho.in",
    port: process.env.MAIL_PORT || 587,
    secure: (process.env.MAIL_SECURITY=='SSL')?true:false,
    auth: {
        user: process.env.MAIL_USER || "",
        pass: process.env.MAIL_PASSWORD || "",
    },
}