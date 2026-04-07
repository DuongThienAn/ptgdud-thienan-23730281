import React from 'react'
import { Link, useParams } from 'react-router-dom';

export default function ProductDetail() {
    const { id } = useParams();  
    
    return (
        <div>
            <h2>Chi tiết sản phẩm</h2>
            <p>ID sản phẩm: {id}</p>
            <Link to="/products">Quay lại danh sách sản phẩm</Link>
        </div>
    )
}