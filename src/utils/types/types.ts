export interface NewsApiParams {
  country?: string;
  category?: string;
  pageSize?: number;
  page?: number;
  q?: string | undefined;
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
  articles: Article[];
  setArticles: (articles: Article[]) => void;
}
export interface ResultedArticlesStoreType {
  resultedArticles: Article[];
  setResultedArticles: (articles: Article[]) => void;
}

export interface Search {
  search: string | undefined;
  setSearch: (search: string) => void;
}

export type Category = {
  category: string;
};
export interface CategoryStore {
  category: string;

  setCategory: (category: string) => void;
}
export interface LoadingStore {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}
