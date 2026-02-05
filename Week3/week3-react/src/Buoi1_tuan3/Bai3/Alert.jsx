import "./Alert.css";
export default function Alert(props) {
  return (
    <div className={props.loai}>
      <p style={{ color: "black", fontSize: 30 }}> ALERT!</p>
    </div>
  );
}
