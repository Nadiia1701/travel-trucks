import Truck from "../Truck/Truck";
import css from "./TrucksList.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTrucks } from "../../redux/selectors";

export default function TrucksList() {
  const items = useSelector(selectTrucks);

  return (
    <ul className={css.listContainer}>
      {items.map((item, index) => (
        <li key={`${item.id}-${index}`}>
          <Truck item={item} />
          <Link className={css.viewLink} to={`/catalog/${item.id}`}>
            Show more
          </Link>
        </li>
      ))}
    </ul>
  );
}
