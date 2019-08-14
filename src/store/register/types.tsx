
export interface User {
  id: number;
  password: string;
  email: string;

  img: string;
  userToken: string
  isAdmin?: boolean;
}

export interface UserRegister {
  img?: string;
  email: string;
  password: string;
  isAdmin?: boolean;
}

export enum RegisterActionTypes {
  REGISTER_REQUEST = '@@register/REGISTER_REQUEST',
  REGISTER_SUCCESS = '@@register/REGISTER_SUCCESS',
  REGISTER_ERROR = '@@register/REGISTER_ERROR',
}

export interface RegisterState {
  loading: boolean
  data: UserRegister
  errors?: string
}
