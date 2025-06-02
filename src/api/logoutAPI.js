import axios from './customAxios';

export const logoutAPI = async () => {
    const response = await axios.post('/dj/logout/');
    return response.data;
};
