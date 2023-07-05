import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";

function App() {
  return (
    <>
    <Counter />
    <Greeting name="John" age="21" isLoggedIn={true} />
    </>
  );
}

export default App;
