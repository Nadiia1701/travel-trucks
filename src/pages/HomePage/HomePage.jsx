import { Link } from "react-router-dom";
import heroImg from "../../img/Hero.png";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <section
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <p>Campers of your dreams</p>
      <p>You can find everything you want in our catalo</p>
      <Link className={css.viewLink} to={`/catalog`}>
        View now
      </Link>
    </section>
  );
}
