import React from 'react'
import { useRecoilState } from 'recoil';
import { authAtom } from '../../state/Bai9/AuthAtom';
import { useState } from 'react';

export default function Login() {
    const [username, setUsername] = useState('emilys');
    const [password, setPassword] = useState('emilyspass');
    const [auth, setAuth] = useRecoilState(authAtom);
    const url = "https://dummyjson.com/auth/login";

    async function handleLogin() {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username: username.trim(), password: password.trim() })
            });
            const data = await response.json();
            console.log("Dữ liệu trả về từ API:", data);

            if (response.ok && data.accessToken) {
                localStorage.setItem('token', data.accessToken);

                setAuth({
                    user: { username: data.username, firstName: data.firstName },
                    token: data.accessToken,
                    isAuthenticated: true
                });
                alert("Đăng nhập thành công!");
            }
            else {
                alert("Lỗi: " + (data.message || "Sai tài khoản!"));
            }
        } catch (error) {
            console.error("Login không thành công" + error);
        }
    }

    return (
        <div>
            <h3>Đăng nhập</h3>

            <input type="text" placeholder='Nhập username...' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder='Nhập mật khẩu...' value={password} onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleLogin}>Đăng nhập</button>
        </div>
    )
}
