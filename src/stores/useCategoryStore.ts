import { CategoryStore } from "@/utils/types/types";
import { create } from "zustand";

export const useCategoryStore = create<CategoryStore>((set) => ({
  category: "",
  setCategory: (category) => set({ category }),
}));
