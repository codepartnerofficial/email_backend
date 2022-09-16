import { ModelBase } from "@cppay/mvc-db";
import { db } from "../app/db";

export class Model extends ModelBase{
    constructor(){
        super();
        this.db = db;
    }
}