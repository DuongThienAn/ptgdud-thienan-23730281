import { Link } from 'react-router-dom';

export default function ProductList() {
    const products = [
        { id: 1, name: 'Iphone' },
        { id: 2, name: 'Samsung' },
        { id: 3, name: 'Laptop' }
    ];

    return (
        <div>
            <h2>Danh sách sản phẩm</h2>

            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}