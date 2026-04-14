import React from 'react'
import { useRecoilState } from 'recoil'
import { counterAtom } from '../../state/Bai1/CounterAtom';

// setCount
export default function ComB() {
    const [count, setCount] = useRecoilState(counterAtom);

    function handleIncrease(){
        setCount(count + 1);
    }

    function handleDecrease(){
        setCount(count - 1);
    }


    return (
        <div>
            <button onClick={handleIncrease}>Tăng count</button>
            <button onClick={handleDecrease}>Giảm count</button>
        </div>
    )
}
