import { ResultedArticlesStoreType } from "@/utils/types/types";
import { create } from "zustand";

export const useResultedArticleStore = create<ResultedArticlesStoreType>(
  (set) => ({
    resultedArticles: [],
    setResultedArticles: (resultedArticles) => set({ resultedArticles }),
  }),
);
