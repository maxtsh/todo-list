import React, { useState } from "react";
import { getTodos } from "../../actions/index";
import Todo from "./Todo";

function Todos() {
  const [updateComponent, setUpdateComponent] = useState(false);
  const todos = getTodos();

  console.log("TODOS RENDER");

  return (
    <div className="todo-body">
      {todos.length !== 0 ? (
        todos
          .slice(0)
          .reverse()
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              updateComponent={updateComponent}
              setUpdateComponent={setUpdateComponent}
            />
          ))
      ) : (
        <h1 className="todo-body-notask"> There are no tasks available now.</h1>
      )}
    </div>
  );
}

export default React.memo(Todos);
