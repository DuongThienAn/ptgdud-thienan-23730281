import React from 'react'
import { Link } from 'react-router-dom'

export default function Products2() {
    const products = [
        { id: 1, name: 'Product A', price: 100 },
        { id: 2, name: 'Product B', price: 150 },
        { id: 3, name: 'Product C', price: 200 },   
    ]

    return (
        <div>
            <h2>Danh sách item của cửa hàng</h2>
            {products.map((item) => (
                <div key={item.id}>
                    {item.name} - <Link to={`/products2/${item.id}`}>Xem chi tiết sản phẩm</Link>
                </div>
            ))}
        </div>
    )
}
