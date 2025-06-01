import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPostAPI } from '../api/createPostAPI';
import LogoutButton from '../components/LogoutButton';

function WritePage() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (title.trim() === '' || body.trim() === '') return alert('제목과 내용을 모두 입력하세요!');
        try {
            await createPostAPI({ title, body });
            alert('게시글이 등록되었습니다!');
            navigate('/list');
        } catch (err) {
            alert('글 작성 실패: ' + (err.response?.data?.detail || '서버 오류'));
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>글 작성</h2>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="제목"
                style={{ display: 'block', marginBottom: '10px', width: '400px' }}
            />
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="내용"
                rows="10"
                cols="50"
                style={{ display: 'block', marginBottom: '10px' }}
            />
            <button onClick={handleSubmit}>작성 완료</button>
            <LogoutButton />
        </div>
    );
}

export default WritePage;
