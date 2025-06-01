// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginAPI } from '../api/loginAPI';

function LoginPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const res = await loginAPI(form);
            localStorage.setItem('accessToken', res.access);
            localStorage.setItem('refreshToken', res.refresh);
            alert('로그인 성공!');
            navigate('/');
        } catch (err) {
            const detail = err.response?.data?.non_field_errors?.[0] || '서버 오류가 발생했습니다.';
            setError(detail);
        }
    };

    return (
        <div style={{ padding: '40px' }}>
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
                <input name="username" value={form.username} onChange={handleChange} placeholder="아이디" required />
                <br />
                <input
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="비밀번호"
                    required
                />
                <br />
                {error && <p style={{ color: 'red', fontSize: '13px' }}>{error}</p>}
                <button type="submit">로그인</button>
            </form>
        </div>
    );
}

export default LoginPage;
