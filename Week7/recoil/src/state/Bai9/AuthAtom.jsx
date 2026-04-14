import { atom } from "recoil";


export const authAtom = atom({
    key: 'authAtom',
    default: {
        user: null,
        token: localStorage.getItem('token') || null, // Lấy token từ localStorage nếu có, nếu không thì null
        isAuthenticated: !!localStorage.getItem('token')  // Chuyển token thành boolean để xác định trạng thái đăng nhập
    }
})