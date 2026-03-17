import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import FetchApiCoBan from "./components/FetchApiCoBan";
import LoadingError from "./components/LoadingError";
import "./App.css";
import DynamicFetch from "./components/DynamicFetch";
import FetchSearchFilter from "./components/FetchSearchFilter";
import CRUDFetchAPI from "./components/CRUDFetchAPI";

function App() {
  return (
    <>
      {/* Bai 1 */}
      {/* <FetchApiCoBan /> */}

      {/* Bai 2 */}
      {/* <LoadingError /> */}

      {/* Bai 3 */}
      {/* <DynamicFetch /> */}

      {/* Bai 4 */}
      {/* <FetchSearchFilter /> */}

      {/* Bai 5 */}
      <CRUDFetchAPI />
    </>
  );
}

export default App;
