import { create } from "zustand";
import type { AppStore } from "./types";

export const useAppStore = create<AppStore>((set) => ({
  user: null,
  selectedPlan: null,
  setUser: (user) => set({ user }),
  setSelectedPlan: (plan) => set({ selectedPlan: plan }),
}));
