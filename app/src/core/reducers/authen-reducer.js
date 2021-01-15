import { LOGIN_FAILED, LOGIN_SUCCESS, LOG_OUT } from "../services/authen-service";

export const reducer = (prevState, action) => {
  switch(action.type){
    case LOGIN_SUCCESS:
      return {...prevState, isAuthenticated: true, token: action.data.token, userInfo: action.data.userInfo}
    case LOGIN_FAILED:  
      return {...prevState, isAuthenticated: false, message: "Incorrect username/password"}
    case LOG_OUT:
      return {...prevState, isAuthenticated: false}
    default:
      throw new Error();      
  }
}