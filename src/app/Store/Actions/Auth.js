import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "../Types";
import { success } from "../../Services/toast-service";
import { toast } from "react-toastify";

//import { dispatch } from 'redux';
import AuthService from "../../Services/AuthService";

export const register = (registerData) => (dispatch) => {
  return AuthService.register(registerData).then(
    (response) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      success(response.data.message);

      return Promise.resolve();
    },
    (error) => {
      
      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      toast.error(message);

      return Promise.reject();
    }
  );
};

export const login = (loginData) => (dispatch) => {
  return AuthService.login(loginData).then(
    (data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: data.response },
      });
      dispatch({
        type: SET_MESSAGE,
        payload:{ message:data.message,variant:'success'},
      });
      success(data.message);  
      return Promise.resolve();
    },
    (error) => {

      const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      toast.error(message);

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });

};