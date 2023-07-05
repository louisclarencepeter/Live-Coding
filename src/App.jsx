import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import List from "./components/Hero/List";
import { useState } from "react";

function App() {

  const [isLarge, setIsLarge] = useState(false);

  return (
    <>
      <Navbar isLarge={isLarge} setIsLarge={setIsLarge} />
      <List />
    </>
  );
}

export default App;
