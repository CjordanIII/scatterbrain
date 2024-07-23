import { motion } from "framer-motion";
import Square from "./Square";

const Moveable = () => {
  const y = screen.width - 1000;
  const x = screen.height + 300;
  console.log(y);
  return (
    <div>
      <motion.div
        className="overflow-hidden w-screen h-screen "
        drag
        dragConstraints={{
          top: 0,
          right: x,
          bottom: y,
          left: 0,
        }}
      >
        <Square />
      </motion.div>
    </div>
  );
};

export default Moveable;
