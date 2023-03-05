import axios from 'axios';

const publicHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const privatHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const register = async credential => {
  const { data } = await publicHost.post(`users/signup`, credential);
  return data;
};

export const login = async credential => {
  const { data } = await publicHost.post(`users/login`, credential);
  return data;
};

export const getUserDetailsRequest = async () => {
  const { data } = await privatHost.get(`/users/current`);
  return data;
};

export const userLogOutRequest = async () => {
  const { data } = await privatHost.post(`/users/logout`);
  return data;
};

export const token = {
  set: token => {
    console.log(token);
    privatHost.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet: () => {
    privatHost.defaults.headers.common.Authorization = '';
  },
};
