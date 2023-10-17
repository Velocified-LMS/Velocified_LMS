import axios from 'axios';
import Cookies from 'js-cookie';
import { wrapper } from 'axios-cookiejar-support';
import tough from 'tough-cookie';


const instance = axios.create({
  baseURL: 'http://localhost:3100/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  },
  withCredentials: true
});


export const getUserData = async () => {
    return instance.get(`/user/info`);
};


export const authorizeLogin = async (data) => {
  const response = await instance.post('/user/login', data);
  return response;
};

export const sendMessage = async (data) => {
  const response = await instance.post('/message/send', data);
  console.log(response);
  return response;
};

export const getMessage = async () => {
  const response = await instance.get('/message/get');
  console.log(response);
  return response;
};