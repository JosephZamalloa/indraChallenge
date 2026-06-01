import { create } from "zustand";
import { type FormData, type FormStore } from "./types";

export const useFormStore = create<FormStore>((set) => ({
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
}));
