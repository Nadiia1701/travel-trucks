import css from "./TruckDetails.module.css";
import { useSelector } from "react-redux";
import { Suspense } from "react";
import { useParams, NavLink, Outlet } from "react-router-dom"; // Заменяем Link на NavLink
import {
  selectTruck,
  selectIsLoading,
  selectError,
} from "../../redux/selectors.js";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";

export default function TruckDescription() {
  const item = useSelector(selectTruck);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const { id } = useParams();

  return (
    <div className={css.container}>
      {error && <ErrorMessage />}
      {isLoading && <Loader />}
      <div className={css.links}>
        <div className={css.features}>
          <NavLink
            to={`/catalog/${id}/features`}
            className={({ isActive }) => (isActive ? css.activeLink : "")}
          >
            Features
          </NavLink>
        </div>
        <div className={css.reviews}>
          <NavLink
            to={`/catalog/${id}/reviews`}
            className={({ isActive }) => (isActive ? css.activeLink : "")}
          >
            Reviews
          </NavLink>
        </div>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet item={item} />
      </Suspense>
    </div>
  );
}
