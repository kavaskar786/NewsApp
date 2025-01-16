import { useEffect } from "react";
import { useArticleStore } from "@/stores/useArticleStore";
import { fetchTopHeadlines } from "@/hooks/useFetchTopHeadlines";
import NewsCard from "@/components/landingPageComponents/NewsCard";

const LandingPage: React.FC = () => {
  const { articles, setArticles } = useArticleStore();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await fetchTopHeadlines({
          category: "business",
          country: "in",
        });
        setArticles(data.articles);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
    };

    fetchNews();
  }, [setArticles]);
  if (articles?.length === 0) {
    return "No articles found";
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      {articles ? (
        <div className="flex items-center justify-center flex-wrap gap-8">
          {articles.map((article, index) => (
            <div key={index}>
              <NewsCard Article={article} />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading articles...</p>
      )}
    </div>
  );
};

export default LandingPage;
