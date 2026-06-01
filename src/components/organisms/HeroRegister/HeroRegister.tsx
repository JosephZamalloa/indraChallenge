import imageRoutes from "../../../utils/imageRoutes";
import { GradientHeaderText } from "../../atoms";
import HeroForm from "../HeroForm/HeroForm";
import s from "./HeroRegister.module.scss";

export default function HeroRegister() {
  return (
    <div className={s.hero} aria-label="Hero Register Section">
      <div className={s.hero__heroRegister} aria-label="Hero Register Section">
        <section className={s.hero__image} aria-label="Hero Section">
          <div className={s.hero__imageWrapper} aria-label="Hero Image">
            <img src={imageRoutes.heroImage} alt="Hero Image" />
          </div>
        </section>
        <section className={s.hero__content} aria-label="Hero Content">
          <div className={s.hero__topSection}>
            <div className={s.hero__topText}>
              <GradientHeaderText text="Seguro Salud Flexible" />
              <h1 className={s.hero__title}>Creado para ti y tu familia</h1>
            </div>
            <img
              src={imageRoutes.heroImage}
              alt="Hero"
              className={s.hero__mobileImage}
            />
          </div>
          <span className={s.hero__divider} />
          <p className={s.hero__description}>
            Tú eliges cuanto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoria. 100% online.
          </p>
          <HeroForm />
        </section>
      </div>
    </div>
  );
}
