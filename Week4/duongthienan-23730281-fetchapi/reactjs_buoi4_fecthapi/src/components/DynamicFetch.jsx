import React, { useState, useEffect } from "react";

function DynamicFetch() {
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const id = parseInt(userId);
    if (id < 1 || id > 10) {
      setData(null);
      setError("User not found");
      return;
    }

    async function fetchdata() {
      try {
        setError("");
        const url = `https://jsonplaceholder.typicode.com/users/${id}`;
        const res = await fetch(url);

        // Error 400/500 --> Catch không bắt được lỗi
        if (!res.ok) {
          throw new Error("User not found");
        }

        var data = await res.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.log("error networking");
        setData(null);
        setError("User not found");
      }
    }

    fetchdata();
  }, [userId]);

  return (
    <div>
      <input
        type="number"
        placeholder="Nhập userID(1-10)"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        data && (
          <ul>
            <li>Name: {data.name}</li>
            <li>Phone: {data.phone}</li>
            <li>Website: {data.website}</li>
          </ul>
        )
      )}
    </div>
  );
}

export default DynamicFetch;
