import React from 'react'
import { useRecoilState } from 'recoil';
import { cartState } from '../../state/Bai5/CartStateAtom';

// Danh sách sản phẩm trong shop
const products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
    { id: 4, name: 'Product 4', price: 400 },
    { id: 5, name: 'Product 5', price: 500 },
    { id: 6, name: 'Product 6', price: 600 },
];

export default function ProductList() {
    const [cart, setCart] = useRecoilState(cartState);

    function addToCart(product) {
        setCart((oldCart) => {
            const existingItem = oldCart.find(item => item.id === product.id);
            if (existingItem) {
                // Nếu đã có product trong giỏ hàng (cart) thì duyệt tìm đến product đó và tăng quantity lên 1
                return oldCart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }

            // Nếu chưa có product chuẩn bị thêm vào giỏ hàng (cart) thì thêm mới với quantity = 1
            return [...oldCart, { ...product, quantity: 1 }]
        })
    }


    return (
        <div>
            <h3>Sản phẩm của cửa hàng</h3>
            {products.map(product => (
                <div key={product.id}>
                    <span>{product.name} - {product.price}$</span>
                    <button onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
                </div>
            ))}
        </div>
    )
}
