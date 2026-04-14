import React from 'react'
import { useRecoilState } from 'recoil'
import { notifyAtom } from '../../state/Bai6/NotifyAtom'

export default function Notification() {
    const [notifies, setNotifies] = useRecoilState(notifyAtom);

    function handleNotify() {
        const id = Date.now();
        setNotifies((oldList) => [...oldList, { id: id, message: "Thông báo mới", type: "success" }])
        
        // Tự động xóa chính nó sau 3 giây
        setTimeout(() => {
            setNotifies( (oldList) => oldList.filter( (notify) => notify.id !== id ))
        }, 3000)
    }

    return (
        <div>
            <button onClick={ handleNotify }>Gửi thông báo</button>
        </div>
    )
}
