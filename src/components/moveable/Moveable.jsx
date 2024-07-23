import { motion } from "framer-motion";
import Square from "./Square";

const Moveable = () => {
  return (
    <motion.div
      className=" w-screen h-screen "
      drag
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
