function ListPage({ posts, onDelete }) {
    return (
        <div style={{ padding: '20px', fontFamily: "'DM Serif Display', serif" }}>
            <h2>Lists</h2>
            {posts.length === 0 ? (
                <p>There's nothing here!</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {posts.map((post, index) => (
                        <li
                            key={index}
                            style={{ marginBottom: '12px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}
                        >
                            {post}
                            <button
                                onClick={() => onDelete(index)}
                                style={{
                                    marginLeft: '10px',
                                    padding: '4px 10px',
                                    fontSize: '12px',
                                    backgroundColor: '#ff4d4f',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                }}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ListPage;
