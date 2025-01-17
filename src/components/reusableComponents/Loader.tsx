import { motion } from "framer-motion";
const Loader = () => {
  return (
    <div className="min-h-[92vh] flex items-center justify-center flex-col">
      <h1 className="text-2xl font-semibold">Loading screen</h1>
      <div className="flex items-center justify-center mt-20 gap-2 ">
        {[...Array(3)].map((_, i) => (
          <motion.div
            className="h-8 w-8 bg-red-500 rounded-full"
            key={i}
            animate={{ y: [0, -50, 0] }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
};
export default Loader;
