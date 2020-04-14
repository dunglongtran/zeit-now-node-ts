import http from "http";
import { NowRequest, NowResponse } from "@now/node";

/** + Thay doi script start la phai khoi dong lai server
 *  + Dau Cong o terminal de co the chay cac lenh trong terminal
 *
 *  +  Tao moi Projekt bang template
 *  + File -> Fork Sandbox de tao Projekt moi sau do moi lam viec
 */
http
  .createServer(function(req: NowRequest, res: NowResponse) {
    res.write("Hello Typescript!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
