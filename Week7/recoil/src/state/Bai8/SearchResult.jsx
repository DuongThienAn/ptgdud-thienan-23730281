import React from 'react'
import { useRecoilValue } from 'recoil'
import { searchResultAtom } from './SearchResultAtom';

export default function SearchResult() {
    const { results, loading } = useRecoilValue(searchResultAtom);
    
    if (loading) return <p>Đang tải...</p>;

    return (
        <div>
            <h3>Kết quả tìm kiếm</h3>
            <ul>
                {results.map(user => (
                    <li key={user.id}>{user.name} - {user.email}</li>
                ))}
            </ul>
                
            { results.length === 0 && <p>Không tìm thấy kết quả nào.</p>}
        </div>
    )
}
