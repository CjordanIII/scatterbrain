import { createContext, useState } from "react";
import MoveableLine from "../components/moveable/lines/line/MoveableLine.jsx";
import Moveable from "../components/moveable/Moveable.jsx";
import NavBar from "../components/navbar/NavBar";
import { squareCount } from "../utils/amount.js";
export const CountContext = createContext();
const Main = () => {
  const [squareTracker, setSquareTracker] = useState([]);
  // count
  const [count, setCount] = useState(0);
  // range array
  let square = squareCount(count);
  console.log(squareTracker, "main tracker");
  let components = [];
  // for length of itterater of arr
  for (let i = 0; i < square.length; i++) {
    components.push(<Moveable key={i} num={i} />);
  }

  return (
    <CountContext.Provider value={[count, setCount, setSquareTracker]}>
      <div className="bg-lines bg-dots">
        <NavBar setCount={setCount} />

        {components.map((component) => component)}
        <MoveableLine />
      </div>
    </CountContext.Provider>
  );
};

export default Main;
