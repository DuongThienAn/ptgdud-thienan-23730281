import React from 'react'
import { counterAtom } from '../../state/Bai1/CounterAtom'
import { useRecoilValue } from 'recoil';

// Hiển thị count
export default function ComA() {
    const count = useRecoilValue(counterAtom);

    return (
        <div>
            <h1>Count: {count}</h1>
        </div>
    )
}
