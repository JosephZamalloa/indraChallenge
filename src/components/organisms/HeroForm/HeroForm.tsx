import { z } from "zod";
import { Controller, useController, useForm } from "react-hook-form";
import {
  SelectInput,
  CustomInput,
  CustomCheckbox,
  CustomButton,
} from "../../atoms";
import { formSchema, selectInputConfig } from "./formConfig";
import s from "./HeroForm.module.scss";
import { useFormStore } from "../../../store/formStores";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import type { FormStore } from "../../../store/types";

type HeroFormValues = z.infer<typeof formSchema>;

const HeroForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<HeroFormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      documentType: "dni",
      documentNumber: "",
      cellphoneNumber: "",
      acceptPrivacy: false,
      acceptTerms: false,
    },
  });

  const { field: documentTypeField } = useController({
    name: "documentType",
    control,
  });
  const { field: documentNumberField } = useController({
    name: "documentNumber",
    control,
  });

  const setFormData = useFormStore((state: FormStore) => state.setFormData);

  const onSubmit = async (data: HeroFormValues) => {
    try {
      setFormData(data);
    } catch (error) {
      console.error("Error saving form data:", error);
    } finally {
      navigate("/plans");
    }
  };

  return (
    <div className={s.heroForm} aria-label="Hero Form Section">
      <form
        className={s.heroForm__form}
        aria-label="Hero Form"
        onSubmit={async (e) => {
          e.preventDefault();
          await handleSubmit(onSubmit)(e);
        }}
      >
        <div className={s.heroForm__inputWrapper}>
          <SelectInput
            label={selectInputConfig.label}
            selectName={selectInputConfig.selectName}
            selectId={selectInputConfig.selectId}
            inputName={selectInputConfig.inputName}
            inputId={selectInputConfig.inputId}
            inputPlaceholder={selectInputConfig.inputPlaceholder}
            onlyNumbers={true}
            options={selectInputConfig.options}
            inputMaxLength={8}
            value={documentNumberField.value}
            onChangeSelect={(e) => documentTypeField.onChange(e.target.value)}
            onChangeInput={(e) => documentNumberField.onChange(e.target.value)}
            key={0}
          />
          {errors.documentType && (
            <span className={s.heroForm__error}>
              {errors.documentType.message}
            </span>
          )}
          {errors.documentNumber && (
            <span className={s.heroForm__error}>
              {errors.documentNumber.message}
            </span>
          )}

          <CustomInput
            type="tel"
            id="cellphoneNumber"
            placeholder="Celular"
            maxLength={9}
            onlyNumbers={true}
            {...register("cellphoneNumber")}
          />
          {errors.cellphoneNumber && (
            <span className={s.heroForm__error}>
              {errors.cellphoneNumber.message}
            </span>
          )}
        </div>
        <div
          className={s.heroForm__checkboxWrapper}
          aria-label="Terms and Conditions"
        >
          <Controller
            name="acceptPrivacy"
            control={control}
            render={({ field }) => (
              <CustomCheckbox
                label="Acepto la Política de Privacidad"
                ariaLabel="privacy policy"
                id="acceptPrivacy"
                name="acceptPrivacy"
                onChange={(e) => field.onChange(e.target.checked)}
              />
            )}
          />
          <Controller
            name="acceptTerms"
            control={control}
            render={({ field }) => (
              <CustomCheckbox
                label="Acepto términos y condiciones"
                ariaLabel="terms and conditions"
                id="acceptTerms"
                name="acceptTerms"
                onChange={(e) => field.onChange(e.target.checked)}
              />
            )}
          />
        </div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Aplican Términos y Condiciones.
        </a>
        <CustomButton buttonColor="black" disabled={!isValid} type="submit">
          Cotiza aquí
        </CustomButton>
      </form>
    </div>
  );
};

export default HeroForm;
