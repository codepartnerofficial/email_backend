import { Book } from "./Book";
import { ModelBase } from "@cppay/mvc-db";
import { db } from "../app/db";

export class User extends ModelBase{
    // tableName: string = 'users';
    constructor(){
        super();
        this.db = db;
        this.tableName = 'users'
    }

    book():Promise<any>{
        return this.hasOne(new Book(),'id','user_id');
    }
}