import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import customAxios from '../api/customAxios';

function PostDetailPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await customAxios.get(`/blog/${id}/`);
                setPost(res.data);
            } catch (err) {
                alert('게시글을 불러오지 못했습니다.');
            }
        };
        fetchPost();
    }, [id]);

    const handleDelete = async () => {
        try {
            await customAxios.delete(`/blog/${id}/`);
            alert('삭제되었습니다.');
            navigate('/list');
        } catch (err) {
            alert('삭제 실패: ' + (err.response?.data?.detail || '에러'));
        }
    };

    if (!post) return <p style={{ fontFamily: "'DM Serif Display', serif" }}>로딩 중...</p>;

    return (
        <div style={{ padding: '40px', fontFamily: "'DM Serif Display', serif" }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                <button onClick={handleDelete} style={buttonStyleDelete}>
                    삭제
                </button>
                <Link to={`/post/${id}/edit`} style={buttonStyleEdit}>
                    수정
                </Link>
            </div>
        </div>
    );
}

const buttonStyleBase = {
    padding: '4px 10px',
    fontSize: '14px',
    borderRadius: '6px',
    fontFamily: "'DM Serif Display', serif",
    cursor: 'pointer',
};

const buttonStyleDelete = {
    ...buttonStyleBase,
    backgroundColor: '#ff4d4f',
    color: 'white',
    border: 'none',
};

const buttonStyleEdit = {
    ...buttonStyleBase,
    backgroundColor: '#6CA6A6',
    color: 'white',
    border: 'none',
};

export default PostDetailPage;
