import { action } from 'typesafe-actions'
import { LoginActionTypes, UserRegister} from './types'

export const loginRequest = (data: UserRegister) => action(LoginActionTypes.LOGIN_REQUEST, data)

export const loginSuccess = () => action(LoginActionTypes.LOGIN_SUCCESS)

export const loginError = (message: string) => action(LoginActionTypes.LOGIN_ERROR, message)

