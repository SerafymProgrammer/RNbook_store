import { User } from "../register/types";

export enum UsersListActionTypes {
  USERS_LIST_REQUEST = '@@usersList/USERS_LIST_REQUEST',
  USERS_LIST_SUCCESS = '@@usersList/USERS_LIST_SUCCESS',
  USERS_LIST_ERROR = '@@usersList/USERS_LIST_ERROR'
}

export interface UsersListState {
  loading: boolean
  users: User[]
  errors?: string
}
