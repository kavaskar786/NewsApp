import { useCategoryStore } from "@/stores/useCategoryStore";
import { Button } from "../ui/button";

const CategoryComp = ({ item }: { item: string }) => {
  const { category, setCategory } = useCategoryStore();
  return (
    <div>
      <Button
        className="px-2 py-1 "
        variant={category === item ? "default" : "outline"}
        onClick={() => setCategory(category === item ? "" : item)}
      >
        {`# ${item}`}
      </Button>
    </div>
  );
};
export default CategoryComp;
