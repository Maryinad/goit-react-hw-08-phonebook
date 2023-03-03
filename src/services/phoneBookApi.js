import { privatHost } from './authApi';

export const fetchContacts = async () => {
  const { data } = await privatHost.get(`/contacts`);

  return data;
};

export const addPhoneContacts = async contact => {
  const { data } = await privatHost.post(`contacts`, contact);

  return data;
};

export const deletePhoneContacts = async id => {
  const { data } = await privatHost.delete(`/contacts/${id}`);

  return data;
};

// https://connections-api.herokuapp.com
