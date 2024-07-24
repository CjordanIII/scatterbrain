/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useContext } from "react";
import { CountContext } from "../../pages/Main";
import Square from "./Square";
const Moveable = () => {
  // drag tracker
  const [count, setCount, setSquareTracker] = useContext(CountContext);
  const onDragSquare = (event, info) => {
    setSquareTracker([info.point.x, info.point.y]);
  };
  const squareTracker = (event, info) => {
    console.log(info.point.x, info.point.y);
  };
  return (
    <motion.div
      className="w-0 h-0 z-0 m-0"
      drag
      onDrag={onDragSquare}
      onTapStart={squareTracker}
      initial={{
        x: 0,
        y: 0,
      }}
      whileHover={{ scale: 1.05 }}
      dragConstraints={{
        top: 0,
        left: 0,
      }}
    >
      <Square />
    </motion.div>
  );
};

export default Moveable;
