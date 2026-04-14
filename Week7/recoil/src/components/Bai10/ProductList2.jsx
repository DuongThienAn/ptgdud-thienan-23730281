import React, { useEffect } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { productAtom } from '../../state/Bai10/ProductContext';
import { cartAtom } from '../../state/Bai10/CartContext';
import { notifyAtom } from '../../state/Bai6/NotifyAtom';

export default function ProductList2() {
    const [products, setProducts] = useRecoilState(productAtom);
    const [cart, setCart] = useRecoilState(cartAtom);
    const [notify, setNotify] = useRecoilState(notifyAtom);
    const url = 'https://dummyjson.com/products?limit=8';

    useEffect(() => {
        const fetchItems = async () => {
            setProducts({ items: [], loading: true, error: null });

            try {
                const res = await fetch(url);
                const data = await res.json();

                setProducts({
                    items: data.products,
                    loading: false,
                    error: null
                });
            } catch (err) {
                setProducts({
                    items: [],
                    loading: false,
                    error: "Không thể tải hàng"
                });
            }
        };

        fetchItems();
    }, []);

    const handleAddToCart = (item) => {
        setCart(oldCart => {
            const existingItem = oldCart.find(i => i.id === item.id);
            if (existingItem) {
                // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng số lượng lên 1
                return oldCart.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
            }

            // Thêm sản phẩm mới vào giỏ hàng với số lượng mặc định là 1
            return [...oldCart, { ...item, quantity: 1 }];
        });

        // Hiện thông báo toast khi thêm sản phẩm vào giỏ hàng thành công
        const nid = Date.now();
        setNotify(prev => [...prev, { id: nid, message: `Đã thêm ${item.title}`, type: 'success' }]);
        
        // Tự động xóa thông báo sau 2 giây
        setTimeout( () => setNotify(prev => prev.filter(n => n.id !== nid)), 2000);
    };

    // Xử lý trạng thái loading và lỗi
    if (products.loading) return <p>Đang tải hàng...</p>;

    if (products.error) return <p style={{ color: 'red' }}>{products.error}</p>;

    return (
        <div >
            <h3>Danh sách sản phẩm</h3>
            {products.items.map(product => (
                <div key={product.id}>
                    <h4>{product.title}</h4>
                    <p>{product.price}$</p>
                    <button onClick={() => handleAddToCart(product)}>Thêm vào giỏ</button>
                </div>
            ))}
        </div>
    );
}