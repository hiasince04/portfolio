// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAPI } from '../api/loginAPI';

function LoginPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await loginAPI(form); // 로그인 요청
            localStorage.setItem('accessToken', res.access); // 토큰 저장
            localStorage.setItem('refreshToken', res.refresh);
            alert('로그인 성공!');
            navigate('/');
        } catch (err) {
            alert('로그인 실패: ' + (err.response?.data?.detail || '오류 발생'));
        }
    };

    return (
        <div style={{ padding: '40px' }}>
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <input name="username" value={form.username} onChange={handleChange} placeholder="아이디" />
                <br />
                <input
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="비밀번호"
                />
                <br />
                <button type="submit">로그인</button>
            </form>
        </div>
    );
}

export default LoginPage;
