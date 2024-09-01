import { useSelector } from "react-redux";
import { selectTruck } from "../../redux/selectors.js";
import Star from "../Star/Star.jsx";
import css from "./TruckReviews.module.css";

export default function TruckReviews() {
  const item = useSelector(selectTruck);
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        {item.reviews
          ? item.reviews.map((item, index) => (
              <div key={index} className={css.wrapper}>
                <p className={css.avatar}>
                  {item.reviewer_name.charAt(0).toUpperCase()}
                </p>
                <div className={css.nameStar}>
                  <p className={css.name}>{item.reviewer_name}</p>
                  <Star count={item.reviewer_rating} />
                </div>
                <p className={css.comment}>{item.comment}</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
