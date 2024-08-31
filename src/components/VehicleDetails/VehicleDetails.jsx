import css from "./VehicleDetails.module.css";

export default function VehicleDetails({
  item: { form, length, width, height, tank, consumption },
}) {
  const options = [
    { name: "Form", value: form },
    { name: "Length", value: length },
    { name: "Width", value: width },
    { name: "Height", value: height },
    { name: "Tank", value: tank },
    { name: "Consumption", value: consumption },
  ];

  const filteredOptions = options.filter((option) => option.value);

  return (
    <div className={css.options}>
      <h2 className={css.title}>Vehicle details</h2>
      <ul className={css.list}>
        {filteredOptions.map((option) => (
          <li key={option.name} className={css.listItem}>
            <span className={css.label}>{option.name}</span>
            <span className={css.value}>{option.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
