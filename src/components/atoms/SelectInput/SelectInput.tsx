import s from "./SelectInput.module.scss";

interface SelectInputProps {
  selectName?: string;
  selectId?: string;
  inputName?: string;
  inputPlaceholder?: string;
  options?: { value: string; label: string }[];
  label?: string;
  inputId?: string;
  inputMaxLength?: number;
  onlyNumbers?: boolean;
  type?: string;
  value?: string;
  onChangeSelect?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SelectInput = ({
  selectName,
  selectId,
  inputName,
  inputPlaceholder,
  options,
  label,
  inputId,
  inputMaxLength,
  onlyNumbers,
  type = "text",
  value,
  onChangeSelect,
  onChangeInput,
}: SelectInputProps) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onlyNumbers) {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    }
  };
  return (
    <div className={s.selectInput}>
      <label>{label}</label>
      <div
        className={s.selectInput__selectInputWrapper}
        aria-label="Select Document Type"
      >
        <select
          name={selectName || "-"}
          id={selectId || "documentType"}
          className={s.selectInput__select}
          onChange={onChangeSelect}
        >
          {options ? (
            options.map((option) => (
              <option value={option.value}>{option.label}</option>
            ))
          ) : (
            <>
              <option value=" ">-</option>
            </>
          )}
        </select>
        <input
          onChange={onChangeInput}
          value={value}
          type={type}
          name={inputName || "-"}
          id={inputId || "-"}
          placeholder={inputPlaceholder || "-"}
          className={s.selectInput__selectInput}
          maxLength={inputMaxLength}
          inputMode="numeric"
          onInput={handleInput as React.FormEventHandler<HTMLInputElement>}
        />
      </div>
    </div>
  );
};

export default SelectInput;
