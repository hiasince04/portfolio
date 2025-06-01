// src/api/signupAPI.js
import axios from './customAxios';

export const signupAPI = async (data) => {
    const response = await axios.post('/dj/registration/', data);
    return response.data;
};
