import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((reponse) => reponse.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <Link key={user.id}>
          <h4>{user.name}</h4>
        </Link>
      ))}
    </div>
  );
};

export default Users;
