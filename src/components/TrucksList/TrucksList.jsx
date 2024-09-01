import Truck from "../Truck/Truck";
import css from "./TrucksList.module.css";
import { useSelector } from "react-redux";
import { selectTrucks } from "../../redux/selectors";

export default function TrucksList() {
  const items = useSelector(selectTrucks);

  return (
    <ul className={css.container}>
      {items.map((item, index) => (
        <li key={`${item.id}-${index}`}>
          <Truck item={item} />
        </li>
      ))}
    </ul>
  );
}
