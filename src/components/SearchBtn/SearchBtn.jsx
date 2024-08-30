import css from "./SearchBtn.module.css";

export default function SearchBtn({ onClick }) {
  return (
    <div className={css.container}>
      <button className={css.btn} onClick={onClick}>
        Search
      </button>
    </div>
  );
}
