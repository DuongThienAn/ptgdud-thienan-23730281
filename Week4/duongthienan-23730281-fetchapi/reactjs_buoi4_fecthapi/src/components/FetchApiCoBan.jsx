import { useEffect, useState } from "react";

function FetchApiCoBan() {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    var fetchdata = fetch(url);
    var res = fetchdata
      .then((respone) => {
        return respone.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  return (
    <>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.email}</p>
          </div>
        );
      })}
    </>
  );
}

export default FetchApiCoBan;
