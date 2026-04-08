import React from 'react'
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

export default function ProtectedRoute({ children }) {
    const { user } = useContext(AuthContext);

    if (!user) {
        // Nếu người dùng chưa đăng nhập, chuyển hướng đến trang login
        return <Navigate to="/login" />;
    }

    return children; // Nếu người dùng đã đăng nhập, hiển thị nội dung của route
}
