import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { userListAtom } from '../../state/Bai7/UserListAtom'

export default function UserList() {
    const [userState, setUserState] = useRecoilState(userListAtom);
    const url = 'https://jsonplaceholder.typicode.com/users';

    async function fetchData() {
        try {
            // Khi fetchData thì set loading = true
            setUserState({ data: [], loading: true, error: null });

            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`404 not found`);
            }

            const data = await response.json();

            // Fetch thành công: Tắt Loading, lưu Data
            setUserState({ data: data, loading: false, error: null });
        } catch (err) {
            setUserState({ data: [], loading: false, error: err.message })
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    // Đang loading
    if (userState.loading && userState.data.length === 0) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h3>Danh sách user</h3>
            <button onClick={fetchData} disabled={userState.loading}>
                {userState.loading ? 'Đang cập nhật...' : 'Làm mới dữ liệu'}
            </button>

            {/* Lỗi khi fetch */}
            {userState.error && <p style={{ color: 'red' }}>Lỗi: {userState.error}</p>}
                
            <ul>
                {userState.data.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    )
}
