import React, { useState } from 'react'
import { useRecoilState } from 'recoil';
import { todoListAtom } from '../../state/Bai4/TodoListAtom';

export default function TodoInput() {
    const [value, setValue] = useState('');
    const [todoList, setTodoList] = useRecoilState(todoListAtom);

    function handleAddTodo() {
        if (value === null) return;

        console.log(value);

        setTodoList((oldTodoList) => [
            ...oldTodoList,
            { id: Date.now(), text: value, isComplete: false },
        ]);
    }

    return (
        <div>
            <input type="text" placeholder='Nhập todo' onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleAddTodo}>Thêm todo</button>
        </div>
    )
}
