import React, { useState } from "react";
import { getTodos } from "../../actions/index";
import Todo from "./Todo";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function Todos({ date }) {
  const [updateComponent, setUpdateComponent] = useState(false);
  const todos = getTodos(date);

  const fullDate = new Date(date);

  const year = fullDate.getFullYear();
  const month = months[fullDate.getMonth()];
  const day = String(fullDate.getDate()).padStart(2, 0);

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
              reload={setUpdateComponent}
              reloadValue={updateComponent}
            />
          ))
      ) : (
        <h1 className="todo-body-notask">
          There are no tasks available on {`${month} ${day}, ${year}`}.
        </h1>
      )}
    </div>
  );
}

export default React.memo(Todos);
