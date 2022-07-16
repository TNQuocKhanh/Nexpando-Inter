import React, { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL;

const Modal = (props) => {
  const [cate_id, setCategory] = useState(props.cate_id);
  const [name, setName] = useState(props.name);
  const [price, setPrice] = useState(props.price);
  const [description, setDescription] = useState(props.description);

  // const [data, setData] = useState({});
  const id = props.id;

  const values = { cate_id, name, price, description };
  console.log("DATA VLAUE", values);
  //   setData(values);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("DATA VLAUE 2", values);
    console.log("ID", id);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(values);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${API_URL}/products/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    setCategory("");
    setName("");
    setPrice("");
    setDescription("");
  };

  return (
    <div className="container p-5">
      <h2>Edit Product</h2>
      <form>
        <div className="form-group my-2">
          <label htmlFor="cateId">CategoryID:</label>
          <input
            type="text"
            className="form-control"
            id="cateId"
            name="cateId"
            value={cate_id}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            className="form-control"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-outline-dark"
          onClick={handleSubmit}
        >
          SAVE CHANGE
        </button>
      </form>
    </div>
  );
};

export default Modal;
