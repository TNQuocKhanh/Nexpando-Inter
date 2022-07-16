import React, { useState, useEffect } from "react";
import Table from "./Table";

const API_URL = "http://localhost:3000/";
console.log("URL", API_URL);

const Category = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/categories`)
      .then((response) => response.json())
      .then((value) => setData(value));
  }, []);

  let keys = [];
  let rows = [];
  if (data.body && data.body.rows && data.body.rows.length > 0) {
    keys = Object.keys(data.body.rows[0]);
    rows = data.body.rows;
    console.log("ROW", rows);
  }

  return (
    <div className="container py-5 my-5">
      <Table header={keys} rows={rows} />
    </div>
  );
};

export default Category;
