import { atom, selector } from "recoil";

// Atom lưu danh sách item trong giỏ hàng -> item {id, name, price, quantity}
export const cartState = atom({
    key: 'cartState',
    default: []
})

// Selector lắng nghe sự thay đổi của atom và tự động tính ra tổng tiền
export const cartTotalSelector = selector({
    key: 'cartTotalSelector',
    get: ({ get }) => {
        const cart = get(cartState);
        const total = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

        return total;
    } 
})