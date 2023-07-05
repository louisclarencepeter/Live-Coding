function Greeting({ name, isLoggedIn }) {
  return <div className="m-3">{isLoggedIn && <h1>Hello, {name}</h1>}</div>;
}

export default Greeting;
