import * as ejs from "ejs";
import * as path from "path";
import { sendMail } from "./MailService";

const from = "info@codepartner.in";
const fromName = "Mukesh Roy";

interface MailData {
  data: any;
  to: string;
}

// const from = "info@codepartner.in"
export const sendVerifyMail = async (info: MailData) => {

  try{
  // loging user data
  console.log('mail', info.data,info.to);

  // test domain
  let renderData = {
    ...info.data,
    host: "http://localhost:3000",
    domain: "http://localhost:3000",
    // host: "https://cppay-home-ui.vercel.app",
    // domain: "https://cppay-home-ui.vercel.app",
    // slug: info.data.mail_verification_slug,
  };
  // let renderData = { ...info.data, host: "http://localhost:3000", domain: "http://localhost:3000", slug: info.data.mail_verification_slug }
  // main domain
  // let renderData = { ...info.data, host: HOST, domain: CLIENT_HOST, slug: info.data.mail_verification_slug }
  // // console.log(renderData);
  // console.log(path.)
  let doc = await ejs.renderFile(
    path.join(__dirname, "./templates/verify-mail.ejs"),
    renderData
  );
  // let doc = {

  // }


  console.log("hello")
  await sendMail(
    from,
    "Codepartner",
    info.to,
    "✅ Hey ➡",
    doc
  );

  }
  catch(error){
    console.log(error)
  }
};
// export const forgotMail = async (info: MailData) => {
//   // loging user data
//   // console.log('mail', info.data);

//   // test domain
//   let renderData = {
//     ...info.data,
//     host: "https://cppay-home-ui.vercel.app",
//     domain: "https://cppay-home-ui.vercel.app",
//     slug: info.data.slug,
//   };
//   // let renderData = { ...info.data, host: "http://localhost:3000", domain: "http://localhost:3000", slug: info.data.mail_verification_slug }
//   // main domain
//   // let renderData = { ...info.data, host: HOST, domain: CLIENT_HOST, slug: info.data.mail_verification_slug }
//   // // console.log(renderData);
//   // console.log(path.)
//   let doc = await ejs.renderFile(
//     path.join(__dirname, "./templates/forgot.ejs"),
//     renderData
//   );
//   await sendMail(
//     from,
//     "CP PAY FORGOT PASSWORD",
//     info.to,
//     "✅ RESET CPPAY Account ➡",
//     doc
//   );
// };
