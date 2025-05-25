function ListPage({ posts }) {
    return (
        <div>
            <h2>글 목록</h2>
            {posts.length === 0 ? (
                <p>아직 작성된 글이 없습니다.</p>
            ) : (
                <ul>
                    {posts.map((post, index) => (
                        <li key={index}>{post}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default ListPage;
