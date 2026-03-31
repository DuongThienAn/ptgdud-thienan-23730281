import { useContext } from "react";
import { CartContext } from "./CartProvider";

function Cart() {
    const { cart, dispatch } = useContext(CartContext);

    function totalPriceOfCart() {
        let sum = 0;
        for (let i = 0; i < cart.length; i++) {
            sum += cart[i].price * cart[i].quantity;
        }

        return sum;
    }

    // Tổng tiền của giỏ hàng hiện tại được tính toán lại mỗi khi cart thay đổi
    const totalPrice = useMemo(() => (
        totalPriceOfCart()
    ), [cart]);

    return (
        <div>
            <div>
                <h2>Giỏ hàng</h2>
                <p>Số sản phẩm: {cart.length}</p>

                <ul>
                    {cart.map(item => (
                        <li key={item.id}>
                            {item.name} - Giá: {item.price}$

                            <br />

                            <button onClick={() => dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, amount: -1 } })}>-</button>
                            <span> Số lượng: {item.quantity} </span>
                            
                            <button onClick={() => dispatch({ type: "UPDATE_QUANTITY", payload: { id: item.id, amount: 1 } })}>+</button>

                            <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}>Xóa</button>
                        </li>
                    ))}
                </ul>

                <h3>Tổng tiền: {totalPrice}$</h3>
            </div>
        </div>
    )
}

export default Cart;