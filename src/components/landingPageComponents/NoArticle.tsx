import { useSearchStore } from "@/stores/useSearchStore";
import { Button } from "../ui/button";

const NoArticle = () => {
  const { setSearch } = useSearchStore();
  return (
    <div className="min-h-[92vh] flex items-center justify-center flex-col">
      No Article Found{" "}
      <Button
        onClick={() => {
          setSearch("");
        }}
      >
        Go back
      </Button>
    </div>
  );
};
export default NoArticle;
