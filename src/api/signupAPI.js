import axios from 'axios';

export const signupAPI = async (data) => {
    const res = await axios.post('https://hufs-meotsa-13th.store/dj/registration/', data);
    return res.data;
};
