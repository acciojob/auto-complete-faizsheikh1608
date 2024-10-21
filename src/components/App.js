import React, { useState } from "react";
import "./../styles/App.css";

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const App = () => {
  const [data, setData] = useState(fruits);
  const [updateArray, setUpdateArray] = useState(fruits);

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Search Item</h1>
      <input
        type="search"
        onChange={(e) => {
          const filterdata = data.filter((curr) =>
            curr.includes(e.target.value)
          );
          setUpdateArray(filterdata);
        }}
      ></input>
      <ul>
        {updateArray.map((curr, idx) => (
          <li key={idx}>{curr}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
