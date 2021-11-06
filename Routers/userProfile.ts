 import { userProfile } from "../Data/mod.ts"
 var headers={ headers: {"content-type": "application/json; charset=UTF-8",}}

const profile=async(
    id:string ,
    request: any
)=>{
    switch (request.method) {
        case "GET":
            const data= (await userProfile.findOne({ _id:id })).profile;
            return new Response(await JSON.stringify(data),headers)
        default:
            return new Response()
            break;
    }
}


export {profile}