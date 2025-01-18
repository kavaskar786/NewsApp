import { useEffect } from "react";
import { useArticleStore } from "@/stores/useArticleStore";
import { fetchTopHeadlines } from "@/hooks/useFetchTopHeadlines";
import { NewsCard } from "@/components/landingPageComponents/NewsCard";
import { Loader } from "@/components/reusableComponents/Loader";
import { SearchComp } from "@/components/reusableComponents/SearchComp";
import { useSearchStore } from "@/stores/useSearchStore";
import { NoArticle } from "@/components/landingPageComponents/NoArticle";
import { useCategoryStore } from "@/stores/useCategoryStore";

const LandingPage: React.FC = () => {
  const { articles, setArticles } = useArticleStore();
  const { category } = useCategoryStore();
  const { search } = useSearchStore();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await fetchTopHeadlines({
          country: "us",
          category: category,
          q: search,
          pageSize: 100,
        });
        setArticles(data.articles);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
    };

    fetchNews();
  }, [setArticles, search, category]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <SearchComp />
      {articles?.length === 0 ? (
        <NoArticle />
      ) : (
        <div className="flex items-center justify-center">
          {articles ? (
            <div className="flex flex-col items-center justify-center">
              <div className="mt-10 flex min-h-[92vh] flex-wrap items-center justify-center gap-8">
                {articles.map((article, index) =>
                  article.title !== "[Removed]" ? (
                    <div key={index}>
                      <NewsCard Article={article} />
                    </div>
                  ) : null,
                )}
              </div>
            </div>
          ) : (
            <Loader />
          )}
        </div>
      )}
    </div>
  );
};

export { LandingPage };
