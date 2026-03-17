import React, { useState, useEffect, useMemo } from "react";

function FetchSearchFilter() {
  var url = "https://jsonplaceholder.typicode.com/posts";
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      try {
        var res = await fetch(url);
        var data = await res.json();
        console.log(data);
        setData(data);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchdata();
  }, []);

  const filterPost = useMemo(() => {
    const searchResult = data.filter((post) =>
      post.title.toLowerCase().includes(title.toLowerCase()),
    );
    console.log(searchResult);

    return searchResult;
  }, [data, title]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <ul>
        {filterPost.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchSearchFilter;
