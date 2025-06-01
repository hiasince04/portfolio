import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import LogoutButton from '../components/LogoutButton';

function WritePage({ onSave }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSave = () => {
        if (title.trim() === '' || content.trim() === '') return;

        onSave({
            id: uuidv4(),
            title,
            content,
        });

        alert('작성 완료!');
        setTitle('');
        setContent('');
    };

    return (
        <div style={{ paddingLeft: '30px', paddingTop: '20px' }}>
            <h2>글 작성</h2>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목" />
            <br />
            <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="내용" />
            <br />
            <button onClick={handleSave}>저장</button>
            <button onClick={handleSave}>저장</button>

            <LogoutButton />
        </div>
    );
}

export default WritePage;
