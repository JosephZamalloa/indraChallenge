import React from "react";
import s from "./CustomInput.module.scss";

interface CustomInputProps {
  type?: string;
  name?: string;
  id?: string;
  placeholder?: string;
  maxLength?: number;
  onlyNumbers?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ type, name, id, placeholder, maxLength, onlyNumbers, onChange, onBlur }, ref) => {
    return (
      <div className={s.customInput}>
        <label>{placeholder}</label>
        <input
          ref={ref}
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className={s.customInput__input}
          maxLength={maxLength}
          inputMode="numeric"
          onChange={onChange}
          onBlur={onBlur}
          onInput={(e) => {
            if (onlyNumbers) (e.target as HTMLInputElement).value = (e.target as HTMLInputElement).value.replace(/[^0-9]/g, "");
          }}
        />
      </div>
    );
  }
);

export default CustomInput;
