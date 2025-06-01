import { Link } from 'react-router-dom';
import LogoutButton from '../components/LogoutButton';

function ListPage({ posts, onDelete }) {
    return (
        <div style={{ padding: '20px' }}>
            <h2>List</h2>
            {posts.length === 0 ? (
                <p>There's nothing here!</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Link to={`/post/${post.id}`}>{post.title}</Link>
                            <button onClick={() => onDelete(post.id)} style={{ marginLeft: '10px' }}>
                                Delete
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
