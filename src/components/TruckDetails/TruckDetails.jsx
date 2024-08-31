import css from "./TruckDetails.module.css";
import { useSelector } from "react-redux";
import { selectTruck } from "../../redux/selectors.js";
import TruckAddInfo from "../../components/TruckAddInfo/TruckAddInfo.jsx";
import TruckReviews from "../TruckReviews/TruckReviews.jsx";

export default function TruckDetails() {
  const item = useSelector(selectTruck);

  return (
    <div className={css.container}>
      <TruckAddInfo item={item} />
      <TruckReviews item={item} />
    </div>
  );
}
