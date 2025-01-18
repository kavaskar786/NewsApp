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
    <div className="mx-auto flex w-[95%] flex-col items-center justify-between">
      <motion.div
        className="relative rounded-full"
        whileHover={{ width: "35rem", scale: 1.05 }}
        transition={{ duration: 0.5 }}
      >
        <span className="absolute left-4 top-1/2 -translate-y-1/2 transform text-gray-500">
          <CiSearch />
        </span>
        <Input
          className="w-full rounded-full pl-12"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search here for articles"
        />
      </motion.div>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
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
