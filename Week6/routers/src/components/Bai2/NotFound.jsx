import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>Đường dẫn không tồn tại!</p>
            <Link to="/">Quay về trang chủ</Link>
        </div>
    )
}
