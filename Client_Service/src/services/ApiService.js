import axios from 'axios';
import Cookies from 'js-cookie';
import { wrapper } from 'axios-cookiejar-support';
import tough from 'tough-cookie';


const instance = axios.create({
  // baseURL: 'http://velocified.net:3100',
  baseURL: 'http://localhost:3100/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  },
  withCredentials: true
});


export const getUserData = async () => {
    return await instance.get(`/user/info`);
};

export const updateUser = async (user) => {
  return await instance.post(`/user/update`, user);
};

export const authorizeLogin = async (data) => {
  const response = await instance.post('/user/login', data);
  return response;
};

export const sendMessage = async (data) => {
  const response = await instance.post('/message/send', data);
  return response;
};

export const getMessage = async () => {
  const response = await instance.get('/message/get');
  return response;
};

export const getPath = async (pathId) => {
  const response = await instance.get(`/path?pathId=${pathId}`);
  return response;
};

export const getPathsByCompany = async (companyId) => {
  const response = await instance.get(`/path/company?companyId=${companyId}`);
  return response;
};

export const createPath = async (path) => {
  const response = await instance.post('/path/create', path)
  return response;
};

export const updatePath = async (path) => {
  const response = await instance.post('/path/update', path)
  return response;
};

export const getActivity = async (activityId) => {
  const response = await instance.get(`/activity?activity=${activityId}`);
  return response;
};

export const getActivities = async (pathId) => {
  const response = await instance.get(`/activity/path?pathId=${pathId}`);
  return response;
};

export const createActivity = async (activity) => {
  const response = await instance.post('/activity/create', {"activity": activity})
  return response;
};

export const updateActivity = async (activity) => {
  const response = await instance.post('/activity/update', activity)
  return response;
};