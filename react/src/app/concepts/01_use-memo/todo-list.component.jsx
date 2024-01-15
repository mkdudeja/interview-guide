/* eslint-disable react-refresh/only-export-components */
import React from "react";

function filterTodos(todos, filter) {
  const startTime = Date.now();
  while (Date.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }

  return todos.filter((todo) => {
    if (filter === "all") {
      return true;
    } else if (filter === "active") {
      return !todo.completed;
    } else if (filter === "completed") {
      return todo.completed;
    }
  });
}

const todoVisibility = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
];

const TodoList = ({ todos, increment }) => {
  console.log("inside TodoList");
  const [filter, setFilter] = React.useState(todoVisibility[0].value);

  const visibleTodos = filterTodos(todos, filter);

  const onFilterChange = function (e) {
    setFilter(e.target.value);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex">
        <button
          className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={increment}
        >
          Increment
        </button>
      </div>
      <fieldset className="mt-4">
        <legend className="sr-only">Filter Todos</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {todoVisibility.map((item) => (
            <div key={item.value} className="flex items-center">
              <input
                id={item.value}
                name="notification-method"
                type="radio"
                defaultChecked={item.value === "all"}
                value={item.value}
                onChange={onFilterChange}
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label
                htmlFor={item.value}
                className="ml-3 block text-sm font-medium leading-6 text-gray-900"
              >
                {item.label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>

      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(TodoList);
