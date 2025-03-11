import { useState } from "react";

function TvcAddTodo({ dispatch }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: "ADD_TODO", payload: text });
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button type="submit">Thêm</button>
    </form>
  );
}

export default TvcAddTodo;
