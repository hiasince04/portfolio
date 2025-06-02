import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import customAxios from '../api/customAxios';

function ListPage() {
    const [posts, setPosts] = useState([]);

    // ✅ 서버에서 전체 게시글 불러오기
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await customAxios.get('/blog/');
                setPosts(res.data);
            } catch (err) {
                console.error('글 불러오기 실패:', err);
            }
        };
        fetchPosts();
    }, []);

    // ✅ 삭제 함수
    const handleDelete = async (id) => {
        try {
            await customAxios.delete(`/blog/${id}/`);
            alert('삭제 완료');
            setPosts((prev) => prev.filter((post) => post.id !== id)); // 로컬에서도 제거
        } catch (err) {
            alert('삭제 실패: ' + (err.response?.data?.detail || '에러'));
        }
    };

    return (
        <div style={{ padding: '40px', fontFamily: "'DM Serif Display', serif" }}>
            <h2 style={{ marginBottom: '20px' }}>게시글 목록</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {posts.map((post) => (
                    <li key={post.id} style={{ marginBottom: '12px' }}>
                        <Link
                            to={`/post/${post.id}`}
                            style={{
                                color: 'black',
                                textDecoration: 'none',
                                fontSize: '18px',
                            }}
                        >
                            {post.title}
                        </Link>
                        <button
                            onClick={() => handleDelete(post.id)}
                            style={{
                                marginLeft: '12px',
                                padding: '4px 8px',
                                fontSize: '14px',
                                borderRadius: '6px',
                                fontFamily: "'DM Serif Display', serif",
                                backgroundColor: '#ff4d4f',
                                color: 'white',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListPage;
