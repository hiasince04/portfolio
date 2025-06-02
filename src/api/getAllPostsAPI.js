import axios from './customAxios';

export const getAllPostsAPI = async () => {
    const res = await axios.get('/blog/');
    return res.data;
};
