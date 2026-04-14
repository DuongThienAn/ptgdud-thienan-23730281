import React from 'react'
import { useRecoilValue } from 'recoil'
import { notifyAtom } from '../../state/Bai6/NotifyAtom'

export default function DisplayToast() {
    const listNotify = useRecoilValue(notifyAtom);

    return (
        <div>
            {listNotify.map( (notify) => (
                <div>
                    {notify.message}
                </div>
            )) }
        </div>
    )
}
