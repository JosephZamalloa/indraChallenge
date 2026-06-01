import HeroRegister from "../../components/organisms/HeroRegister/HeroRegister";
import s from "./RegisterPage.module.scss";

export default function RegisterPage() {
  return (
    <div className={s.registerPage}>
      <HeroRegister />
    </div>
  );
}
