import { DataBase, MigrationBase } from "@cppay/mvc-db";
import { allMigration } from "../migration/Migrations";
import * as fs from 'fs';
import * as path from 'path';
export const db = new DataBase({
    user: process.env.DB_USER || "my_method",
    host: process.env.DB_HOST || "cp-default-test-db-do-user-10410953-0.b.db.ondigitalocean.com",
    database: process.env.DB_NAME || "ico_db",
    password: process.env.DB_PASS || "FcrtfitOXLBJr5nl",
    port:  Number(process.env.DB_PORT) || 25060,
    sslEnabled:true,
    ssl:{
        ca: fs.readFileSync(path.join(__dirname,'ca-certificate.cer')).toString(),
    }
},fs.readFileSync(path.join(__dirname,'ca-certificate.cer')).toString());

export function migrate(){
    allMigration.forEach((val:any,i)=>{
        try{
            (new MigrationBase(val.tableName,db)).migrate(val.columns);
        }catch(e){
            console.log("Something Bad Happened");
        }
    })
}
export function drop(){
    allMigration.forEach((val:any,i)=>{
        try{
            (new MigrationBase(val.tableName,db)).drop();
            // (new MigrationBase(val.tableName,db)).migrate(val.columns);
        }catch(e){
            console.log("Something Bad Happened");
        }
    })
}
