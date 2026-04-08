import React, { use } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function ProductDetail() {
    const { id } = useParams();  
    const navigate = useNavigate(); // Điều hướng bằng code

    const handleBuy = () => {
        navigate('/checkout'); // Điều hướng đến trang thanh toán sau khi mua hàng
    }

    return (
        <div>
            <h2>Chi tiết sản phẩm</h2>
            <p>ID sản phẩm: {id}</p>
            <button onClick={handleBuy}>Thêm vào giỏ hàng</button> <br />
            <Link to="/products">Quay lại danh sách sản phẩm</Link>
        </div>
    )
}
