import imageRoutes from "../../../utils/imageRoutes";
import s from "./HeaderSection.module.scss";
const HeaderSection = () => {
  return (
    <header className={s.header} aria-label="Header">
      <div className={s.header__headerSection} aria-label="Header Section">
        <div className={s.header__logo} aria-label="Header Logo">
          <img src={imageRoutes.rimacLogo} alt="Rimac Logo" />
        </div>
        <div className={s.header__content} aria-label="Header Content">
          <h4 className={s.header__title}>!Compra por este medio!</h4>
          <div className={s.header__contact} aria-label="Header Contact">
            <img src={imageRoutes.telephoneSolid} alt="Telephone" />
            <h3 className={s.header__contactPhone}>(01) 411 6001</h3>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
