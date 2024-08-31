import css from "./TruckFeatures.module.css";
import { FaGasPump, FaBroadcastTower } from "react-icons/fa";
import { BsCupHot, BsDroplet } from "react-icons/bs";
import { FaWind, FaSitemap } from "react-icons/fa6";

export default function TruckFeatures({
  item: { transmission, engine, AC, kitchen, gas, radio, bathroom },
}) {
  const features = [
    {
      icon: <FaSitemap width={20} height={20} />,
      name: transmission === "automatic" ? "Automatic" : "Manual",
      value: transmission,
    },
    {
      icon: <FaGasPump width={20} height={20} />,
      name:
        engine === "petrol"
          ? "Petrol"
          : engine === "diesel"
          ? "Diesel"
          : "Hybrid",
      value: engine,
    },
    {
      icon: <BsCupHot width={20} height={20} />,
      name: "Kitchen",
      value: kitchen,
    },
    {
      icon: <FaWind width={20} height={20} />,
      name: "AC",
      value: AC,
    },
    {
      icon: <FaGasPump width={20} height={20} />,
      name: "Gas",
      value: gas,
    },
    {
      icon: <FaBroadcastTower width={20} height={20} />,
      name: "Radio",
      value: radio,
    },
    {
      icon: <BsDroplet width={20} height={20} />,
      name: "Bathroom",
      value: bathroom,
    },
  ];

  const filteredFeatures = features.filter((feature) => feature.value);

  return (
    <div className={css.features}>
      {filteredFeatures.map((feature) => (
        <span key={feature.name} className={css.feature}>
          {feature.icon} {feature.name}
        </span>
      ))}
    </div>
  );
}
