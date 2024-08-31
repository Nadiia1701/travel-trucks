import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Navigation from "./Navigation/Navigation";
import Logo from "./Logo/Logo";
import Loader from "./Loader/Loader";
import css from "./App.module.css";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const TrucksPage = lazy(() => import("../pages/TrucksPage/TrucksPage"));
const TruckDetailsPage = lazy(() =>
  import("../pages/TruckDetailsPage/TruckDetailsPage")
);
const TruckAddInfo = lazy(() => import("./TruckAddInfo/TruckAddInfo"));
const TruckReviews = lazy(() => import("./TruckReviews/TruckReviews"));

export default function App() {
  return (
    <div className={css.container}>
      <Logo />
      <Navigation />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<TrucksPage />} />
          <Route path="/catalog/:id" element={<TruckDetailsPage />}>
            <Route index element={<TruckAddInfo />} />
            <Route path="features" element={<TruckAddInfo />} />
            <Route path="reviews" element={<TruckReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
