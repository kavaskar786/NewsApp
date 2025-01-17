import { useCategoryStore } from "@/stores/useCategoryStore";
import { Button } from "../ui/button";
import { Category } from "@/utils/types/types";

const CategoryComp = ({ item }: { item: Category }) => {
  const { category, setCategory } = useCategoryStore();
  return (
    <div>
      <Button
        className="px-2 py-1 "
        variant={"outline"}
        onClick={() => setCategory(item)}
      >
        {item}
      </Button>
    </div>
  );
};
export default CategoryComp;
