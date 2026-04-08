import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
    const navigate = useNavigate();

    return (
        <div>
            <h2>Giỏ hàng của bạn</h2>
            <button onClick={ () => navigate('/checkout2')}>Tiến hành thanh toán</button>
        </div>
    )
}
