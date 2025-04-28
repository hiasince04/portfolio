import React from 'react';
import ProfileCard from './components/ProfileCard';
import AboutCard from './components/AboutCard';

function App() {
    return (
        <div
            style={{
                backgroundColor: '#f9f9f9', // 전체 배경은 밝은 회색 느낌 (흰색에 가깝게)
                minHeight: '100vh',
                padding: '30px',
                fontFamily: 'Arial, sans-serif',
            }}
        >
            {/* 1. 위에 제목 */}
            <h1 style={{ marginBottom: '10px' }}>Profile.</h1>

            {/* 2. 밑줄 */}
            <hr style={{ border: '1px solid black', marginBottom: '30px' }} />

            {/* 3. 카드 두 개 나란히 */}
            <div
                style={{
                    display: 'flex',
                    gap: '20px', // 카드 사이 간격
                }}
            >
                <ProfileCard />
                <AboutCard />
            </div>
        </div>
    );
}

export default App;
