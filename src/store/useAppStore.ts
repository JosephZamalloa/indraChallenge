import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { AppStore } from "./types";

export const useAppStore = create<AppStore>()(
  persist(
    (set) => ({
      user: null,
      selectedPlan: null,
      setUser: (user) => set({ user }),
      setSelectedPlan: (plan) => set({ selectedPlan: plan }),
    }),
    {
      name: "rimac-app-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
