import React from 'react';
import ProfileCard from '../components/ProfileCard';
import AboutCard from '../components/AboutCard';
import LogoutButton from '../components/LogoutButton';

function MainPage() {
    return (
        <div
            style={{
                backgroundColor: '#f2f2f2',
                minHeight: '100vh',
                overflow: 'visible', // ✅ 팝업이 잘리지 않도록
            }}
        >
            {/* 상단 고정 네비게이션 */}

            {/* 메인 내용 */}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    padding: '50px',
                    gap: '30px',
                    fontFamily: "'Noto Sans KR', sans-serif",
                    boxSizing: 'border-box',
                }}
            >
                {/* 왼쪽: 프로필 */}
                <ProfileCard />

                {/* 오른쪽: 자기소개 + 기술스택 */}
                <AboutCard />
            </div>

            {/* 하단 로그아웃 버튼 */}
            <LogoutButton />
        </div>
    );
}

export default MainPage;
