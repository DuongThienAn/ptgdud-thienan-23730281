import { atom } from "recoil";

export const productAtom = atom({
    key: 'productAtom',
    default: {
        items: [],
        loading: false,
        error: null
    }
})