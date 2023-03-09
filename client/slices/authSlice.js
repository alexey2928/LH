import axios from 'axios'
import history from '../../history'


const TOKEN = 'token'
const SET_AUTH = 'SET_AUTH'

const setAuth = auth => ({type: SET_AUTH, auth})

export const me = () => async dispatch => {
  const token = window.localStorage.getItem(TOKEN)
  if (token) {
    const res = await axios.get('/api/auth/me', {
      headers: {
        authorization: token
      }
    })
    return dispatch(setAuth(res.data))
  }
}

export const authenticateLogin = (email, password) => async dispatch => {
  try {
    const res = await axios.post("/api/auth/login", {email, password})
    window.localStorage.setItem(TOKEN, res.data.token)
    dispatch(me())
  } catch (authError) {
    return dispatch(setAuth({error: authError}))
  }
}
export const authenticateRegister = ( firstName, lastName, email, password ) => async dispatch => {
  try {
    const res = await axios.post("/api/auth/register", { firstName, lastName, email, password })
    window.localStorage.setItem(TOKEN, res.data.token)
    dispatch(me())
  } catch (authError) {
    return dispatch(setAuth({error: authError}))
  }
}

export const logout = () => {
  window.localStorage.removeItem(TOKEN)
  history.push('/login')
  return {
    type: SET_AUTH,
    auth: {}
  }
}

export default function(state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
       return action.auth
    default:
      return state
  }
}
