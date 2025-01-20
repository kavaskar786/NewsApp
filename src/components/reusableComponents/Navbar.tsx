import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import menu and close icons
import NavItem from "./NavItem";

const Navbar = () => {
  const NavPages: { name: string; path: string }[] = [];
  const [isActive, setIsActive] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="mb-12 flex h-[8vh] w-full items-center justify-between shadow-lg">
      <div className="mx-auto flex w-[80%] items-center justify-between md:w-[95%]">
        {/* Logo */}
        <NavLink
          to={"/"}
          className="logo flex items-center justify-center text-2xl font-bold text-primary"
        >
          NEWS DOG
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center justify-center gap-4 md:flex">
          {NavPages.map(({ name, path }, index) => (
            <NavLink to={path} key={index}>
              <NavItem
                index={index}
                isActive={isActive}
                setIsActive={setIsActive}
              >
                {name}
              </NavItem>
            </NavLink>
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
            className="absolute left-0 top-[8vh] z-50 flex w-full flex-col items-center gap-4 bg-background py-4 shadow-lg"
          >
            {NavPages.map(({ name, path }, index) => (
              <NavLink
                key={index}
                to={path}
                className={`text-lg ${
                  isActive === index ? "text-primary" : "text-foreground"
                }`}
                onClick={() => {
                  setIsActive(index);
                  setIsMenuOpen(false);
                }}
              >
                {name}
              </NavLink>
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
