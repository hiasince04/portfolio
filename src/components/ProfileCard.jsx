import React from 'react';
import profileImage from '../assets/profile.jpg';

function ProfileCard() {
    return (
        <div
            style={{
                backgroundColor: '#7c7c7c',
                color: 'white',
                padding: '30px',
                width: '50%',
                height: '500px',
                boxSizing: 'border-box',
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
            }}
        >
            <h1 style={{ fontFamily: 'Arial', fontWeight: 'bold', marginBottom: '30px' }}>Kwon Juyeon</h1>

            <div style={{ display: 'flex', flexGrow: 1 }}>
                <div style={{ flex: 2 }}>
                    <p>
                        <em>Hankuk University of Foreign Studies</em>
                        <br />
                        College of English 2023-Now
                    </p>
                    <p>
                        <em>Woosung High School</em>
                        <br />
                        2020-2022
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

            <div style={{ marginTop: '30px' }}>
                <h2>Contact</h2>
                <p>📞 010-6397-7358</p>
                <p>📷 jxyeoni</p>
                <p>📧 202300401@hufs.ac.kr</p>
            </div>
        </div>
    );
}

export default ProfileCard;
