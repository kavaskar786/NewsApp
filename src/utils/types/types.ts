export interface NewsApiParams {
  country?: string;
  category?: string;
  pageSize?: number;
  page?: number;
  apiKey?: string;
}

type Source = {
  id?: string | null;
  name: string;
};

export interface Article {
  source: Source;
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | undefined;
  publishedAt: string;
  content: string | null;
}

export interface ArticleStoreType {
  articles: Article[] | null;
  setArticles: (articles: Article[]) => void;
}
