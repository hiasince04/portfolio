// src/api/updatePostAPI.js
import axios from './customAxios';

export const updatePostAPI = async (id, postData) => {
    const res = await axios.put(`/blog/${id}/`, postData);
    return res.data;
};
