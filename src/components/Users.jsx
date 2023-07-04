import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import User from "./User";

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
      <Routes>
        <Route path="id" element={<User />} />
      </Routes>
    </div>
  );
};

export default Users;
