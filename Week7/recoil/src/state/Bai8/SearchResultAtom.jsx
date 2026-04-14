import { atom } from "recoil";


export const searchResultAtom = atom({
    key: 'searchResultAtom',
    default: {
        results: [],
        loading: false
    }
})