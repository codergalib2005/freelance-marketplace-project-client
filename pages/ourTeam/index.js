import React from "react";
import OurTeam from "../../components/OurTeam/ourTeam";
import { motion } from "framer-motion";

const index = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 2,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div variants={container} initial="hidden" animate="visible">
      <OurTeam />
    </motion.div>
  );
};

export default index;
