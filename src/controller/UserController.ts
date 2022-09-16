// import { ControllerBase, Middleware } from "@cppay/mvc-server";
import { User } from "../model/User";
import { AuthMiddleware } from "./middleware/AuthMiddleware";

import { SERVER_CONFIG } from "../config/config";
import { sendVerifyMail  } from "../mail/Mailer";

export async function sendMail(req: any, res: any) {
try{
    console.log(req.body.mail)

    console.log(process.env.MAIL_USER,process.env.MAIL_PASSWORD)
    if(req.body.mail){
        const name = {
            name : "mukesh"
        }

    for(let i = 0 ; i < req.body.mail.length;i++){

    await sendVerifyMail({ data: {...name}, to: req.body.mail[i] });
    }


    res.send({
        success : true
    })

}    else{
        console.log("no email id")
    }


}

catch(error){
    console.log(error);
}

}