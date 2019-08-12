import { AsyncStorage } from "react-native";
import { User, UserRegister } from "../store/register/types";

export async function callApi(method: string = 'GET', url: string = 'http://10.10.3.80:3010', path: string = '/books', data?: User | UserRegister) {

  let user = await AsyncStorage.getItem('user');
  let currentUser = '';
  if (user) {
    currentUser = JSON.parse(user);
  }

  let httpHeaders;

  if (user && currentUser.userToken) {
    httpHeaders = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'Authorization': `Bearer ${currentUser.userToken}`
    };
  } else {
    httpHeaders = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
  }
  const res = await fetch(url + '' + path, {
    method,
    headers: new Headers(httpHeaders),
    body: JSON.stringify(data)
  })
  debugger
  return res.json();
}
