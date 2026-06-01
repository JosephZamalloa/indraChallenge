import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StepBar, ResumeCard } from "../../components/molecules";
import { BackButton } from "../../components/atoms";
import { useAppStore } from "../../store/useAppStore";
import { useFormStore } from "../../store/formStores";
import imageRoutes from "../../utils/imageRoutes";
import s from "./StepTwoResumePage.module.scss";

export default function StepTwoResumePage() {
  const navigate = useNavigate();
  const { user, selectedPlan } = useAppStore();
  const { formData } = useFormStore();

  useEffect(() => {
    if (!selectedPlan) navigate("/");
  }, [selectedPlan, navigate]);

  return (
    <div className={s.stepTwoPageWrapper}>
      <StepBar currentStep={2} onBack={() => navigate(-1)} />
      <div className={s.stepTwoResumePage}>
        <div className={s.stepTwoResumePage__content}>
          <div className={s.stepTwoResumePage__backButton}>
            <BackButton onClick={() => navigate(-1)} />
          </div>
          <h1 className={s.stepTwoResumePage__title}>Resumen del seguro</h1>
          {selectedPlan && (
            <ResumeCard
              userName={user ? `${user.name} ${user.lastName}` : ""}
              planName={selectedPlan.planName}
              price={`$${selectedPlan.price}`}
              icon={imageRoutes.family}
              documentType={formData.documentType}
              documentNumber={formData.documentNumber}
              phoneNumber={formData.cellphoneNumber}
            />
          )}
        </div>
      </div>
    </div>
  );
}
