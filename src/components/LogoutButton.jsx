// src/components/LogoutButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutAPI } from '../api/logoutAPI';

function LogoutButton() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logoutAPI();
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            alert('로그아웃 되었습니다.');
            navigate('/login');
        } catch (err) {
            alert('로그아웃 실패: ' + (err.response?.data?.detail || '서버 오류'));
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
                onClick={handleLogout}
                style={{
                    fontSize: '12px',
                    backgroundColor: '#eee',
                    color: '#333',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    padding: '4px 10px',
                    cursor: 'pointer',
                }}
            >
                로그아웃
            </button>
        </div>
    );
}

export default LogoutButton;
