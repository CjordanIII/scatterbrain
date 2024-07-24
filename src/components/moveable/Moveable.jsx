/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import Square from "./Square";

const Moveable = () => {
  return (
    <motion.div
      className="w-0 h-0  m-0"
      drag
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
