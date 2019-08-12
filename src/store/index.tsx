import { connectRouter, RouterState } from 'connected-react-router'

import { Action, AnyAction, combineReducers, Dispatch } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { registerReducer } from './register/reducer';
import registerSaga from './register/sagas'
import { RegisterState } from './register/types';
import { booksReducer } from './booksList/reducer';
import { BooksListState } from './booksList/types';
import booksSaga from './booksList/sagas';
import { LoginState } from './login/types';
import { loginReducer } from './login/reducer';
import loginSaga from './login/sagas';
import { UsersListState } from './usersList/types';
import { usersReducer } from './usersList/reducer';
import usersSaga from './usersList/sagas';


export interface ApplicationState {
  register: RegisterState,
  login: LoginState,
  usersList: UsersListState,
  booksList: BooksListState
}


export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}


export const createRootReducer = () =>
  combineReducers({
    register: registerReducer,
    login: loginReducer,
    usersList: usersReducer,
    booksList: booksReducer,
  })


 export function* rootSaga() {
   yield all([fork(registerSaga), fork(usersSaga), fork(booksSaga), fork(loginSaga)]) }