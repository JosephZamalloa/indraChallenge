import { useState } from "react";
import { InfoCard } from "../../molecules";
import imageRoutes from "../../../utils/imageRoutes";
import s from "./InfoCardSelect.module.scss";

interface InfoCardSelectProps {
  onChange?: (index: number) => void;
}

const InfoCardSelect = ({ onChange }: InfoCardSelectProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    setSelectedIndex(index);
    onChange?.(index);
  };
  const selectCardData = [
    {
      icon: imageRoutes.protectionLight,
      text: "Cotiza tu seguro de salud y agrega familiares si así lo deseas.",
      title: "Para mi",
    },
    {
      icon: imageRoutes.addUserLight,
      text: "Realiza una cotización para uno de tus familiares o cualquier persona.",
      title: "Para alguien más",
    },
  ];

  return (
    <div className={s.infoCardSelect}>
      {selectCardData.map((card, key) => (
        <InfoCard
          text={card.text}
          title={card.title}
          icon={card.icon}
          key={key}
          isChecked={selectedIndex === key}
          onChange={() => handleSelect(key)}
        />
      ))}
    </div>
  );
};

export default InfoCardSelect;
