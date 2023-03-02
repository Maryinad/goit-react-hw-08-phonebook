import axios from 'axios';

const privateHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchContacts = async () => {
  const { data } = await privateHost.get(`/contacts`);

  return data;
};

export const addPhoneContacts = async contact => {
  const { data } = await privateHost.post(`contacts`, contact);

  return data;
};

export const deletePhoneContacts = async id => {
  const { data } = await privateHost.delete(`/contacts/${id}`);

  return data;
};

// https://connections-api.herokuapp.com
