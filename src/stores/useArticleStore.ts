import { ArticleStoreType } from "@/utils/types/types";
import { create } from "zustand";

export const useArticleStore = create<ArticleStoreType>((set) => ({
  articles: null,
  setArticles: (articles) => set({ articles }),
}));
