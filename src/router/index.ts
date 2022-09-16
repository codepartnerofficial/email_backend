import { Path } from "@cppay/mvc-server";
import { home} from "../controller/HomeController";
import { sendMail } from "../controller/UserController";

export const routes:Path[] = [
    {path:'/',handlerFunction:home,type:'get',name:'home'},
    {path:'/mail/send_mail',handlerFunction:sendMail,type:'post',name:'send_mail'},
   
]