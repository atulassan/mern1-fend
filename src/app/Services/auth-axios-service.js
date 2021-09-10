import axios from 'axios';
import { authHeaderNew } from '../Services/auth-header';


//const API_URL = "http://localhost:4000/api/v1";
const API_URL = process.env.REACT_APP_API_URL;

export const getAuthData = async (url) => {

    try {
      const result = await axios({
        method: 'GET', 
        url: `${API_URL}${url}`,
        validateStatus: function(status) {
          return status < 600;
        }, 
        headers: { "Access-Control-Allow-Origin": "*", ...authHeaderNew() },
      });
      //let response = result;
      console.log("Getting result++++++++++++++", result);
      if(result.status === 500) {
        localStorage.removeItem("user");
        window.location.href = '/';
        return false;
      }
      return result;
    } catch (error) {
        console.error('Error:', error);
    }
};

export const postAuthData = async ( url, data ) => {
  try {
    const result = await axios({
      method: "POST", 
      url: `${API_URL}${url}`,
      validateStatus: function(status) {
        return status < 600;
      },
      data: data, // data can be `string` or {object}! 
      headers: { 'Content-Type': 'application/json', ...authHeaderNew() },
    });
    if(result.status === 500) {
      localStorage.removeItem("user");
      window.location.href = '/';
      return false;
    }
    return result;
  } catch (error) {
      console.error('Error:', error);
  }
};

export const deleteAuthData = async ( url, data ) => {
  try {
    const result = await axios({
      method: "DELETE", 
      url: `${API_URL}${url}`,
      validateStatus: function(status) {
        return status < 600;
      },
      data: data, // data can be `string` or {object}! 
      headers: { 'Content-Type': 'application/json', ...authHeaderNew() },
    });
    if(result.status === 500) {
      localStorage.removeItem("user");
      window.location.href = '/';
      return false;
    }
    return result;
  } catch (error) {
      console.error('Error:', error);
  }
};