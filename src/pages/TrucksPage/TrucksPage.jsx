import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import TrucksList from "../../components/TrucksList/TrucksList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import { Layout } from "../../components/Layout/Layout";
import { fetchTrucksList } from "../../redux/trucksOps";
import {
  selectError,
  selectIsLoading,
  selectTrucks,
  selectPage,
  selectHasNextPage,
} from "../../redux/selectors";
import { setPage } from "../../redux/trucksSlice";

export default function TrucksPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const trucks = useSelector(selectTrucks);
  const page = useSelector(selectPage);
  const hasNextPage = useSelector(selectHasNextPage);
  const limit = 5;

  useEffect(() => {
    dispatch(fetchTrucksList({ page, limit }));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    if (hasNextPage) {
      dispatch(setPage(page + 1));
    }
  };

  return (
    <Layout>
      {error && <ErrorMessage />}
      {isLoading && !error && <Loader />}
      {trucks.length > 0 && <TrucksList items={trucks} />}
      {hasNextPage && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
    </Layout>
  );
}
