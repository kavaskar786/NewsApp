import { useSearchStore } from "@/stores/useSearchStore";
import { Button } from "../ui/button";
import noArticleFoundImage from "../../assets/images/noArticleFoundImage.jpg";

const NoArticle = () => {
  const { setSearch } = useSearchStore();
  return (
    <div className="min-h-[92vh] flex items-center justify-center flex-col">
      <img
        className="h-[50vh] rounded-lg"
        src={noArticleFoundImage}
        alt="No article found image"
      />
      <p className="mb-3">No article found</p>
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
