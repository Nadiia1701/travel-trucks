import css from "./TruckDetailsPage.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTruckById } from "../../redux/trucksOps.js";
import { selectTruck, selectError } from "../../redux/selectors.js";
import TruckInfo from "../../components/TruckInfo/TruckInfo.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";

export default function TruckDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector(selectTruck);
  const error = useSelector(selectError);

  useEffect(() => {
    if (id) {
      dispatch(fetchTruckById(id));
    }
  }, [id, dispatch]);

  if (!item.name) {
    return <Loader />;
  }

  return (
    <div className={css.container}>
      {error && <ErrorMessage />}
      <TruckInfo item={item} />
    </div>
  );
}
