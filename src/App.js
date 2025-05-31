import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import WritePage from './pages/WritePage';
import ListPage from './pages/ListPage';
import MyFieldsPage from './pages/MyFieldsPage'; // ✅ 추가

function App() {
    const [posts, setPosts] = useState([]);

    const addPost = (text) => setPosts([...posts, text]);
    const deletePost = (index) => setPosts(posts.filter((_, i) => i !== index));

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/write" element={<WritePage onSave={addPost} />} />
                <Route path="/list" element={<ListPage posts={posts} onDelete={deletePost} />} />
                <Route path="/my-fields" element={<MyFieldsPage />} /> {/* ✅ 추가 */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
