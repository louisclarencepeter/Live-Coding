import Title from "./Title";

function Navbar({ username }) {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Title username={username} />
      </div>
    </nav>
  );
}

export default Navbar;
