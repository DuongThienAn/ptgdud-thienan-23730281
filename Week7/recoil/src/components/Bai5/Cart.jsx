import React from 'react'
import { useRecoilValue } from 'recoil'
import { cartState, cartTotalSelector } from '../../state/Bai5/CartStateAtom'
import CartItem from './CartItem';

export default function Cart() {
    const cart = useRecoilValue(cartState);
    const totalPrice = useRecoilValue(cartTotalSelector);

    return (
        <div>
            <h2>Giỏ hàng của bạn</h2>
            {cart.length === 0 ? <p>Giỏ hàng của bạn đang trống.</p> : (
                <div>
                    {cart.map(item => <CartItem key={item.id} item={item} />)}
                    <h3>Tổng cộng: ${totalPrice.toFixed(2)}</h3>
                </div>
            )}
        </div>
    )
}
