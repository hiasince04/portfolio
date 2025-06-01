import { useParams, useNavigate } from 'react-router-dom';

function PostDetailPage({ posts }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const post = posts.find((p) => p.id === id);

    if (!post) return <p>존재하지 않는 글입니다.</p>;

    return (
        <div style={{ padding: '40px' }}>
            <h2>{post.title}</h2>
            <p style={{ whiteSpace: 'pre-line' }}>{post.content}</p>
            <button onClick={() => navigate(-1)}>← 목록으로</button>
        </div>
    );
}

export default PostDetailPage;
