// import { User } from "../src/model/User";

// import { Book } from "../src/model/Book";
import {SERVER_CONFIG} from '../src/config/config'
// let user = new User();

// user.create(['name','email','password','mail_confirm_slug','mail_confirmed'],[
//     'A','aa@example.com','ASERTYDFERSDRRE','Qa3@44MNdj$3e56',false
// ]);
// user.all().then(e=>{
//     console.log(e);
// })
// user.where('id',1).book().then(console.log);
// let book = new Book();
// book.create(['name','description','user_id'],['Reactor 2','A guide to Reactor',1]);
// book.create(['name','description','user_id'],['Reactor 3','A guide to Reactor',1]);
// book.all().then(console.log);
// book.where('id',1).user().then(console.log);
// server
// console.log(SERVER_CONFIG.router.logRoutes())
console.table(SERVER_CONFIG.router.routes)