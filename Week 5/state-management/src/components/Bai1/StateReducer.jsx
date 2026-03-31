import React, { useReducer, useState } from "react";

const initialState = []; // danh sách todo
function todoReducer(state, action) {
    // state = todos. action = {type: "xxx", payload: "yyy"}
    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                { id: Date.now(), text: action.payload, completed: false }
            ];

        case "TOGGLE_TODO":
            return state.map(todo =>todo.id === action.payload ? { ...todo, completed: true } : todo);

        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.payload);

        default:
            return state;
    }
}

function StateReducer() {
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    const [text, setText] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        if (text.trim() === "") return;

        // Gửi hành động ADD_TODO kèm theo nội dung payload
        dispatch({ type: "ADD_TODO", payload: text });
        setText("");
    };

    return (
        <div>
            <form onSubmit={addTodo}>
                <input type="text" placeholder="Nhập việc cần làm..." value={text} onChange={(e) => setText(e.target.value)} />
                <button type="submit">Thêm</button>
            </form>

            <p>Tổng số việc hiện tại: {todos.length}</p>

            {/* Danh sách hiển thị */}
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span>{todo.text} {todo.completed && "(Đã hoàn thành)"}</span>
                        <button onClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })} disabled={todo.completed}>
                            {todo.completed ? "Đã hoàn thành" : "Hoàn thành"}
                        </button>
                        <button onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}>Xóa</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default StateReducer;