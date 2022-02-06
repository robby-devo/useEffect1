import { useState, useEffect } from "react";

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);

  useEffect(() => {
    getData();
    // setLoading(true);
  }, [page]);

  const getData = () => {
    fetch(`http://localhost:3001/todos?_page=${page}&_limit=3`)
      .then((d) => d.json())
      .then((res) => {
        setTodos(res);
        setLoading(false);
      });
  };
  return loading ? (
    "Loading..."
  ) : (
    <div>
      <input
        placeholder="Enter todo"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <button
        onClick={() => {
          // fetch post

          const data = { status: false, title: text };

          fetch("http://localhost:3001/todos", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "content-type": "application/json",
            },
          }).then(getData);
          //   setTodos([...todos, { status: false, title: text }]);
          //   new array is created
        }}
      >
        Add todo
      </button>

      {/* onclick i want to push the input text into todos array line no 4 wala */}

      {todos.map((e) => (
        <div key={e.id}>
          {e.title}-{e.status ? "Done" : "Not Done"}
        </div>
      ))}

      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};
