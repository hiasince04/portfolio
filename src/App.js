import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import WritePage from './pages/WritePage';
import ListPage from './pages/ListPage';
import MyFieldsPage from './pages/MyFieldsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PostDetailPage from './pages/PostDetailPage';
import PostEditPage from './pages/PostEditPage';
import LogoutButton from './components/LogoutButton';
import customAxios from './api/customAxios';

function App() {
    const [posts, setPosts] = useState([]);

    // 게시글 전체 불러오기
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await customAxios.get('/blog/');
                setPosts(res.data);
            } catch (err) {
                console.error('게시글 불러오기 실패:', err.response?.data || err);
            }
        };
        fetchPosts();
    }, []);

    // 삭제 후 리스트 갱신
    const deletePost = async (id) => {
        try {
            await customAxios.delete(`/blog/${id}/`);
            setPosts((prev) => prev.filter((p) => p.id !== id));
        } catch (err) {
            alert('삭제 실패');
        }
    };

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/write" element={<WritePage />} />
                <Route path="/list" element={<ListPage posts={posts} onDelete={deletePost} />} />
                <Route path="/myfields" element={<MyFieldsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/post/:id" element={<PostDetailPage posts={posts} />} />
                <Route path="/post/:id/edit" element={<PostEditPage />} />
            </Routes>
            <LogoutButton />
        </BrowserRouter>
    );
}

export default App;
