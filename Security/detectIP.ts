import { dbIP,dbLoginUser } from "../Data/mod.ts" 

const exampleLogin={ transport: "tcp", hostname: "10.42.0.83", port: 43350 }




//console.log(data)
const searchIP=async(
    ip:string
)=>{
    
    try {
        const data:any =await dbIP.findOne({ _id:ip });
        return (data.userid)
        
    } catch (error) {
        //console.log(error)
        return false
    }
}


const loginIP=async(
    remoteAddress:any
)=>{

    console.log(`${remoteAddress.hostname}:${remoteAddress.port}`, Boolean(await searchIP(remoteAddress.hostname)))
    return (await searchIP(remoteAddress.hostname))
}

export {loginIP}

