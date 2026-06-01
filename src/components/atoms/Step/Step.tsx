import imageRoutes from "../../../utils/imageRoutes";
import s from "./Step.module.scss";

interface StepProps {
  number: number;
  label: string;
  active?: boolean;
  completed?: boolean;
  stepBarLength: number;
}

const Step = ({
  number,
  label,
  active = false,
  completed = false,
  stepBarLength,
}: StepProps) => {
  const stateClass = completed
    ? s["step--completed"]
    : active
      ? s["step--active"]
      : s["step--inactive"];
  return (
    <div className={`${s.step} ${stateClass}`}>
      <div className={s.step__circle}>{completed ? "✓" : number}</div>
      <span className={s.step__label}>{label}</span>
      {stepBarLength === number ? (
        <></>
      ) : (
        <div className={s.step__lineWrapper}>
          <img src={imageRoutes.line} alt="Line" className={s.stepBar__line} />
          <img src={imageRoutes.line} alt="Line" className={s.stepBar__line} />
        </div>
      )}
    </div>
  );
};

export default Step;
