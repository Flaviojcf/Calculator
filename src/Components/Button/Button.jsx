import "./Button.css";

export function Button({ value, operation, double, triple, onClick }) {
  return (
    <input
      type="button"
      value={value}
      onClick={onClick}
      className={`button ${operation ? "operation" : ""}
            ${double ? "double" : ""}
            ${triple ? "triple" : ""}
  `}
    ></input>
  );
}
