import Title from "./Title";

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <Title username={username} />
      </div>
    </nav>
  );
}

export default Navbar;
