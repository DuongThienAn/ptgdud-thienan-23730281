import React from 'react'
import { Link } from 'react-router-dom'

export default function Checkout2() {
    return (
        <div>
            <h2>Trang thanh toán</h2>
            <p>Thanh toán thành công</p>

            <Link to="/products2">Tiếp tục mua sắm</Link>
        </div>
    )
}
