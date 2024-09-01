import css from "./TruckDetailsPage.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTruckById } from "../../redux/trucksOps.js";
import {
  selectTruck,
  selectError,
  selectIsLoading,
} from "../../redux/selectors.js";
import TruckInfo from "../../components/TruckInfo/TruckInfo.jsx";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import TruckDetails from "../../components/TruckDetails/TruckDetails.jsx";

export default function TruckDetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const item = useSelector(selectTruck);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (id) {
      dispatch(fetchTruckById(id));
    }
  }, [id, dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  if (!item || !item.name) {
    return <div>No data available</div>;
  }

  return (
    <div className={css.container}>
      <TruckInfo item={item} />
      <TruckDetails item={item} />
    </div>
  );
}
