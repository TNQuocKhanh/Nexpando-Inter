import React from "react";
import { useState } from "react";
import UpdateProduct from "./UpdateProduct";

const Table = ({ header, rows }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});

  const handleClick = (row) => {
    console.log("row", row);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const { id, ...data } = row;

    console.log("id", id);
    console.log("data", data);

    var raw = JSON.stringify({
      data,
    });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`http://localhost:3000/products/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const handleUpdate = (row) => {
    setIsOpen(true);
    // console.log(row);
    const { ...data } = row;
    // console.log(data);
    setData(data);
  };

  return (
    <>
      {isOpen && (
        <UpdateProduct
          id={data.id}
          cate_id={data.cate_id}
          name={data.name}
          price={data.price}
          description={data.description}
        />
      )}
      <table className="table mx-5">
        <thead>
          <tr>
            {header.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {rows.map((item, index) => {
            return (
              <tr key={index}>
                {Object.values(item).map((value, index1) => {
                  return <td key={index1}>{value}</td>;
                })}
                <td>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={(row) => handleUpdate(rows[index])}
                  >
                    Update
                  </button>

                  <button
                    type="button"
                    className="btn btn-secondary mx-2"
                    onClick={(row) => handleClick(rows[index])}
                  >
                    X
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
