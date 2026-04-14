import { atom } from "recoil";


export const userListAtom = atom({
    key: 'userListAtom',
    default: {
        data: [],
        loading: false,
        error: null
    }
})