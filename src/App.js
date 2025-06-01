import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import WritePage from './pages/WritePage';
import ListPage from './pages/ListPage';
import MyFieldsPage from './pages/MyFieldsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PostDetailPage from './pages/PostDetailPage';
//import PostEditPage from './pages/PostEditPage';
import PostEditPage from './pages/PostEditPage';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/write" element={<WritePage />} />
                <Route path="/list" element={<ListPage />} />
                <Route path="/myfields" element={<MyFieldsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/post/:id" element={<PostDetailPage />} />
                <Route path="/post/:id/edit" element={<PostEditPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
