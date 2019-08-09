import { AsyncStorage } from "react-native";
import {User, UserRegister} from "../store/register/types";


export async function callApi(method: string = 'GET', url: string = 'http://10.10.3.80:3010', path: string ='/books', data?: User| UserRegister) {

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
        'Content-Type' : 'application/json', 
        'Accept' : 'application/json'
      };
    // }
    // tslint:disable-next-line:prefer-template
    debugger
    
    
    const res = await fetch(url  +''+ path, {
      method,
      headers: new Headers(httpHeaders),
      body: JSON.stringify(data)
    })
    debugger
    return res.json();
  }
