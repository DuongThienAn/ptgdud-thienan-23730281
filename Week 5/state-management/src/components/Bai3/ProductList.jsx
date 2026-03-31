import { useContext } from "react";
import { CartContext } from "./CartProvider";

// Data products
const products = [
    { id: 1, name: "Sản phẩm A", price: 100 },
    { id: 2, name: "Sản phẩm B", price: 200 },
    { id: 3, name: "Sản phẩm C", price: 300 },
]

function ProductList() {
    const { dispatch } = useContext(CartContext);
    
    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - Giá: {product.price}$
                        <button onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}>
                            Thêm vào giỏ hàng
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList;