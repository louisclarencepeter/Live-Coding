import React from "react";
import { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  
  return (
    <div>
      <h1>Users</h1>
    </div>
  );
}

export default Users;
