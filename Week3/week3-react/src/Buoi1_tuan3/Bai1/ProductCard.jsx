import image from "./image.png";
import "./ProductCard.css";

function ProductCard() {
  return (
    <div className="card">
      <img src={image1} alt="" />
      <h1>Giày thể thao</h1>
      <h3>1.200.000Đ</h3>
      <button className="btn">Add To Card</button>
    </div>
  );
}
export default ProductCard;
