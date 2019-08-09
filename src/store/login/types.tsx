
export  interface User {
    id: number;
    password?: string;
    email: string;
    passsword:string;
    img: string;
    userToken: string
    isAdmin?: boolean;
  }
  
  export interface UserRegister{
    email: string;
    password:string;
    isAdmin?: boolean;
  }

  export enum LoginActionTypes {
    LOGIN_REQUEST = '@@login/LOGIN_REQUEST',
    LOGIN_SUCCESS = '@@login/LOGIN_SUCCESS',
    LOGIN_ERROR = '@@login/LOGIN_ERROR',
  }

  export interface LoginState {
     loading: boolean
     token: any
     errors?: string
  }
  