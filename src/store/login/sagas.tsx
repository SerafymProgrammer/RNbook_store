import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { callApi } from '../../utils/api'
import { loginError, loginRequest, loginSuccess } from './actions'
import { LoginActionTypes, User } from './types'
import jwt from 'jwt-decode';
import { AsyncStorage } from 'react-native';
const API_ENDPOINT = 'http://10.10.3.80:3010'

function* handleFetch(data: ReturnType<typeof loginRequest>) {
  debugger
  try {
    const res = yield call(callApi, 'POST', API_ENDPOINT, '/auth/login', data.payload)

    if (res.error) {
      yield put(loginError(res.error))
    } else {

      const decode: User = jwt(res.userToken);
      AsyncStorage.setItem('user', JSON.stringify({ userToken: res.userToken, email: decode.email, id: decode.id, img: res.img }));
      yield put(loginSuccess())
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(loginError(err.stack!))
    } else {
      yield put(loginError('An unknown error occured.'))
    }
  }
}

function* watchFetchRequest() {
  yield takeEvery(LoginActionTypes.LOGIN_REQUEST, handleFetch)
}

function* loginSaga() {
  yield all([fork(watchFetchRequest)])
}

export default loginSaga