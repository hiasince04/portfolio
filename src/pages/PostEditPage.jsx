// src/pages/PostEditPage.jsx
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostDetailAPI } from '../api/getPostDetailAPI';
import { updatePostAPI } from '../api/updatePostAPI';
import LogoutButton from '../components/LogoutButton';

function PostEditPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const data = await getPostDetailAPI(id);
                setTitle(data.title);
                setBody(data.body);
            } catch {
                setError('글을 불러오는 데 실패했습니다.');
            }
        };
        fetchPost();
    }, [id]);

    const handleUpdate = async () => {
        try {
            await updatePostAPI(id, { title, body });
            alert('수정 완료!');
            navigate(`/post/${id}`);
        } catch (err) {
            if (err.response?.status === 403) {
                alert('수정 권한이 없습니다.');
            } else {
                alert('수정 실패: ' + (err.response?.data?.detail || '서버 오류'));
            }
        }
    };

    if (error) return <div style={{ padding: '20px', color: 'red' }}>{error}</div>;

    return (
        <div style={{ padding: '40px' }}>
            <h2>글 수정</h2>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목"
                style={{ display: 'block', width: '400px', marginBottom: '10px' }}
            />
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="내용"
                rows="10"
                cols="50"
                style={{ display: 'block', marginBottom: '10px' }}
            />
            <button onClick={handleUpdate}>수정 완료</button>
            <LogoutButton />
        </div>
    );
}

export default PostEditPage;
