import { AiFillStar, AiOutlineStar } from "react-icons/ai"; // Імпорт іконок із react-icons
import css from "./Star.module.css";

export default function StarsArray({ count }) {
  const totalStars = 5;

  const stars = Array.from({ length: totalStars }, (_, index) => {
    return index < count ? (
      <AiFillStar key={index} className={css.filledStar} />
    ) : (
      <AiOutlineStar key={index} className={css.emptyStar} />
    );
  });

  return <div className={css.container}>{stars}</div>;
}
