import { motion } from "framer-motion";
const Loader = () => {
  return (
    <div className="flex min-h-[92vh] flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold">Loading...</h1>
      <div className="mt-20 flex items-center justify-center gap-2">
        {[...Array(3)].map((_, i) => (
          <motion.div
            className="h-8 w-8 rounded-full bg-red-500"
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
export { Loader };
