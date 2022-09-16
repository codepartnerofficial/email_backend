import { CreateServer } from "@cppay/mvc-server";
import { SERVER_CONFIG } from "../config/config";

export const server = new CreateServer(SERVER_CONFIG.router.router,SERVER_CONFIG.cors,SERVER_CONFIG.port,process.cwd())    
