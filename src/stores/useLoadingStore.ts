import { LoadingStore } from "@/utils/types/types";
import { create } from "zustand";

export const useLoadingStore = create<LoadingStore>((set) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
}));
