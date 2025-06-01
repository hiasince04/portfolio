import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostDetailAPI } from '../api/getPostDetailAPI';
import LogoutButton from '../components/LogoutButton';

function PostDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const data = await getPostDetailAPI(id);
                setPost(data);
            } catch (err) {
                if (err.response?.status === 404) {
                    setError('해당 게시글을 찾을 수 없습니다.');
                } else {
                    setError('게시글 불러오기 실패');
                }
            }
        };
        fetchPost();
    }, [id]);

    if (error) return <div style={{ padding: '20px', color: 'red' }}>{error}</div>;
    if (!post) return <div style={{ padding: '20px' }}>불러오는 중...</div>;

    return (
        <div style={{ padding: '40px' }}>
            <h2>{post.title}</h2>
            <p style={{ whiteSpace: 'pre-line' }}>{post.body}</p>
            <button onClick={() => navigate(-1)}>← 목록으로</button>
            <LogoutButton />
        </div>
    );
}

export default PostDetailPage;
