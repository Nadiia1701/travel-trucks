import { NavLink } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <section className={css.container}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.text}>You can find everything you want in our catalo</p>
      <NavLink className={css.link} to={`/catalog`}>
        View now
      </NavLink>
    </section>
  );
}
