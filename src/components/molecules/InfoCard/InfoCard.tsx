import s from "./InfoCard.module.scss";

interface InfoCardProps {
  icon?: string;
  title: string;
  text: string;
  isChecked?: boolean;
  onChange?: () => void;
}

export default function InfoCard({
  icon,
  title,
  text,
  isChecked = false,
  onChange,
}: InfoCardProps) {
  return (
    <div
      className={`${s.infoCard} ${isChecked ? s["infoCard--active"] : ""}`}
      aria-label="Information Card"
      onClick={onChange}
    >
      <input
        className={s.infoCard__checkbox}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <div
        className={s.infoCard__content}
        aria-label="Information Card Content"
      >
        <img src={icon} alt="InfoCardIcon" />
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}
