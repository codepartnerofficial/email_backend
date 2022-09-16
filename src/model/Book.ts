import { ModelBase } from "@cppay/mvc-db";
import { User } from "./User";
import { db } from "../app/db";

export class Book extends ModelBase{
    constructor(){
        super();
        this.db = db;
        this.tableName = 'books'
    }
    user(){
        return this.belongsTo(new User(),'user_id','id')
    }
}