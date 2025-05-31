import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import profileImage from '../assets/profile.jpg';
import likelionImg from '../assets/likelion.png';
import elltImg from '../assets/ellt.png';
import campusImg from '../assets/campus.png';

function ProfileCard() {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            style={{
                backgroundColor: '#7c7c7c',
                color: 'white',
                padding: '30px',
                width: '50%',
                minHeight: '500px',
                boxSizing: 'border-box',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                position: 'relative',
                fontFamily: "'Noto Sans KR', sans-serif",
                overflow: 'visible',
            }}
        >
            {/* 이름 + hover 감지 */}
            <div
                style={{ position: 'relative', display: 'inline-block' }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <h1
                    style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontWeight: 'bold',
                        marginBottom: '30px',
                    }}
                >
                    Kwon Juyeon
                </h1>

                {/* 팝업 */}
                {hovered &&
                    ReactDOM.createPortal(
                        <div
                            style={{
                                position: 'fixed',
                                top: '100px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                width: '420px',
                                maxWidth: '90vw',
                                backgroundColor: '#f4f4f4',
                                color: '#222',
                                padding: '25px',
                                borderRadius: '16px',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                                zIndex: 100,
                            }}
                        >
                            <h3
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: '24px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    textDecoration: 'underline',
                                }}
                            >
                                <a
                                    href="/my-fields"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    My Fields
                                </a>
                            </h3>

                            <p style={{ fontSize: '13px', fontStyle: 'italic', color: '#444', marginBottom: '10px' }}>
                                어디든 가본다면 세월이 지나고 어디에 가서 어디든 나의 땅
                            </p>
                            <p>현재 한국외국어대학교에서 언어공학과 컴퓨터공학을 함께 공부하고 있습니다.</p>
                            <p>
                                멋쟁이사자처럼 프론트엔드 트랙에서 웹 개발과 서비스 기획에 도전하며 성장해 나가는
                                중이에요.
                            </p>
                            <p>사용자에 대한 선한 마음과 진심은 결국 전해진다고 믿습니다.</p>
                            <p>뜻을 담은 기술과 사람을 연결하는 개발자가 되고 싶습니다.</p>

                            <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                                <img src={likelionImg} alt="likelion logo" style={imageStyle} />
                                <img src={elltImg} alt="ELLT" style={imageStyle} />
                                <img src={campusImg} alt="campus" style={imageStyle} />
                            </div>
                        </div>,
                        document.body
                    )}
            </div>

            {/* 기본 소개 정보 */}
            <div style={{ display: 'flex', flexGrow: 1 }}>
                <div style={{ flex: 2 }}>
                    <p>
                        <em>Hankuk University of Foreign Studies</em>
                        <br />
                        College of English 2023–Now
                    </p>
                    <p>
                        <em>Woosung High School</em>
                        <br />
                        2020–2022
                    </p>
                </div>

                <div
                    style={{
                        flex: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <img
                        src={profileImage}
                        alt="Profile"
                        style={{
                            width: '100px',
                            height: '130px',
                            objectFit: 'cover',
                            backgroundColor: 'white',
                            borderRadius: '5px',
                            marginLeft: '10px',
                        }}
                    />
                </div>
            </div>

            {/* 연락처 */}
            <div style={{ marginTop: '30px' }}>
                <h2>Contact</h2>
                <p>📞 010-6397-7358</p>
                <p>📷 jxyeoni</p>
                <p>📧 202300401@hufs.ac.kr</p>
            </div>
        </div>
    );
}

const imageStyle = {
    width: '100px',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

export default ProfileCard;
