import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPostDetailAPI } from '../api/getPostDetailAPI';
import { deletePostAPI } from '../api/deletePostAPI';
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

    const handleDelete = async () => {
        if (!window.confirm('정말 삭제하시겠습니까?')) return;
        try {
            await deletePostAPI(id);
            alert('삭제 완료!');
            navigate('/list');
        } catch (err) {
            if (err.response?.status === 403) {
                alert('삭제 권한이 없습니다.');
            } else {
                alert('삭제 실패: 서버 오류');
            }
        }
    };

    const handleEdit = () => {
        navigate(`/post/${id}/edit`);
    };

    if (error) return <div style={{ padding: '20px', color: 'red' }}>{error}</div>;
    if (!post) return <div style={{ padding: '20px' }}>불러오는 중...</div>;

    return (
        <div style={{ padding: '40px' }}>
            <h2>{post.title}</h2>
            <p style={{ whiteSpace: 'pre-line' }}>{post.body}</p>

            <div style={{ marginTop: '20px' }}>
                <button
                    onClick={handleDelete}
                    style={{
                        marginRight: '10px',
                        backgroundColor: '#ff4d4f',
                        color: 'white',
                        border: 'none',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    삭제
                </button>
                <button
                    onClick={handleEdit}
                    style={{
                        backgroundColor: '#5f9ea0',
                        color: 'white',
                        border: 'none',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                >
                    수정
                </button>
                <button onClick={() => navigate(`/post/${post.id}/edit`)}>수정</button>
            </div>

            <LogoutButton />
        </div>
    );
}

export default PostDetailPage;
