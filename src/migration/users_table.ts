import { Column } from "@cppay/mvc-db";

export const usersTable = {
    tableName:'users',
    columns:[
        (new Column).name('id').primary(),
        (new Column).name('name').varchar(40).notnull(),
        (new Column).name('email').varchar(60).notnull(),
        (new Column).name('password').varchar(255).notnull(),
        (new Column).name('mail_confirm_slug').varchar(40).notnull(),
        (new Column).name('mail_confirmed').bool().notnull(),
    ]
}