import axios from "axios";
import Cookies from "js-cookie";
import { wrapper } from "axios-cookiejar-support";
import tough from "tough-cookie";
import { useRouter } from "next/router";

const cookieJar = new tough.CookieJar();

const instance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  // baseURL is the base of the server that is handling requests 
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
  },
  jar: cookieJar,
  withCredentials: true,
});
 
export const getUserData = async () => {
  return await instance.get(`/user/info`);
};

export const getAccess = async (accessLevel) => {
  return await instance.get(`/user/access?access=${accessLevel}`);
};

export const getUser = async (attr) => {
  let str = "";
  for (let key in attr) {
    console.log(key, attr[key]);
    str += key + "=" + attr[key] + "&";
  }
  str = str.slice(0, -1);
  return await instance.get(`/user/get?${str}`);
};

export const logout = async () => {
  return await instance.get(`/user/logout`);
};

export const updateUser = async (user) => {
  return await instance.post(`/user/update`, user);
};

export const authorizeLogin = async (data) => {
  const response = await instance.post("/user/login", data);
  return response;
};

export const registerUser = async (user) => {
  return await instance.post("/user/register", user);
};

export const createUser = async (user) => {
  return await instance.post("/user/create", user);
};

export const resetUser = async (user) => {
  return await instance.post("/user/reset", user);
};

export const validateUser = async (user) => {
  return await instance.post("/user/validate", user);
};

export const sendMessage = async (data, path) => {
  const response = await instance.post(`/message/send?path=${path}`, data);
  return response;
};

export const getMessage = async (path) => {
  const response = await instance.get(`/message/get?path=${path}`);
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
  const response = await instance.post("/path/create", path);
  return response;
};

export const updatePath = async (path) => {
  const response = await instance.post("/path/update", path);
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
  const response = await instance.post("/activity/create", {
    activity: activity,
  });
  return response;
};

export const updateActivity = async (activity) => {
  const response = await instance.post("/activity/update", activity);
  return response;
};

export const getCompany = async (companyId) => {
  return await instance.get(`/company/get?company=${companyId}`);
};

export const getCompanies = async () => {
  return await instance.get(`/company/all`);
};

export const createCompany = async (company) => {
  return await instance.post("/company/create", company);
};

export const updateCompany = async (activity) => {
  return await instance.post("/company/update", activity);
};
 