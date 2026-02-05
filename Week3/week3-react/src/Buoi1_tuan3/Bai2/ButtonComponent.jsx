import "./ButtonComponent.css";

export default function ButtonComponent({ type, text }) {
  return <button className={`btn ${type}`}>{text}</button>;
}
