import { Column } from "@cppay/mvc-db";

export const booksTable = {
    tableName:'books',
    columns:[
        (new Column).name('id').primary(),
        (new Column).name('name').varchar(40).notnull(),
        (new Column).name('description').varchar(60).notnull(),
        (new Column).name('user_id').int(11).notnull(),
    ]
}