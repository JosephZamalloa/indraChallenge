import s from "./CustomCheckbox.module.scss";

interface CustomCheckboxProps {
  ariaLabel?: string;
  name?: string;
  id?: string;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const CustomCheckbox = ({
  ariaLabel,
  name,
  id,
  label,
  onChange,
}: CustomCheckboxProps) => {
  return (
    <div className={s.customCheckbox} aria-label={ariaLabel}>
      <input
        className={s.customCheckbox__input}
        type="checkbox"
        name={name}
        id={id}
        onChange={onChange}
      />
      <label className={s.customCheckbox__label} htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default CustomCheckbox;
