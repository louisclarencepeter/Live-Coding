function Greeting({ name, isLoggedIn }) {
  return (
    <div className="m-3">
      {isLoggedIn ? <h2>Hello {name}</h2> : <h2>You are logged out</h2>}
    </div>
  );
}

export default Greeting;