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
        <div style={{ paddingLeft: '30px', paddingTop: '20px' }}>
            <h2 style={{ fontFamily: "'DM Serif Display', serif" }}>MEMO</h2>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows="20"
                cols="50"
                placeholder="Write Something!"
                style={{
                    display: 'block',
                    fontFamily: "'DM Serif Display', serif",
                    marginBottom: '20px',
                    padding: '10px',
                    fontSize: '14px',
                    borderRadius: '6px',
                    border: '1px solid #ccc',
                }}
            />
            <button onClick={handleSave} style={{ fontFamily: "'DM Serif Display', serif" }}>
                Save
            </button>
        </div>
    );
}

export default WritePage;
