import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Table from "./Table";

const API_URL = process.env.REACT_APP_API_URL;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`${API_URL}/products/pages/${currentPage}`)
      .then((response) => response.json())
      .then((product) => setData(product));
  }, [currentPage]);

  useEffect(() => {
    fetch(`${API_URL}/products/count`)
      .then((response) => response.json())
      .then((total) => setCount(total));
  }, []);

  //   console.log("CurrentPage:", currentPage);
  let totalProduct = 0;
  if (count.body && count.body.rows) {
    totalProduct = count.body.rows[0].count;
  }
  //   console.log(totalProduct);

  let keys = [];
  let rows = [];
  if (data.body && data.body.rows && data.body.rows.length > 0) {
    keys = Object.keys(data.body.rows[0]);
    rows = data.body.rows;
    // console.log("ROW", rows);
  }

  const limit = 10;
  const totalPage = Math.ceil(totalProduct / limit);
  const arr = Array.from({ length: totalPage }, (_, index) => index + 1);
  //   console.log(arr);

  return (
    <>
      <Table header={keys} rows={rows} />
      <div className="py-5 mb-5">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center mb-5 py-5">
            {arr.map((item, index) => (
              <li className="page-item" key={index}>
                <NavLink
                  className="page-link"
                  to="/products"
                  onClick={() => setCurrentPage(item)}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Pagination;
