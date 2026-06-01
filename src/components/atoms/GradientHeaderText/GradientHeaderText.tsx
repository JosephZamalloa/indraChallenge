import s from "./GradientHeaderText.module.scss";

interface GradientHeaderTextProps {
  text: string;
}

const GradientHeaderText = ({ text }: GradientHeaderTextProps) => {
  return (
    <div className={s.gradientHeaderText} aria-label="Hero Content Header">
      <h4>{text}</h4>
    </div>
  );
};

export default GradientHeaderText;
