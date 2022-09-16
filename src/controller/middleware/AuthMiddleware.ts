import { Middleware } from "@cppay/mvc-server";

export class AuthMiddleware extends Middleware{
    async isAllowed(req: any, res: any): Promise<boolean> {
        return true;
    }
}