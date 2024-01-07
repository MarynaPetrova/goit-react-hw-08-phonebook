import axios from 'axios';
import { backendAPI } from 'redux/BaseHttp/BaseHttp';
export const contactAPI = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const getContacts = async () => {
  const { data } = await backendAPI.get('/contacts');
  return data;
};

export const addContacts = async contact => {
  const { data } = await backendAPI.post('contacts', contact);
  return data;
};

export const delContacts = async id => {
  const { data } = await backendAPI.delete(`/contacts/${id}`);
  return data;
};

export const updContacts = async id => {
  const { data } = await backendAPI.patch(`/contacts/${id}`);
  return data;
};
