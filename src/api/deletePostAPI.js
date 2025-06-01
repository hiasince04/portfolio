// src/api/deletePostAPI.js
import axios from './customAxios';

export const deletePostAPI = async (id) => {
    const res = await axios.delete(`/blog/${id}/`);
    return res;
};
