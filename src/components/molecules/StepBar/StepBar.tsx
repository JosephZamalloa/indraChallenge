import Step from "../../atoms/Step/Step";
import imageRoutes from "../../../utils/imageRoutes";
import s from "./StepBar.module.scss";

interface StepBarProps {
  currentStep: number;
  onBack?: () => void;
}

const steps = [
  { number: 1, label: "Datos del seguro" },
  { number: 2, label: "Resumen" },
];

const StepBar = ({ currentStep, onBack }: StepBarProps) => {
  return (
    <div className={s.stepBar}>
      <div className={s.stepBar__desktop}>
        {steps.map((step) => (
          <Step
            key={step.number}
            number={step.number}
            label={step.label}
            active={step.number === currentStep}
            stepBarLength={steps.length}
          />
        ))}
      </div>

      <div className={s.stepBar__mobile}>
        <button className={s.stepBar__backBtn} onClick={onBack} type="button">
          <img
            src={imageRoutes.backButtonCircle}
            alt="back"
            className={s.stepBar__backIcon}
          />
        </button>
        <span className={s.stepBar__stepLabel}>
          Paso {currentStep} de {steps.length}
        </span>
        <img
          src={
            currentStep === steps.length
              ? imageRoutes.stepperProgressFull
              : imageRoutes.stepperProgress
          }
          alt="progress"
          className={s.stepBar__progress}
        />
      </div>
    </div>
  );
};

export default StepBar;
