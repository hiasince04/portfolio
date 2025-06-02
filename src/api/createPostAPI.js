import axios from './customAxios';

export const createPostAPI = async (postData) => {
    const res = await axios.post('/blog/', postData);
    return res.data;
};
