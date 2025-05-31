// src/api/loginAPI.js
import axios from './customAxios';

export const loginAPI = async (data) => {
    const response = await axios.post('/dj/login/', data);
    return response.data;
};
