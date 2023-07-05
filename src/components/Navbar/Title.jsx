import { useContext } from "react";
import UserContext from "../context/UserContext";

function Title() {
  const userName = useContext(UserContext);
  return (
    <div>
      Welcome Back, <em>{userName}</em>
    </div>
  );
}

export default Title;
