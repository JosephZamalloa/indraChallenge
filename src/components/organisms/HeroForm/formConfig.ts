import z from "zod";

export const selectInputConfig = {
  label: "Documento",
  selectName: "documentType",
  selectId: "documentType",
  inputName: "documentNumber",
  inputId: "documentNumber",
  inputPlaceholder: "DNI o CE",
  inputType: "text",
  options: [
    { value: "dni", label: "DNI" },
    { value: "ce", label: "CE" },
  ],
};

export const formSchema = z.object({
  documentType: z.string().min(1, "Selecciona una opción"),
  documentNumber: z.string().regex(/^[0-9]{8}$/, "Debe tener 8 dígitos"),
  cellphoneNumber: z.string().regex(/^[0-9]{9}$/, "Debe tener 9 dígitos"),
  acceptPrivacy: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar la política de privacidad",
  }),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Debes aceptar términos y condiciones",
  }),
});
