import PlanCard from "../../molecules/PlanCard/PlanCard";
import type { Plan } from "../../../services/types";
import s from "./PlanCardCarousel.module.scss";

interface PlanCardCarouselProps {
  plans: Plan[];
  icons?: string[];
  discount?: number;
  onSelect?: (plan: Plan) => void;
}

export default function PlanCardCarousel({ plans, icons = [], discount, onSelect }: PlanCardCarouselProps) {
  const maxPrice = Math.max(...plans.map((p) => p.price));

  return (
    <div className={s.planCardCarousel}>
      {plans.map((plan, i) => (
        <PlanCard
          key={plan.name}
          plan={plan}
          icon={icons[i % icons.length]}
          discount={discount}
          isRecommended={plan.price === maxPrice}
          onSelect={() => onSelect?.(plan)}
        />
      ))}
    </div>
  );
}
