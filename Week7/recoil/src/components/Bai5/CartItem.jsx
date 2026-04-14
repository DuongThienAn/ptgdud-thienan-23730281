import React from 'react'
import { useRecoilState } from 'recoil'
import { cartState } from '../../state/Bai5/CartStateAtom'

export default function CartItem({ item }) {
    const [cart, setCart] = useRecoilState(cartState);

    function updateQuantity(amount) {
        if (item.quantity + amount <= 0) {
            // Nếu số lượng sau khi cập nhật nhỏ hơn hoặc bằng 0 thì xóa item khỏi giỏ hàng
            setCart(cart.filter(itemInCart => itemInCart.id !== item.id));
        }
        else {
            // Cập nhật số lượng của item trong giỏ hàng
            setCart(cart.map(itemInCart => itemInCart.id === item.id ? { ...itemInCart, quantity: itemInCart.quantity + amount } : itemInCart));
        }
    }

    return (
        <div>
            <span>{item.name}</span> - ${item.price} 
            <span> | Số lượng: {item.quantity}</span>
            <button onClick={() => updateQuantity(-1)}>-</button>
            <button onClick={() => updateQuantity(1)}>+</button>
            <span> | Thành tiền: {item.price * item.quantity}$</span>
        </div >
    )
}
