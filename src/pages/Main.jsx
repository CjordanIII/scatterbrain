import Moveable from "../components/moveable/Moveable.jsx";
import NavBar from "../components/navbar/NavBar";
import { squareCount } from "../constraints/amount.js";

const Main = () => {
  // Assuming squareCount(5) has some necessary side effect or future use
  let square = squareCount(5);

  let components = []; // Correct spelling to `components`

  // Loop 5 times to create 5 Moveable components
  for (let i = 0; i < 5; i++) {
    components.push(<Moveable key={i} num={i} />);
  }

  console.log(components); // Log the components array for debugging

  return (
    <div className="bg-lines bg-dots">
      <NavBar />
      {components.map((component) => component)}
    </div>
  );
};

export default Main;
