import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { todoListAtom } from '../../state/Bai4/TodoListAtom'
import TodoItem from './TodoItem';

export default function TodoList() {
    const todoList = useRecoilValue(todoListAtom);

    return (
        <div>
            <h3>Danh sách hiện tại có {todoList.length} công việc</h3>
            {todoList.map((todo) => (
                <TodoItem key={todo.id} item={todo} />
            ))}
        </div>
    )
}
