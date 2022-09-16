const  Mailer = require('nodemailer');
import {mailconfig } from '../config/config';

export const sendMail = async (from:string,fromName:string,to:string,subject:string,doc:any)=>{
    try{
        // console.log('called');
        let transport = Mailer.createTransport(mailconfig);
        let info = await transport.sendMail({
            from:`${fromName} <${from}>`,
            to,
            subject,
            html: doc
        })
      // console.log(info.messageId);
        return true
    }catch(e){
        // console.log(e);
        return false;
    }
}