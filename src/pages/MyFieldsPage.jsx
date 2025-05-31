import React from 'react';
import sheworks from '../assets/sheworks.png';

function MyFieldsPage() {
    return (
        <div
            style={{
                backgroundColor: '#f8f8f8',
                height: '100vh', // ✅ 정확히 한 화면 높이
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* 상단바는 App.jsx에서 자동 포함됨 */}

            <div
                style={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingTop: '10px', // 조금만 여유
                    boxSizing: 'border-box',
                }}
            >
                <img
                    src={sheworks}
                    alt="sheworks"
                    style={{
                        maxHeight: '80vh', // ✅ 한 화면 내 제한
                        maxWidth: '90%',
                        height: 'auto',
                        width: 'auto',
                        objectFit: 'contain',
                        borderRadius: '12px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                    }}
                />
            </div>
        </div>
    );
}

export default MyFieldsPage;
