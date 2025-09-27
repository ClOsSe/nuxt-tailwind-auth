

import { useApi } from "~/composables/useAPI";

const api = useApi()


export const login = async (username:string,password:string) => {
  try{
    const url = 'login'
    const res:any = await api.post(url,{username,password})
    if(res.isDone){
      return res;
    }else{
      throw res;
    }
  }catch(error:any){
    // todo : error handler
    console.error('error in login',error);
    throw new Error("error in login",error);
    
  }
}
export const register = async () => {
  try{
    const url = 'register'
    const res:any = await api.post(url,{})
    if(res.isDone){
      return res;
    }else{
      throw res;
    }
  }catch(error:any){
    // todo : error handler
    console.error('error in register',error);
    throw new Error("error in register",error);
    
  }
}
export const forgetPassword = async () => {
  try{
    const url = 'forget'
    const res:any = await api.post(url,{})
    if(res.isDone){
      return res;
    }else{
      throw res;
    }
  }catch(error:any){
    // todo : error handler
    console.error('error in forgetPassword',error);
    throw new Error("error in forgetPassword",error);
    
  }
}