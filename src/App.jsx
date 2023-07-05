import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Navbar from "./Navbar";

function App() {
  const [username, setUserName] = useState("Akira Kurosawa");

  return;
  <>
    <Navbar username={username} />
  </>;
}

export default App;
