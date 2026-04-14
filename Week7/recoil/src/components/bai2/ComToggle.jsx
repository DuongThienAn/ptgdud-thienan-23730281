import React from 'react'
import { useRecoilState } from 'recoil'
import { toggleThemeAtom } from '../../state/Bai2/ToggleTheme'

export default function ComToggle() {
    const [theme, toggleTheme] = useRecoilState(toggleThemeAtom);

    function handleToggle() {
        const newTheme = theme == 'light' ? 'dark' : 'light';
        toggleTheme(newTheme);

        // Lưu vào localStorage sau khi vừa thay đổi
        localStorage.setItem('theme', newTheme);
    }

    
    return (
        <div>
            <button onClick={handleToggle}>Thay đổi theme</button>
        </div>
    )
}
