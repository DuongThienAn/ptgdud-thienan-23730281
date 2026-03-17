import React, { useState, useEffect } from "react";

function CRUDFetchAPI() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Disable nút khi đang submit
  const [error, setError] = useState(null);

  const url = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    async function fetchTodos() {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Lỗi: Không thể tải danh sách");
        }

        const data = await res.json();
        console.log(data);
        setTodos(data);
      } catch (error) {
        console.log("error networking");
        setError(error.message);
      }
    }

    fetchTodos();
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      console.log("Updated Todos List:", todos);
    }
  }, [todos]);

  async function addTodo(e) {
    e.preventDefault();
    if (!title.trim()) return;

    setIsLoading(true);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ userId: 1, title: title, completed: false }),
      });

      if (!res.ok) {
        throw new Error("Lỗi: Không thể thêm todo mới");
      }

      const newTodo = await res.json();
      const finalTodo = todos.find((t) => t.id === newTodo.id)
        ? { ...newTodo, id: Date.now() }
        : newTodo;

      setTodos([finalTodo, ...todos]);
      setTitle("");
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteTodo(id) {
    const oldTodos = [...todos];

    setTodos(todos.filter((todo) => todo.id !== id));

    try {
      const res = await fetch(`${url}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Xóa không thành công");
      }
    } catch (err) {
      alert(err.message);
      setTodos(oldTodos);
    }
  }

  return (
    <div>
      <p>Số lượng todo hiện tại: {todos.length}</p>

      <form onSubmit={addTodo}>
        <input
          type="text"
          value={title}
          placeholder="Nhập việc cần làm..."
          disabled={isLoading}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" disabled={isLoading || !title}>
          {isLoading ? "Đang thêm..." : "Thêm todo"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>{todo.title}</p>
            <button onClick={() => deleteTodo(todo.id)}>Xóa todo</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CRUDFetchAPI;
