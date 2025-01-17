import { useSearchStore } from "@/stores/useSearchStore";
import { Input } from "../ui/input";
import { CiSearch } from "react-icons/ci";

import CategoryComp from "./CategoryComp";

const Search = () => {
  const { search, setSearch } = useSearchStore();
  const CATEGORIES = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];
  return (
    <>
      <div className="relative md:w-[50rem]">
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
      </div>
      <div className="flex items-center justify-center gap-2 mt-3 flex-wrap w-[95%]">
        {CATEGORIES.map((item, index) => (
          <div key={index}>
            <CategoryComp item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Search;
