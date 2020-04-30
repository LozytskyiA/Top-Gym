import axios from 'axios';

const authUrl = axios.create({
  baseURL: 'http://localhost:5000/',
  withCredentials: true
});

export const logInUser = (user: any) => {
  return authUrl.post('/login', user);
}

export const logOutUser = () => {
  return authUrl.get('/logout');
}