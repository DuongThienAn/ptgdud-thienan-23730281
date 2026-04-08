import {  useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';

export default function Login() {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        login();

        navigate('/dashboard/profile'); // Đăng nhập xong thì dẫn vào Profile
    };

    return (
        <div>
            <h1>Trang Đăng Nhập</h1>
            <button onClick={handleLogin}>Đăng nhập</button>
        </div>
    );
}