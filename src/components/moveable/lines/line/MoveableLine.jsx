import { motion } from "framer-motion";
import Line from "./Line";

const MoveableLine = () => {
  // tap
  function onTapStart(event, info) {
    console.log(info.point.x, info.point.y);
  }
  // tracker
  function onDragStart(event, info) {
    console.log(info.point.x, info.point.y);
  }
  return (
    <motion.div
      className="w-0 h-0  m-0"
      drag
      onDrag={onDragStart}
      onTapStart={onTapStart}
      initial={{
        x: 0,
        y: 0,
      }}
      whileTap={{ scale: 0.8 }}
      whileHover={{ scale: 1.05 }}
      dragConstraints={{
        top: 0,
        left: 0,
      }}
    >
      <Line />
    </motion.div>
  );
};

export default MoveableLine;
