import s from "./ResumeCard.module.scss";

interface ResumeCardProps {
  planName: string;
  icon?: string;
  userName?: string;
  documentType?: string;
  documentNumber?: string;
  phoneNumber?: string;
  price?: string;
}

export default function ResumeCard({
  userName,
  icon,
  planName,
  price,
  documentType,
  documentNumber,
  phoneNumber,
}: ResumeCardProps) {
  return (
    <div className={s.resumeCard} aria-label="Resume Card">
      <div className={s.resumeCard__header}>
        <div className={s.resumeCard__resumeWrapper}>
          <p className={s.resumeCard__resumeLabel}>Precios calculados para:</p>
          <div className={s.resumeCard__info}>
            {icon && <img src={icon} className={s.resumeCard__icon} />}

            <h4 className={s.resumeCard__name}>{userName}</h4>
          </div>
        </div>
      </div>
      <span className={s.resumeCard__divider} />
      <div className={s.resumeCard__data}>
        <div>
          <h4>Responsable de pago</h4>
          <p>
            {documentType?.toUpperCase()}: {documentNumber}
          </p>
          <p>Celular: {phoneNumber}</p>
        </div>
        <div>
          <h4>Plan Elegido</h4>
          <p>{planName}</p>
          <p>Costo del plan: {price} al mes</p>
        </div>
      </div>
    </div>
  );
}
