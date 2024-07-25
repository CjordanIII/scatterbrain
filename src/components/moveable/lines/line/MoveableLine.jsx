import { motion } from "framer-motion";
import { useState } from "react";
import Line from "./Line";

const MoveableLine = ({ squareTracker }) => {
  //  tracker
  const [moveable, setMoveable] = useState(0);
  const onClick = (e) => {
    console.log(e);
    console.log("working");
  };
  function lineTracker(event, info) {
    setMoveable(info.point.x, info.point.y);
  }
  // tap

  return (
    <motion.div
      className="w-0 h-0  m-0"
      onClick={onClick}
      initial={{
        x: squareTracker[0],
        y: squareTracker[1],
      }}
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.05 }}
      animate={{
        x: squareTracker[0],
        y: squareTracker[1],
      }}
      transition={{ duration: 0.23, type: "spring" }}
    >
      <Line />
    </motion.div>
  );
};

export default MoveableLine;
