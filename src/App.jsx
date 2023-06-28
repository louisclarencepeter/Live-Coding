import "./App.css";
import pexels from "./images/pexels.jpg";

function App() {
  const name = "John Doe";
  const isLoggedIn = true;

  const fruits = ["apple", "banana", "orange"];

  const lists = fruits.map((fruit) => (
    <li className="item" key={index}>
      {fruit}
    </li>
  ));

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      {isLoggedIn ? <h2>You are logged in</h2> : <h2>You are logged out</h2>}
      <ul>{lists}</ul>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem esse
        consequuntur sequi debitis quidem ducimus nostrum, dolorum, quibusdam
        iusto ipsum perspiciatis commodi laborum numquam consectetur cumque
        doloremque culpa reiciendis. Animi!
      </p>
      <img className="img" src="{pexels}" alt="" />
    </div>
  );
}

export default App;
