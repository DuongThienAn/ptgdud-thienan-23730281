import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { cartStatsSelector } from '../../state/Bai10/CartContext';
import { authAtom } from '../../state/Bai9/AuthAtom';

export default function Navbar() {
    const { total, count } = useRecoilValue(cartStatsSelector);
    const [auth, setAuth] = useRecoilState(authAtom);

    const logout = () => {
        localStorage.removeItem('token');
        setAuth({
            user: null,
            token: null,
            isAuthenticated: false
        });
    };

    return (
        <nav >
            <h3>Giỏ hàng</h3>
            <div>
                <span>Giỏ hàng: <b>{count}</b> món | Tổng tiền: {total.toFixed(2)}$</span>
                <button onClick={logout}>Đăng xuất</button>
            </div>
        </nav>
    );
}