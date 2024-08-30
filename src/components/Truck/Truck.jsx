import css from "./Truck.module.css";
import { AiFillStar } from "react-icons/ai"; // Іконка для рейтингу
import { FaMapLocationDot } from "react-icons/fa6"; // Іконка для локації
import { FaGasPump } from "react-icons/fa";
import { BsCupHot } from "react-icons/bs";
import { FaWind, FaSitemap } from "react-icons/fa6";
export default function Truck({
  item: {
    name,
    price,
    rating,
    location,
    description,
    transmission,
    engine,
    AC,
    kitchen,
    gallery,
    reviews,
  },
}) {
  const features = [
    {
      icon: <FaSitemap width={20} height={20} />,
      name: transmission === "automatic" ? "Automatic" : "Manual",
      value: transmission,
    },
    {
      icon: <FaGasPump width={20} height={20} />,
      name:
        engine === "petrol"
          ? "Petrol"
          : engine === "diesel"
          ? "Diesel"
          : "Hybrid",
      value: engine,
    },
    {
      icon: <BsCupHot width={20} height={20} />,
      name: "Kitchen",
      value: kitchen,
    },
    { icon: <FaWind width={20} height={20} />, name: "AC", value: AC },
  ];

  const filteredFeatures = features.filter((feature) => feature.value);

  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "…";
  }

  return (
    <div className={css.card}>
      <img src={gallery[0].thumb} alt={name} className={css.image} />

      <div className={css.details}>
        <h2 className={css.title}>{name}</h2>

        <div className={css.ratingLocation}>
          <span className={css.rating}>
            <AiFillStar width={20} height={20} className={css.starIcon} />
            {rating} ({reviews.length} Reviews)
          </span>
          <span className={css.location}>
            <FaMapLocationDot
              width={20}
              height={20}
              className={css.locationIcon}
            />
            {location}
          </span>
        </div>
        <p className={css.description}>{truncateText(description, 60)}</p>

        <div className={css.features}>
          {filteredFeatures.map((feature) => (
            <span key={feature.name} className={css.feature}>
              {feature.icon} {feature.name}
            </span>
          ))}
        </div>
      </div>
      <div className={css.price}>€{price.toFixed(2)}</div>
    </div>
  );
}
