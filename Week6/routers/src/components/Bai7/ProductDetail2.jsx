import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

export default function ProductDetail2() {
    const { id } = useParams()  // Lấy id từ URL
    const navigate = useNavigate();

    return (
        <div>
            <h2>Chi tiết sản phẩm ID: {id}</h2>
            <button onClick={() => navigate('/cart')}>Thêm vào giỏ hàng</button> <br />
            <Link to="/products2">Quay lại danh sách sản phẩm</Link>
        </div>
    )
}
