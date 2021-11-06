import {loginIP} from "../Security/detectIP.ts"
import {profile} from "./userProfile.ts"

var headers={ headers: {"content-type": "text/plain; charset=UTF-8",}}
async function handleRequest(
  request: any,
  connInfo: any
  ): Promise<any> {
 
  const data=await loginIP(connInfo.remoteAddr)
  if (data){
    
    switch (request.url) {
      case "http://192.168.0.11:8080/api/v1/user":
        return await profile(data,request)   
      default:
        break;
    } 
  
  
  }else{
    return new Response("no esta registrado",headers);
  }
  //console.log(connInfo)
  
} 


export {handleRequest  }


