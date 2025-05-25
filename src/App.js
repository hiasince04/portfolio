import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import WritePage from './pages/WritePage';
import ListPage from './pages/ListPage';

function App() {
    const [posts, setPosts] = useState([]);

    const addPost = (text) => {
        setPosts([...posts, text]);
    };

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/write" element={<WritePage onSave={addPost} />} />
                <Route path="/list" element={<ListPage posts={posts} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
