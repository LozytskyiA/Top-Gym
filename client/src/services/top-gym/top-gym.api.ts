import axios from 'axios';

const baseUrl = axios.create({
  baseURL: 'http://localhost:5000/'
});

export const getUsers = async () => {
  return await baseUrl.get('users/');
}

export const getUser = async (id: number) => {
  return await baseUrl.get(`users/${id}`);
}

export const registerUser = async (user: any) => {
  return await baseUrl.post('users', user);
}

export const updateQuiz = (id: number) => {
  return baseUrl.put(`quizzes/${id}`)
}

