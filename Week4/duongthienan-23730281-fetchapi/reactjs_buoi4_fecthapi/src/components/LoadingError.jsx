import { useEffect, useState } from "react";

function LoadingError() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = "https://jsonplaceholder.typicode.com/users1";

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("Error Networking");
        }

        const data = await res.json();
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error === null ? (
        data.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.email}</p>
            </div>
          );
        })
      ) : (
        <p>Error Networking .....</p>
      )}
    </>
  );
}

export default LoadingError;
