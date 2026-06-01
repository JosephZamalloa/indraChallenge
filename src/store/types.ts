export interface UserData {
  name: string;
  lastName: string;
  birthDay: string;
}

export interface SelectedPlan {
  planName: string;
  price: number;
}

export interface AppStore {
  user: UserData | null;
  selectedPlan: SelectedPlan | null;
  setUser: (user: UserData) => void;
  setSelectedPlan: (plan: SelectedPlan) => void;
}

export interface FormData {
  documentType: string;
  documentNumber: string;
  cellphoneNumber: string;
  acceptTerms: boolean;
  acceptPrivacy: boolean;
}
export interface FormStore {
  formData: FormData;
  setFormData: (data: FormData) => void;
  updateField: (field: keyof FormData, value: string | boolean) => void;
  resetForm: () => void;
}
