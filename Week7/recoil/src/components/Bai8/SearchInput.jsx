import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { searchResultAtom } from '../../state/Bai8/SearchResultAtom'

export default function SearchInput() {
    const [searchValue, setSearchValue] = useState('');
    const [setResult, setSearchResult] = useRecoilState(searchResultAtom);
    const url = "https://jsonplaceholder.typicode.com/users";

    useEffect( () => {
        if (searchValue.trim() === '') {
            setSearchResult({ results: [], loading: false });
            return;
        }

        // Bật loading ngay khi người dùng bắt đầu ngừng gõ và chuẩn bị gửi request
        setSearchResult({ results: [], loading: true });

        // Kỹ thuật Debounce: Đợi 500ms sau khi ngừng gõ mới chạy code bên trong
        const handler = setTimeout( async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();

                const filteredResults = data.filter(user => user.name.toLowerCase().includes(searchValue.toLowerCase()));
                setSearchResult({ results: filteredResults, loading: false });
            } catch (err) {
                console.error(err.message);
                setSearchResult({ results: [], loading: false });
            }
        }, 500);

        // Clear timeout khi component unmount hoặc searchValue thay đổi
        return () => clearTimeout(handler);

    }, [searchValue, setSearchResult])

    return (
        <div>
            <input type="text" placeholder="Tìm kiếm theo tên..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </div>
    )
}
