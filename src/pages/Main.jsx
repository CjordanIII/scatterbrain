import { createContext, useState } from "react";
import Moveable from "../components/moveable/Moveable.jsx";
import NavBar from "../components/navbar/NavBar";
import { squareCount } from "../constraints/amount.js";
export const CountContext = createContext();
const Main = () => {
  // count
  const [count, setCount] = useState(0);
  // range array
  let square = squareCount(count);

  let components = [];
  // for length of itterater of arr
  for (let i = 0; i < square.length; i++) {
    components.push(<Moveable key={i} num={i} />);
  }

  return (
    <CountContext.Provider value={[count, setCount]}>
      <div className="bg-lines bg-dots">
        <NavBar setCount={setCount} />
        {components.map((component) => component)}
      </div>
    </CountContext.Provider>
  );
};

export default Main;
