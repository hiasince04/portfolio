import React from 'react';
import { useNavigate } from 'react-router-dom';
import customAxios from '../api/customAxios';

function LogoutButton() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await customAxios.post('/dj/logout/');
        } catch (err) {
            console.error('서버 로그아웃 실패:', err.response?.data);
        }
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        alert('로그아웃되었습니다');
        navigate('/login');
    };

    return (
        <button
            onClick={handleLogout}
            style={{
                position: 'fixed',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '4px 10px',
                backgroundColor: '#f0f0f0',
                border: '1px solid #ccc',
                borderRadius: '4px',
                fontSize: '11px',
                cursor: 'pointer',
                zIndex: 999,
            }}
        >
            Logout
        </button>
    );
}

export default LogoutButton;
