import { AsyncStorage } from "react-native";
import {User, UserRegister} from "../store/register/types";


export async function callApi(method: string, url: string, path: string, data?: User| UserRegister) {

  // const user = await JSON.parse( AsyncStorage.getItem('user') as string)

    
  //   // tslint:disable-next-line:no-console
  //   console.log(user.userToken);
    let httpHeaders;
  
  //   if(user && user.userToken){
  //   httpHeaders = { 
  //     'Content-Type' : 'application/x-www-form-urlencoded', 
  //     'Accept' : 'application/json',
  //     'Authorization' : `Bearer ${user.userToken}`
  //   };
  //   } else {
      httpHeaders = { 
        'Content-Type' : 'application/x-www-form-urlencoded', 
        'Accept' : 'application/json'
      };
    // }
    // tslint:disable-next-line:prefer-template
    const res = await fetch(url  +''+ path, {
      method,
      headers: new Headers(httpHeaders),
      body: JSON.stringify(data)
    })

    return res.json()
  }
  