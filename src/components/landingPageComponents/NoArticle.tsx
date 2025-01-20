import { useSearchStore } from "@/stores/useSearchStore";
import { Button } from "../ui/button";
import noArticleFoundImage from "../../assets/images/noArticleFoundImage.jpg";
import { useResultedArticleStore } from "@/stores/useResultedArticlesStore";
import { useArticleStore } from "@/stores/useArticleStore";

const NoArticle = () => {
  const { setSearch } = useSearchStore();
  const { setResultedArticles } = useResultedArticleStore();
  const { articles } = useArticleStore();

  return (
    <div className="flex min-h-[92vh] flex-col items-center justify-center">
      <img
        className="h-[50vh] rounded-lg"
        src={noArticleFoundImage}
        alt="No article found image"
      />
      <p className="mb-3">"No article found in search"</p>
      <Button
        onClick={() => {
          setSearch("");
          setResultedArticles(articles);
        }}
      >
        "Go back"
      </Button>
    </div>
  );
};
export { NoArticle };
