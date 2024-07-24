import { useState } from "react";
import Moveable from "../components/moveable/Moveable.jsx";
import NavBar from "../components/navbar/NavBar";
import { squareCount } from "../constraints/amount.js";

const Main = () => {
  // Assuming squareCount(5) has some necessary side effect or future use
  const [count, setCount] = useState(0);
  let square = squareCount(count);

  let components = [];

  for (let i = 0; i <= square.length; i++) {
    components.push(<Moveable key={i} num={i} />);
  }

  return (
    <div className="bg-lines bg-dots">
      <NavBar setCount={setCount} count={count} />
      {components.map((component) => component)}
    </div>
  );
};

export default Main;
