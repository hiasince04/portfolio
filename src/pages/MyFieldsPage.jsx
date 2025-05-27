// src/pages/MyFieldsPage.jsx
import React from 'react';
import likelion from '../assets/likelion.png';
import ellt from '../assets/ellt.png';
import campus from '../assets/campus.png';

function MyFieldsPage() {
    return (
        <div
            style={{
                backgroundColor: '#bfbfbf',
                minHeight: '100vh',
                padding: '50px',
                fontFamily: "'Noto Sans KR', sans-serif",
                boxSizing: 'border-box',
            }}
        >
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '40px', marginBottom: '10px' }}>
                My Fields
            </h1>
            <p style={{ fontSize: '14px', fontStyle: 'italic', marginBottom: '30px' }}>
                어디든 가본다면 세월이 지나고 어디에 가서 어디든 나의 땅
            </p>

            <div style={{ display: 'flex', gap: '30px', marginBottom: '30px' }}>
                <img src={likelion} alt="likelion" style={{ width: '200px' }} />
                <img src={campus} alt="campus" style={{ width: '300px' }} />
                <img src={ellt} alt="ellt" style={{ width: '300px' }} />
            </div>

            <div style={{ fontSize: '17px', lineHeight: '1.8', maxWidth: '800px' }}>
                <p>현재 한국외국어대학교에서 언어공학과 컴퓨터공학을 함께 공부하고 있습니다.</p>
                <p>멋쟁이사자처럼 프론트엔드 트랙에서 웹 개발과 서비스 기획에 도전하며 성장해 나가는 중이에요.</p>
                <p>사용자에 대한 선한 마음과 진심은 결국 전해진다고 믿습니다.</p>
                <p>뜻을 담은 기술과 사람을 연결하는 개발자가 되고 싶습니다.</p>
            </div>
        </div>
    );
}

export default MyFieldsPage;
