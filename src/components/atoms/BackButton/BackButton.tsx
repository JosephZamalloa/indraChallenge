import s from "./BackButton.module.scss";

interface BackButtonProps {
  onClick?: () => void;
}

const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <button className={s.backButton} onClick={onClick} type="button">
      <div className={s.backButton__icon} />
      <span className={s.backButton__label}>Volver</span>
    </button>
  );
};

export default BackButton;
