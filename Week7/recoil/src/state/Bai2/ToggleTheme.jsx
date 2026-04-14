import { atom } from "recoil";

export const toggleThemeAtom = atom({
    key: 'toggleThemeAtom',
    default: localStorage.getItem('theme') || 'light', // Lấy giá trị từ localStorage nếu có (nếu không có thì mặc định)
});