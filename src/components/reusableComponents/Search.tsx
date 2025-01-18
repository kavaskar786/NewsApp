import { useSearchStore } from "@/stores/useSearchStore";
import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";

import CategoryComp from "./CategoryComp";
import { motion } from "framer-motion";

const Search = () => {
  const { search, setSearch } = useSearchStore();
  const CATEGORIES = [
    "general",
    "business",
    "technology",
    "entertainment",
    "health",
    "science",
    "sports",
  ];
  return (
    <div className="flex items-center justify-between flex-col  w-[95%] mx-auto">
      <motion.div
        className=" relative  rounded-full"
        whileHover={{ width: "35rem", scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
          <CiSearch />
        </span>
        <Input
          className="pl-12 w-full rounded-full"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search here for articles"
        />
      </motion.div>
      <div className="flex items-center justify-center gap-2  flex-wrap mt-3">
        {CATEGORIES.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <CategoryComp item={item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Search;
