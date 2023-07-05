import Title from "./Title";

function Navbar() {
  return (
    <nav className="navbar bg-body-tertiary py-4">
      <div className="container-fluid px-5">
        <label>
          <input 
            type="checkbox"
            checked={isLarge}
            onChange={(e) => setIsLarge(e.target.checked)}
          />
        </label>
        <Title />
      </div>
    </nav>
  );
}

export default Navbar;
