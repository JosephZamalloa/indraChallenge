import HeroImage from "../assets/HeroImage.webp";
import RimacLogo from "../assets/RimacLogo.svg";
import BackButtonCircle from "../assets/atoms-button-circle-icons-web.svg";
import TelephoneSolid from "../assets/GlTelephoneSolid.svg";
import Family from "../assets/gl_family-24x24.svg";
import AddUserLight from "../assets/IcAddUserLight.svg";
import HomeLight from "../assets/IcHomeLight.svg";
import HospitalLight from "../assets/IcHospitalLight.svg";
import ProtectionLight from "../assets/IcProtectionLight.svg";
import Line from "../assets/line.svg";
import StepperProgress from "../assets/atoms_stepper_progress.svg";
import StepperProgressFull from "../assets/atoms_stepper_progress_full.svg";

interface ImageRoutes {
  heroImage: string;
  rimacLogo: string;
  backButtonCircle: string;
  telephoneSolid: string;
  family: string;
  addUserLight: string;
  homeLight: string;
  hospitalLight: string;
  protectionLight: string;
  line: string;
  stepperProgress: string;
  stepperProgressFull: string;
}

const imageRoutes: ImageRoutes = {
  heroImage: HeroImage,
  rimacLogo: RimacLogo,
  backButtonCircle: BackButtonCircle,
  telephoneSolid: TelephoneSolid,
  family: Family,
  addUserLight: AddUserLight,
  homeLight: HomeLight,
  hospitalLight: HospitalLight,
  protectionLight: ProtectionLight,
  line: Line,
  stepperProgress: StepperProgress,
  stepperProgressFull: StepperProgressFull,
};

export default imageRoutes;
