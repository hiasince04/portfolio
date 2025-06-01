// src/pages/SignupPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupAPI } from '../api/signupAPI';

function SignupPage() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: '',
        password1: '',
        password2: '',
        nickname: '',
        university: '',
        location: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        try {
            const res = await signupAPI(form);
            alert('회원가입 성공!');
            localStorage.setItem('accessToken', res.access);
            localStorage.setItem('refreshToken', res.refresh);
            navigate('/login');
        } catch (err) {
            if (err.response?.data) {
                setErrors(err.response.data);
            } else {
                alert('회원가입 중 오류가 발생했습니다.');
            }
        }
    };

    const renderError = (field) =>
        errors[field] ? <p style={{ color: 'red', fontSize: '12px' }}>{errors[field][0]}</p> : null;

    return (
        <div style={{ padding: '40px' }}>
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit}>
                <input name="username" value={form.username} onChange={handleChange} placeholder="아이디" required />
                {renderError('username')}
                <br />

                <input
                    name="password1"
                    type="password"
                    value={form.password1}
                    onChange={handleChange}
                    placeholder="비밀번호"
                    required
                />
                {renderError('password1')}
                <br />

                <input
                    name="password2"
                    type="password"
                    value={form.password2}
                    onChange={handleChange}
                    placeholder="비밀번호 확인"
                    required
                />
                {renderError('non_field_errors')}
                <br />

                <input name="nickname" value={form.nickname} onChange={handleChange} placeholder="닉네임" />
                <br />
                <input name="university" value={form.university} onChange={handleChange} placeholder="소속 대학교" />
                <br />
                <input name="location" value={form.location} onChange={handleChange} placeholder="지역" />
                <br />

                <button type="submit">가입하기</button>
            </form>
        </div>
    );
}

export default SignupPage;
