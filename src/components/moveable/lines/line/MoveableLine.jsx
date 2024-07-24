import { motion } from "framer-motion";
import { useState } from "react";
import Line from "./Line";

const MoveableLine = ({ squareTracker }) => {
  //  tracker
  const [moveable, setMoveable] = useState(true);

  function lineTracker(event, info) {
    console.log(moveable);
    console.log(info.point.x, info.point.y);
  }
  // tap

  function onLIneStart(event, info) {
    setMoveable((prev) => !prev);
    console.log(info.point.x, info.point.y);
  }
  return (
    <motion.div
      className="w-0 h-0  m-0"
      drag
      onDrag={lineTracker}
      onTapStart={onLIneStart}
      initial={{
        x: moveable ? squareTracker[0] : 0,
        y: moveable ? squareTracker[1] : 0,
      }}
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.05 }}
      animate={{ x: squareTracker[0] + 88, y: squareTracker[1] }}
      dragConstraints={{
        top: squareTracker[1] / 2,
        left: squareTracker[0] / 2,
        right: squareTracker[0] / 2,
        bottom: squareTracker[1] / 2,
      }}
    >
      <Line />
    </motion.div>
  );
};

export default MoveableLine;
