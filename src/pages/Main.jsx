import Moveable from "../components/moveable/Moveable";
import NavBar from "../components/navbar/NavBar";
const Main = () => {
  return (
    <div className="bg-lines bg-dots">
      <Moveable />
      <NavBar />
    </div>
  );
};

export default Main;
