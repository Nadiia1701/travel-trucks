import css from "./TruckAddInfo.module.css";
import { useSelector } from "react-redux";
import { selectTruck } from "../../redux/selectors";
import TruckFeatures from "../../components/TruckFeatures/TruckFeatures.jsx";
import VehicleDetails from "../../components/VehicleDetails/VehicleDetails.jsx";

export default function TrucksList() {
  const item = useSelector(selectTruck);

  return (
    <>
      {item ? (
        <div className={css.container}>
          <TruckFeatures item={item} />
          <VehicleDetails item={item} />
        </div>
      ) : null}
    </>
  );
}
