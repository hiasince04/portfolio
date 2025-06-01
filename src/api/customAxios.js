// src/api/customAxios.js
import axios from 'axios';

const customAxios = axios.create({
    baseURL: 'https://hufs-meotsa-13th.store/', // 공통 주소
    timeout: 5000, // 5초 넘으면 실패
    headers: {
        'Content-Type': 'application/json',
    },
    //withCredentials: true, // 쿠키 등 인증 포함
});

// 토큰 자동 첨부
customAxios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // 토큰 붙이기
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default customAxios;
