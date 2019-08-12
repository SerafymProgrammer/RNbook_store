import { all, call, fork, put, takeEvery } from 'redux-saga/effects'
import { callApi } from '../../utils/api'
import { registerError, registerRequest ,registerSuccess} from './actions'
import { RegisterActionTypes } from './types'
const API_ENDPOINT = 'http://10.10.3.80:3010'

function* handleFetch(data: ReturnType<typeof registerRequest>) {
  debugger
  try {
    const res = yield call(callApi, 'POST', API_ENDPOINT, '/auth/register',Object.assign(data.payload, {isAdmin: true}) )

    debugger

    if (res.error) {
      yield put(registerError(res.error))
    } else {
      yield put(registerSuccess())
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(registerError(err.stack!))
    } else {
      yield put(registerError('An unknown error occured.'))
    }
  }
}


function* watchFetchRequest() {
  yield takeEvery(RegisterActionTypes.REGISTER_REQUEST, handleFetch)
}

function* registerSaga() {
  yield all([fork(watchFetchRequest)])
}

export default registerSaga