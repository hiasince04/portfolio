import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import customAxios from '../api/customAxios';

function PostEditPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await customAxios.get(`/blog/${id}/`);
                setTitle(res.data.title);
                setBody(res.data.body);
            } catch {
                alert('글 정보를 불러오지 못했습니다.');
            }
        };
        fetchData();
    }, [id]);

    const handleEdit = async () => {
        try {
            await customAxios.put(`/blog/${id}/`, { title, body });
            alert('수정 완료');
            navigate(`/post/${id}`);
        } catch (err) {
            alert('수정 실패: ' + (err.response?.data?.detail || '에러'));
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: "'DM Serif Display', serif",
                paddingTop: '40px',
            }}
        >
            <h2 style={{ marginBottom: '20px' }}>글 수정</h2>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{
                    width: '400px',
                    marginBottom: '10px',
                    padding: '8px',
                    fontSize: '14px',
                    fontFamily: "'DM Serif Display', serif",
                    border: '2px solid #ccc',
                    borderRadius: '4px',
                }}
            />
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={10}
                style={{
                    width: '400px',
                    marginBottom: '20px',
                    padding: '8px',
                    fontSize: '14px',
                    fontFamily: "'DM Serif Display', serif",
                    border: '2px solid #ccc',
                    borderRadius: '4px',
                }}
            />
            <button onClick={handleEdit} style={buttonStyleEdit}>
                Save
            </button>
        </div>
    );
}

const buttonStyleEdit = {
    padding: '6px 14px',
    fontSize: '14px',
    borderRadius: '6px',
    fontFamily: "'DM Serif Display', serif",
    backgroundColor: '#6CA6A6',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
};

export default PostEditPage;
