import { motion } from "framer-motion";
import { ReactNode } from "react";

const NavItem = ({
  index,
  isActive,
  setIsActive,
  children,
}: {
  index: number;
  isActive: number;
  setIsActive: (index: number) => void;
  children: ReactNode;
}) => {
  console.log(index, isActive);
  return (
    <motion.div
      key={index}
      variants={{
        rest: { color: "#000" },
        hover: { color: "red" },
        active: { color: "red" },
      }}
      animate={`${isActive === index ? "active" : "rest"}`}
      whileHover="hover"
      className="cursor-pointer"
      onClick={() => setIsActive(index)}
    >
      {children}
      <motion.div
        variants={{
          rest: { width: "0%" },
          hover: { width: "100%", backgroundColor: "red" },
          active: { backgroundColor: "red" },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="h-[2.5px] bg-primary"
      ></motion.div>
    </motion.div>
  );
};
export default NavItem;
