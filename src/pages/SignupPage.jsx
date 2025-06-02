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
            console.log('회원가입 에러:', err.response?.data);
            if (err.response?.data) {
                setErrors(err.response.data);
            } else {
                alert('회원가입 중 알 수 없는 오류가 발생했습니다.');
            }
        }
    };

    const renderError = (field) =>
        errors[field] ? <p style={{ color: 'red', fontSize: '12px' }}>{errors[field][0]}</p> : null;

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f9f9f9',
                fontFamily: "'DM Serif Display', serif",
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    padding: '40px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
            >
                <h2 style={{ marginBottom: '20px' }}>Sign Up</h2>

                <input
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    placeholder="아이디"
                    required
                    style={inputStyle}
                />
                {renderError('username')}

                <input
                    name="password1"
                    type="password"
                    value={form.password1}
                    onChange={handleChange}
                    placeholder="비밀번호"
                    required
                    style={inputStyle}
                />
                {renderError('password1')}

                <input
                    name="password2"
                    type="password"
                    value={form.password2}
                    onChange={handleChange}
                    placeholder="비밀번호 확인"
                    required
                    style={inputStyle}
                />
                {renderError('non_field_errors')}

                <input
                    name="nickname"
                    value={form.nickname}
                    onChange={handleChange}
                    placeholder="닉네임"
                    style={inputStyle}
                />
                <input
                    name="university"
                    value={form.university}
                    onChange={handleChange}
                    placeholder="소속 대학교"
                    style={inputStyle}
                />
                <input
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="지역"
                    style={inputStyle}
                />

                <button
                    type="submit"
                    style={{
                        marginTop: '20px',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                        backgroundColor: '#f0f0f0',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                    }}
                >
                    가입하기
                </button>
            </form>
        </div>
    );
}

const inputStyle = {
    marginBottom: '10px',
    padding: '8px',
    width: '240px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px',
    fontFamily: "'DM Serif Display', serif",
};

export default SignupPage;
