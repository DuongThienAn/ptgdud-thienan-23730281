import { createContext, useReducer, useEffect } from "react";

export const CartContext = createContext();
function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            const existingItem = state.find(item => item.id === action.payload.id);
            if (existingItem) {
                return state.map(item => item.id === action.payload.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
                );
            }

            // Nếu chưa có product trong giỏ hàng, thêm mới với số lượng mặc định là 1
            return [...state, { ...action.payload, quantity: 1 }];

        case "REMOVE_FROM_CART":
            return state.filter(item => item.id !== action.payload);

        case "UPDATE_QUANTITY":
            return state.map(item => item.id === action.payload.id
                ? { ...item, quantity: item.quantity + action.payload.amount }
                : item
            );

        default:
            return state;
    }
}

// Lấy dữ liệu từ localStorage làm state ban đầu 
const initCart = JSON.parse(localStorage.getItem("cart")) || [];

function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, initCart);

    // Lưu trữ cart vào localStorage mỗi khi cart thay đổi
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;