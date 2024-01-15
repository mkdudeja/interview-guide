import React from "react";

function filterUsers(users, name) {
  console.log("in filterUsers....");
  // filter user from the list of available users
  // const user = users.filter((user) => user.id === userId);

  const start = Date.now();
  while (Date.now() - start < 1500) {
    // wait..
  }

  // return `filtered users`
  console.log("output of filterUsers....");
  return [
    {
      id: 11,
      name: "Manish",
    },
    {
      id: 12,
      name: "Sourabh",
    },
  ];
}

// memotized function
function sum(a, b) {
  // logic to save in memory
  // query from memory
  // if available, return from memory..

  // then calculate and return
  return a + b;
}

const UseMemo = ({ users, name }) => {
  const [count, setCount] = React.useState(1);
  const filteredUsers = React.useMemo(
    function () {
      return filterUsers(users, name);
    },
    [users, name]
  );

  const increment = function () {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-20">
      <h1 className="text-xl underline">React.useMemo (Performance hook)</h1>

      <div className="flex flex-row justify-between items-start w-[600px]">
        {/* list of users */}
        <div className="flex flex-col justify-center space-y-5 w-1/2">
          <h3>Filtered Users</h3>
          <ul>
            {filteredUsers.map((user, index) => (
              <li key={user.id}>
                {index + 1}. {user.name}
              </li>
            ))}
          </ul>
        </div>

        {/* counter state */}
        <div className="flex flex-col justify-center space-y-5 w-1/2">
          <h3>Count: {count}</h3>
          <button
            className="rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={increment}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseMemo;
