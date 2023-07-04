import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, NavLink } from "react-router-dom";
import Users from "./components/Users";
import User from "./components/User";
import Home from "./components/Home";

function App() {
  // const activeStyle = { textDecoration: "none", color: "pink" };
  return (
    <BrowserRouter>
      <div>
        <nav
          style={{ display: "flex", justifyContent: "space-around" }}
          className=" navbar bg-dark "
        >
          <NavLink
            style={({ isActive }) => (isActive ? { color: "pink" } : undefined)}
            to="/"
            end
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? { color: "pink" } : undefined)}
            to="/users"
          >
            All-Users
          </NavLink>
        </nav>
      </div>
    </BrowserRouter>
  );
}

export default App;
