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
            const msg = err.response?.data?.non_field_errors?.[0] || '로그인 실패';
            setError(msg);
        }
    };

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
                    fontFamily: "'DM Serif Display', serif",
                }}
            >
                <h2 style={{ marginBottom: '20px' }}>Log In</h2>

                <input
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    placeholder="아이디"
                    required
                    style={inputStyle}
                />
                <input
                    name="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="비밀번호"
                    required
                    style={inputStyle}
                />

                {error && (
                    <p style={{ color: 'red', fontSize: '12px', marginTop: '-6px', marginBottom: '10px' }}>{error}</p>
                )}

                <button
                    type="submit"
                    style={{
                        marginTop: '10px',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                        backgroundColor: '#f0f0f0',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontFamily: "'DM Serif Display', serif",
                    }}
                >
                    로그인
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

export default LoginPage;
