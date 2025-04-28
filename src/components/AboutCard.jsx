import React from 'react';

function AboutCard() {
    return (
        <div
            style={{
                backgroundColor: '#d1d1d1',
                color: 'black',
                padding: '30px',
                width: '50%',
                minHeight: '500px',
                boxSizing: 'border-box',
                borderRadius: '10px',
                fontFamily: '"Microsoft JhengHei UI", sans-serif',
                fontStyle: 'italic',
                position: 'relative',
                display: 'flex',
            }}
        >
            <div
                style={{
                    width: '2px',
                    height: '290px',
                    backgroundColor: 'black',
                    position: 'absolute',
                    bottom: '30px',
                    left: '40px',
                }}
            ></div>

            <div
                style={{
                    writingMode: 'vertical-rl',
                    textOrientation: 'mixed',
                    fontSize: '28px',
                    marginRight: '40px', // 오른쪽 공간 벌리기
                    alignSelf: 'flex-start', // ✅ 위쪽에 붙게
                }}
            >
                About her
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '40px' }}>
                    <div
                        style={{
                            fontSize: '24px',
                            marginBottom: '20px',
                            fontFamily: '"Cascadia Mono ExtraLight", monospace',
                            fontStyle: 'normal',
                        }}
                    >
                        Be honest in love
                    </div>

                    <div style={{ marginTop: '-10px', fontStyle: 'normal' }}>
                        <p>Braveness</p>
                        <p>Thorough</p>
                        <p>Sociable</p>
                    </div>
                </div>

                <div style={{ fontStyle: 'normal', fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>
                    Learning
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', maxWidth: '400px' }}>
                    {['Notion', 'Python', 'React.js', 'HTML5', 'JavaScript', 'CSS3', 'styled components'].map(
                        (tool) => (
                            <div
                                key={tool}
                                style={{
                                    backgroundColor: '#f9f6ec',
                                    padding: '5px 10px',
                                    borderRadius: '5px',
                                    flexBasis: '30%',
                                    textAlign: 'center',
                                    fontStyle: 'normal',
                                    fontWeight: 'bold',
                                }}
                            >
                                {tool}
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
}

export default AboutCard;
