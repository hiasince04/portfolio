// src/api/getAllPostsAPI.js
import axios from './customAxios';

export const getAllPostsAPI = async () => {
    const res = await axios.get('/blog/');
    return res.data; // 게시글 배열
};
