import React from 'react'
import { todoListAtom } from '../../state/Bai4/TodoListAtom'
import { useRecoilState } from 'recoil';

export default function TodoItem({ item }) {
    const [todoList, setTodoList] = useRecoilState(todoListAtom);

    function toggleItemCompletetion() {
        const newList = todoList.map((todo) => {
            if (todo.id === item.id) {
                // Duyệt todo nếu todo có id trùng với item đang chọn thì sẽ đổi trạng thái isComplete
                return {
                    ...todo,
                    isComplete: !todo.isComplete,
                }
            }
            return todo;
        })    
        setTodoList(newList);
    }

    function handleDeleteTodo() {
        const newList = todoList.filter((todo) => todo.id !== item.id);
        setTodoList(newList);
    }

    return (
        <div>
            <span>{item.text}</span>
            <input type="checkbox" checked={item.isComplete} onChange={toggleItemCompletetion} />
            <button onClick={ handleDeleteTodo }>Xóa todo</button>
        </div>
    )
}
