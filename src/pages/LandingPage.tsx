import { useEffect } from "react";
import { useArticleStore } from "@/stores/useArticleStore";
import { fetchTopHeadlines } from "@/hooks/useFetchTopHeadlines";
import { NewsCard } from "@/components/landingPageComponents/NewsCard";
import { Loader } from "@/components/reusableComponents/Loader";
import { SearchComp } from "@/components/reusableComponents/SearchComp";
import { NoArticle } from "@/components/landingPageComponents/NoArticle";
import { useCategoryStore } from "@/stores/useCategoryStore";
import { useLoadingStore } from "@/stores/useLoadingStore";
import { useResultedArticleStore } from "@/stores/useResultedArticlesStore";

const LandingPage: React.FC = () => {
  const { setArticles } = useArticleStore();
  const { category } = useCategoryStore();
  const { loading, setLoading } = useLoadingStore();
  const { resultedArticles, setResultedArticles } = useResultedArticleStore();

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const data = await fetchTopHeadlines({
          country: "us",
          category: category,
          pageSize: 100,
        });
        setArticles(data.articles);
        setResultedArticles(data.articles);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
      setLoading(false);
    };
    fetchNews();
  }, [setArticles, category, setLoading, setResultedArticles]);

  if (resultedArticles.length === 0 && !loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <SearchComp />
        <NoArticle />
      </div>
    );
  }

  if (resultedArticles && loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <SearchComp />
        <Loader />
      </div>
    );
  }

  if (resultedArticles && !loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <SearchComp />
        <div className="flex flex-col items-center justify-center">
          <div className="mt-10 flex min-h-[92vh] flex-wrap items-center justify-center gap-8">
            {resultedArticles.map((article, index) =>
              article.title !== "[Removed]" ? (
                <div key={index}>
                  <NewsCard Article={article} />
                </div>
              ) : null,
            )}
          </div>
        </div>
      </div>
    );
  }
};
export { LandingPage };
