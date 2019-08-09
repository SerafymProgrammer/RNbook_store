import { Reducer } from 'redux'
import { RegisterActionTypes, RegisterState } from './types'

export const initialState: RegisterState = {
  data: {email: '', password: ''},
  errors: undefined,
  loading: false
}

const reducer: Reducer<RegisterState> = (state = initialState, action) => {

  switch (action.type) {
    
    case RegisterActionTypes.REGISTER_REQUEST: {
      return { ...state, loading: true }
    }
    case RegisterActionTypes.REGISTER_SUCCESS: {
      return { ...state, loading: false, data: action.payload }
    }
    case RegisterActionTypes.REGISTER_ERROR: {
      return { ...state, loading: false, errors: action.payload }
    }
    default: {
      return state
    }
  }
}

export { reducer as registerReducer }