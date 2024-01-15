import React from "react";
import TodoList from "./todo-list.component";

function createTodos() {
  const todos = [];
  for (let i = 0; i < 50; i++) {
    todos.push({
      id: i,
      text: "Todo " + (i + 1),
      completed: Math.random() > 0.5,
    });
  }
  return todos;
}

const ReactMemo = () => {
  const [count, setCount] = React.useState(1);

  const todos = React.useMemo(function () {
    return createTodos();
  }, []);

  const handleIncrement = React.useCallback(function () {
    setCount((c) => c + 1);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen w-full space-y-20">
      <h1 className="text-xl underline">
        React.useCallback (Performance hook)
      </h1>

      <div className="flex flex-col justify-center space-y-5 w-1/2">
        <h3>Count: {count}</h3>
        {/* list of users */}
        <TodoList todos={todos} increment={handleIncrement} />
      </div>
    </div>
  );
};

export default ReactMemo;
