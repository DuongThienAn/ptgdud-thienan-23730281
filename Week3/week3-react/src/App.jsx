import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Alert from "./Buoi1_tuan3/Bai3/Alert";
// import ProductCard from "./Buoi1_tuan3/Bai1/ProductCard";
// import ButtonComponent from "./Buoi1_tuan3/Bai2/ButtonComponent";
function App() {
  const [count, setCount] = useState(0);

  // return (
  // <>
  //   <ProductCard />
  // </>

  // <>
  //   <ButtonComponent type="primary" text="Primary" />
  //   <ButtonComponent type="danger" text="Danger" />
  //   <ButtonComponent type="success" text="Success" />
  // </>
  // );
  const [type, setType] = useState(null);
  return (
    <>
      <button onClick={() => setType("success")}>Success</button>
      <button onClick={() => setType("warning")}>Warning</button>
      <button onClick={() => setType("error")}>Error</button>
      <Alert loai={type}></Alert>
    </>
  );
}

export default App;
