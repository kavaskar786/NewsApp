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
import { motion } from "framer-motion";

const LandingPage: React.FC = () => {
  const { setArticles } = useArticleStore();
  const { category } = useCategoryStore();
  const { loading, setLoading } = useLoadingStore();
  const { resultedArticles, setResultedArticles } = useResultedArticleStore();
  const CONTAINER_STYLE =
    "flex min-h-screen flex-col items-center justify-center";

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

  if (resultedArticles && loading) {
    return (
      <div className={CONTAINER_STYLE}>
        <SearchComp />
        <Loader />
      </div>
    );
  }

  if (resultedArticles && !loading) {
    return (
      <div className={CONTAINER_STYLE}>
        <SearchComp />
        <motion.div
          className="mt-10 flex min-h-[92vh] flex-wrap items-center justify-center gap-8"
          initial={{ y: 300 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {resultedArticles.map((article, index) =>
            article.title !== "[Removed]" ? (
              <div key={index}>
                <NewsCard Article={article} />
              </div>
            ) : null,
          )}
        </motion.div>
      </div>
    );
  }

  if (resultedArticles.length === 0 && !loading) {
    return (
      <div className={CONTAINER_STYLE}>
        <SearchComp />
        <NoArticle />
      </div>
    );
  }
};
export { LandingPage };
