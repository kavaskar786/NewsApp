import { Search } from "@/utils/types/types";
import { create } from "zustand";

export const useSearchStore = create<Search>((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
}));
