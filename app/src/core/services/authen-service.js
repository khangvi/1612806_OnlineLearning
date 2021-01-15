import axios from 'axios'
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOG_OUT = "LOG_OUT"

export const login = (dispatch) => (username, password) => {
  axios.post('http://api.dev.letstudy.org/user/login', {
    email: username,
    password: password
  }).then((res) => {
    if(res.status===200){
      dispatch({type: LOGIN_SUCCESS, data: res.data})
    }
  }).catch((error) => dispatch({type: LOGIN_FAILED}))
}

export const logout = (dispatch) => () => {
  dispatch({type: LOG_OUT})
}
