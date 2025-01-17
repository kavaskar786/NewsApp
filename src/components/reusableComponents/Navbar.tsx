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
    <div className="h-[8vh] shadow-lg mb-12 w-full flex items-center justify-between">
      <div className="flex items-center justify-between w-[80%] md:w-[95%] mx-auto">
        {/* Logo */}
        <div className="logo flex items-center justify-center text-[#FC4308] font-semibold text-2xl">
          News Dog
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-4">
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
            className="absolute top-[8vh] left-0 w-full bg-white shadow-lg flex flex-col items-center gap-4 py-4 z-50"
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
