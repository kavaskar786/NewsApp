import { useSearchStore } from "@/stores/useSearchStore";
import { Button } from "../ui/button";
import noArticleFoundImage from "../../assets/images/noArticleFoundImage.jpg";
import { useResultedArticleStore } from "@/stores/useResultedArticlesStore";
import { useArticleStore } from "@/stores/useArticleStore";
import { useNavigate } from "react-router-dom";

const NoArticle = () => {
  const { setSearch } = useSearchStore();
  const { setResultedArticles } = useResultedArticleStore();
  const { articles } = useArticleStore();
  const navigate = useNavigate();

  return (
    <div className="flex min-h-[92vh] flex-col items-center justify-center">
      <img
        className="h-[50vh] rounded-lg"
        src={noArticleFoundImage}
        alt="No article found image"
      />
      <p className="mb-3">
        {articles.length === 0
          ? "Please check your internet and press reload"
          : "No article found in search"}
      </p>
      <Button
        onClick={() => {
          if (articles.length === 0) {
            return navigate(0);
          }
          setSearch("");
          setResultedArticles(articles);
        }}
      >
        {articles.length === 0 ? "reload" : "Go back"}
      </Button>
    </div>
  );
};
export { NoArticle };
