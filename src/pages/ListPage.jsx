import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton';
import { getAllPostsAPI } from '../api/getAllPostsAPI';
import { deletePostAPI } from '../api/deletePostAPI';

function ListPage() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        try {
            const data = await getAllPostsAPI();
            setPosts(data);
        } catch {
            alert('게시글을 불러오지 못했습니다.');
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm('정말 삭제하시겠습니까?')) return;

        try {
            await deletePostAPI(id);
            setPosts((prev) => prev.filter((post) => post.id !== id));
        } catch (err) {
            if (err.response?.status === 403) {
                alert('삭제 권한이 없습니다.');
            } else {
                alert('삭제 실패: 서버 오류');
            }
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>게시글 목록</h2>
            {posts.length === 0 ? (
                <p>글이 없습니다.</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Link to={`/post/${post.id}`}>{post.title}</Link>
                            <button onClick={() => handleDelete(post.id)} style={{ marginLeft: '10px' }}>
                                삭제
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <LogoutButton />
        </div>
    );
}

export default ListPage;
