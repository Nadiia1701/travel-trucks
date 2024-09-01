import css from "./TruckInfo.module.css";
import { AiFillStar } from "react-icons/ai";
import { FaMapLocationDot } from "react-icons/fa6";

export default function TruckInfo({
  item: { name, gallery, price, rating, reviews = [], location, description },
}) {
  return (
    <div className={css.details}>
      <h2 className={css.title}>{name}</h2>
      <div className={css.ratingLocation}>
        <span className={css.rating}>
          <AiFillStar width={20} height={20} className={css.starIcon} />
          {`${rating}(${reviews ? reviews.length : null} Reviews)`}
        </span>
        <span className={css.location}>
          <FaMapLocationDot
            width={16}
            height={16}
            className={css.locationIcon}
          />
          {location}
        </span>
      </div>
      <p className={css.price}>€{price.toFixed(2)}</p>
      <div className={css.card}>
        <div className={css.gallery}>
          {gallery && gallery.length > 0 ? (
            gallery.map((item, index) => (
              <img
                src={item.original}
                alt="truck photo"
                key={index}
                className={css.image}
              />
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
        <p className={css.description}>{description}</p>
      </div>
    </div>
  );
}
