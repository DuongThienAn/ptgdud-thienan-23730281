import { atom, selector } from "recoil";


export const cartAtom = atom({
    key: 'cartAtom',
    default: []
})

export const cartStatsSelector = selector({
    key: 'cartStatsSelector',
    get: ({ get }) => {
        const cart = get(cartAtom);
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        
        return { total, count };
    }
})