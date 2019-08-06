import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { Action, AnyAction, combineReducers, Dispatch } from 'redux'
import { all, fork } from 'redux-saga/effects'
import { registerReducer } from './register/reducer';
import registerSaga from './register/sagas'
import { RegisterState } from './register/types';

export interface ApplicationState {
  register: RegisterState

}


export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>
}


export const createRootReducer = () =>
  combineReducers({
    register: registerReducer
  })


 export function* rootSaga() {
   yield all([fork(registerSaga)]) }