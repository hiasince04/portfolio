import { useState } from 'react';

function WritePage({ onSave }) {
    const [text, setText] = useState('');

    const handleSave = () => {
        if (text.trim() === '') return;
        onSave(text); // App.js의 addPost 실행됨!
        alert('작성된 글: ' + text);
        setText('');
    };

    return (
        <div>
            <h2>글쓰기</h2>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows="10"
                cols="50"
                placeholder="여기에 글을 작성하세요"
            />
            <br />
            <button onClick={handleSave}>저장</button>
        </div>
    );
}

export default WritePage;
