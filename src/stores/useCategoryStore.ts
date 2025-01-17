import { Category } from "@/utils/types/types";
import { create } from "zustand";

export const useCategoryStore = create<Category>((set) => ({
  category: "business",
  setCategory: (category: Category) => set({ category }),
}));
