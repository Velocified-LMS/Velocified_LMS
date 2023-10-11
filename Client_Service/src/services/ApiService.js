import axios from 'axios';
import Cookies from 'js-cookie';
import { wrapper } from 'axios-cookiejar-support';
import tough from 'tough-cookie';


const instance = axios.create({
  baseURL: 'http://localhost:3100/api',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  },
  withCredentials: true
});


export const getUserData = async () => {
    return instance.get(`/user`);
};


export const authorizeLogin = async (data) => {
  const response = await instance.post('/login', data);
  console.log(document.cookie);
  console.log(response);
  return response;
};


export default {
    getUserData,
    authorizeLogin
};
