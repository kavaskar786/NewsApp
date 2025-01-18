import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu and close icons

const Navbar = () => {
  const NavPages: { name: string; path: string }[] = [];
  const [isActive, setIsActive] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="mb-12 flex h-[8vh] w-full items-center justify-between shadow-lg">
      <div className="mx-auto flex w-[80%] items-center justify-between md:w-[95%]">
        {/* Logo */}
        <div className="logo flex items-center justify-center text-2xl font-semibold text-[#FC4308]">
          News Dog
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center justify-center gap-4 md:flex">
          {NavPages.map(({ name, path }, index) => (
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
              <Link to={path}>{name}</Link>
              <motion.div
                variants={{
                  rest: { width: "0%" },
                  hover: { width: "100%", backgroundColor: "red" },
                  active: { backgroundColor: "red" },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="h-[2.5px] bg-[red]"
              ></motion.div>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {isMenuOpen ? (
            <FiX
              size={24}
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <FiMenu
              size={24}
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 top-[8vh] z-50 flex w-full flex-col items-center gap-4 bg-white py-4 shadow-lg"
          >
            {NavPages.map(({ name, path }, index) => (
              <Link
                key={index}
                to={path}
                className={`text-lg ${
                  isActive === index ? "text-red-500" : "text-black"
                }`}
                onClick={() => {
                  setIsActive(index);
                  setIsMenuOpen(false);
                }}
              >
                {name}
              </Link>
            ))}

            <Button
              onClick={() => {
                navigate("login");
                setIsMenuOpen(false);
              }}
            >
              Sign up/Sign In
            </Button>
          </motion.div>
        )}

        {/* Sign Up/Sign In Button */}
        <div
          className="hidden md:block"
          onClick={() => {
            navigate("login");
            setIsMenuOpen(false);
          }}
        >
          <Button>Sign up/Sign In</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
