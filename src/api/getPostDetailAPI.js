// src/api/getPostDetailAPI.js
import axios from './customAxios';

export const getPostDetailAPI = async (id) => {
    const res = await axios.get(`/blog/${id}/`);
    return res.data;
};
