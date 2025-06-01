import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import WritePage from './pages/WritePage';
import ListPage from './pages/ListPage';
import MyFieldsPage from './pages/MyFieldsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { v4 as uuidv4 } from 'uuid';
import PostDetailPage from './pages/PostDetailPage';

function App() {
    const [posts, setPosts] = useState([]);

    const addPost = (post) => {
        setPosts([...posts, post]);
    };

    const deletePost = (id) => {
        setPosts(posts.filter((p) => p.id !== id));
    };

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/write" element={<WritePage onSave={addPost} />} />
                <Route path="/list" element={<ListPage posts={posts} onDelete={deletePost} />} />
                <Route path="/myfields" element={<MyFieldsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/post/:id" element={<PostDetailPage posts={posts} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
