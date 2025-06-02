import { useState } from 'react';
import customAxios from '../api/customAxios';
import { useNavigate } from 'react-router-dom';

function WritePage() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    const handleSave = async () => {
        if (title.trim() === '' || body.trim() === '') return;
        try {
            await customAxios.post('/blog/', { title, body });
            alert('글이 작성되었습니다!');
            navigate('/list');
        } catch (err) {
            alert('작성 실패: ' + (err.response?.data?.detail || '에러 발생'));
        }
    };

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: "'DM Serif Display', serif",
                backgroundColor: '#f9f9f9',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'white',
                    padding: '40px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
            >
                <h2 style={{ marginBottom: '20px' }}>MEMO</h2>

                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="제목"
                    style={{
                        marginBottom: '12px',
                        padding: '10px',
                        width: '300px',
                        border: '2px solid #888',
                        borderRadius: '5px',
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: '14px',
                    }}
                />

                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="내용"
                    rows="10"
                    style={{
                        marginBottom: '16px',
                        padding: '10px',
                        width: '300px',
                        border: '2px solid #888',
                        borderRadius: '5px',
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: '14px',
                    }}
                />

                <button
                    onClick={handleSave}
                    style={{
                        padding: '8px 16px',
                        borderRadius: '6px',
                        border: '1px solid #ccc',
                        backgroundColor: '#f0f0f0',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontFamily: "'DM Serif Display', serif",
                    }}
                >
                    Save!
                </button>
            </div>
        </div>
    );
}

export default WritePage;
