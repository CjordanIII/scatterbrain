import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
// import { easeOut } from "framer-motion";

import Btns from "../../constraints/Btns";
import Options from "./Options";
const NavBar = () => {
  const [settingsToggle, setSettingsToggle] = useState(false);

  return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <AnimatePresence>
        {settingsToggle && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],

              scale: {
                type: "sprin",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute bottom-16 left-44"
          >
            <Options />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
        <Btns type={"Home"} />
        <Btns type={"Wallet"} />
        <Btns type={"New item"} />
        <Btns type={"Settings"} setSettingsToggle={setSettingsToggle} />
        <Btns type={"Profile"} />
      </div>
    </div>
  );
};

export default NavBar;
