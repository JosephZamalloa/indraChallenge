import s from "./CustomButton.module.scss";
interface CustomButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  buttonColor?: "black" | "red";
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg" | "content";
}
export default function CustomButton({
  children,
  onClick,
  disabled,
  buttonColor,
  type,
  size = "md",
}: CustomButtonProps) {
  const isValid = !disabled;
  const stateClass = isValid ? "active" : "inactive";
  return (
    <button
      className={`${s.customButton} ${s[`customButton--${size}`]} ${s[`customButton--${buttonColor}`]} ${s[`customButton--${buttonColor}--${stateClass}`]}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children || "Button"}
    </button>
  );
}
