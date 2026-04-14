import React from 'react'
import { authAtom } from '../../state/Bai9/AuthAtom';
import { useRecoilState } from 'recoil';

export default function UserProfile() {
    const [auth, setAuth] = useRecoilState(authAtom);
    const url = "https://dummyjson.com/auth/me";

    function handleLogout() {
        localStorage.removeItem('token');
        setAuth({ user: null, token: null, isAuthenticated: false });
    }

    async function fetchSecretData() {
        try {
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${auth.token}`, // Gửi token lên server để xác thực
                }
            });
            const data = await res.json();

            if (res.ok) {
                console.log("Dữ liệu bảo mật (User Info):", data);
                alert(`Chào ${data.firstName}, đã lấy dữ liệu thành công!`);
            }
            else {
                alert("Token hết hạn hoặc không hợp lệ!");
            }
        } catch (error) {
            console.error("Lỗi:", error);
        }
    }


    return (
        <div>
            <h3>Chào mừng, {auth.user?.username}</h3>
            <p>Token: <small>{auth.token?.substring(0, 15)}...</small></p>
            <button onClick={fetchSecretData}>Gọi API bảo mật</button>
            <button onClick={handleLogout}>Đăng xuất</button>
        </div>
    )
}
