import CustomButton from "../../atoms/CustomButton/CustomButton";
import type { Plan } from "../../../services/types";
import s from "./PlanCard.module.scss";
import { GradientHeaderText } from "../../atoms";

interface PlanCardProps {
  plan: Plan;
  icon?: string;
  discount?: number;
  isRecommended?: boolean;
  onSelect?: () => void;
}

export default function PlanCard({
  plan,
  icon,
  discount,
  isRecommended,
  onSelect,
}: PlanCardProps) {
  const discountedPrice = discount
    ? Math.round(plan.price * (1 - discount))
    : null;

  return (
    <div className={s.planCard} aria-label="Plan Card">
      {isRecommended && (
        <div className={s.planCard__badge}>
          <GradientHeaderText text="Plan recomendado" />
        </div>
      )}
      <div className={s.planCard__content}>
        <div className={s.planCard__header}>
          <div className={s.planCard__info}>
            <h3 className={s.planCard__title}>{plan.name}</h3>
            <div className={s.planCard__priceWrapper}>
              <p className={s.planCard__priceLabel}>Costo del plan</p>
              {discountedPrice !== null ? (
                <>
                  <p className={s.planCard__priceOriginal}>
                    ${plan.price} antes
                  </p>
                  <h4 className={s.planCard__price}>
                    ${discountedPrice} al mes
                  </h4>
                </>
              ) : (
                <h4 className={s.planCard__price}>${plan.price} al mes</h4>
              )}
            </div>
          </div>
          {icon && (
            <img src={icon} alt={plan.name} className={s.planCard__icon} />
          )}
        </div>
        <span className={s.planCard__divider} />
        <div className={s.planCard__listWrapper}>
          <ul className={s.planCard__list}>
            {plan.description.map((item, i) => (
              <li key={i} className={s.planCard__listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={s.planCard__footer}>
        <CustomButton buttonColor="red" onClick={onSelect} size="content">
          <span className={s.planCard__buttonText}>Seleccionar Plan</span>
        </CustomButton>
      </div>
    </div>
  );
}
