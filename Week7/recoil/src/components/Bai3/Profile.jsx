import React from 'react'
import { useRecoilState } from 'recoil'
import { userAtom } from '../../state/Bai3/UserAtom'

export default function Profile() {
    const [user, setUser] = useRecoilState(userAtom);

    function login() {
        setUser({ userName: 'user' });
    }

    function logout() {
        setUser(null);
    }

    return (
        <div>
            {user ? (
                <div>
                    <span>{user.userName}</span>
                    <div> <button onClick={logout}>Đăng xuất</button></div>
                   
                </div>
            ) : (
                <button onClick={login}>Đăng nhập</button>
            )}
        </div>
    )
}
