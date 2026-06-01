import { useState, useEffect } from "react";
import { getData } from "../../services/getData";
import { StepBar } from "../../components/molecules";
import { BackButton } from "../../components/atoms";
import { InfoCardSelect, PlanCardCarousel } from "../../components/organisms";
import type { GetDataResponse, Plan } from "../../services/types";
import s from "./StepOnePlansPage.module.scss";
import { useNavigate } from "react-router-dom";
import imageRoutes from "../../utils/imageRoutes";
import { useAppStore } from "../../store/useAppStore";
import { useFormStore } from "../../store/formStores";
import { calcAge } from "../../utils/calcAge";

export default function StepOnePlansPage() {
  const [data, setData] = useState<GetDataResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const navigate = useNavigate();
  const { setUser, setSelectedPlan } = useAppStore();
  const { formData } = useFormStore();

  useEffect(() => {
    if (!formData.documentNumber) {
      navigate("/");
      return;
    }
  }, [formData.documentNumber, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await getData();
        setData(response);
        setUser({
          name: response.user.name,
          lastName: response.user.lastName,
          birthDay: response.user.birthDay,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [setUser]);

  const getFilteredPlans = (): Plan[] => {
    if (!data || selectedCard === null) return [];
    const userAge = calcAge(data.user.birthDay);
    return data.plans.list.filter((plan) => userAge >= plan.age);
  };

  const filteredPlans = getFilteredPlans();

  return (
    <div className={s.stepOnePageWrapper}>
      <StepBar currentStep={1} onBack={() => navigate(-1)} />
      <div className={s.stepOnePlansPage}>
        <div className={s.stepOnePlansPage__backButton}>
          <BackButton onClick={() => navigate(-1)} />
        </div>
        {isLoading ? (
          <p>Cargando...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            <h1>
              {data
                ? `${data.user.name}, ¿Para quién deseas cotizar?`
                : "¿Para quién deseas cotizar?"}
            </h1>
            <InfoCardSelect onChange={setSelectedCard} />
            {selectedCard !== null && (
              <PlanCardCarousel
                plans={filteredPlans}
                icons={[imageRoutes.homeLight, imageRoutes.hospitalLight]}
                discount={selectedCard === 1 ? 0.05 : undefined}
                onSelect={(plan) => {
                  const discount = selectedCard === 1 ? 0.05 : undefined;
                  const finalPrice = discount
                    ? Math.round(plan.price * (1 - discount))
                    : plan.price;
                  setSelectedPlan({ planName: plan.name, price: finalPrice });
                  navigate("/resume");
                }}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
