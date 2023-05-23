import React, { useEffect, useState } from "react";

export function Counter({ count, onIncrement, onDecrement }) {
  const [userList, setUserList] = useState([]);
  const requestOptions = {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ name: "ghi" }),
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:3005/users");
      const data = await response.json();
      // console.log(data);
      setUserList(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>

      <h1>User List</h1>
      <ul>
        {userList.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
