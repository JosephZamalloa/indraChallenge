import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { type FormData, type FormStore } from "./types";

export const useFormStore = create<FormStore>()(
  persist(
    (set) => ({
      formData: {
        documentType: "",
        documentNumber: "",
        cellphoneNumber: "",
        acceptTerms: false,
        acceptPrivacy: false,
      },

      setFormData: (data: FormData) => set({ formData: data }),

      updateField: (field: keyof FormData, value: string | boolean) =>
        set((state) => ({
          formData: { ...state.formData, [field]: value },
        })),

      resetForm: () =>
        set({
          formData: {
            documentType: "",
            documentNumber: "",
            cellphoneNumber: "",
            acceptTerms: false,
            acceptPrivacy: false,
          },
        }),
    }),
    {
      name: "rimac-form-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
