import { useEffect } from "react";
import { useArticleStore } from "@/stores/useArticleStore";
import { fetchTopHeadlines } from "@/hooks/useFetchTopHeadlines";
import NewsCard from "@/components/landingPageComponents/NewsCard";
import Loader from "@/components/reusableComponents/Loader";
import Search from "@/components/reusableComponents/Search";
import { useSearchStore } from "@/stores/useSearchStore";
import NoArticle from "@/components/landingPageComponents/NoArticle";

const LandingPage: React.FC = () => {
  const { articles, setArticles } = useArticleStore();
  const { search } = useSearchStore();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await fetchTopHeadlines({
          country: "us",
          q: search,
          pageSize: 100,
        });
        setArticles(data.articles);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
    };

    fetchNews();
  }, [setArticles, search]);
  console.log(articles);
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <Search />
      {articles?.length === 0 ? (
        <NoArticle />
      ) : (
        <div className="flex items-center justify-center">
          {articles ? (
            <div className="flex items-center justify-center flex-col">
              <div className="min-h-[92vh] flex items-center justify-center flex-wrap gap-8 mt-10">
                {articles.map((article, index) =>
                  article.title !== "[Removed]" ? (
                    <div key={index}>
                      <NewsCard Article={article} />
                    </div>
                  ) : null
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

export default LandingPage;
