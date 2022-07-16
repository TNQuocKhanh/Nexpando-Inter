import React, { useState } from "react";

// const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/";
const API_URL = process.env.REACT_APP_API_URL;

const AddProduct = () => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValue = {
      cate_id: category,
      name,
      price,
      description,
    };
    console.log("FORM VALUE", formValue);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(formValue);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    console.log(JSON.stringify(formValue));
    console.log(raw);

    fetch(`${API_URL}/products`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));

    setCategory("");
    setName("");
    setPrice("");
    setDescription("");
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-dark m-5"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add product
        {/* {console.log("DATA", data)} */}
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add product
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="modal-body mx-3">
                  <div className="md-form mb-2">
                    <label
                      data-error="wrong"
                      data-success="right"
                      htmlFor="defaultForm-email"
                    >
                      CategoryID
                    </label>
                    <input
                      type="text"
                      id="defaultForm-email"
                      className="form-control validate"
                      onChange={(e) => setCategory(e.target.value)}
                      value={category}
                    />
                  </div>

                  <div className="md-form mb-2">
                    <label
                      data-error="wrong"
                      data-success="right"
                      htmlFor="defaultForm-pass"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="defaultForm-pass"
                      className="form-control validate"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                  <div className="md-form mb-2">
                    <label
                      data-error="wrong"
                      data-success="right"
                      htmlFor="defaultForm-pass"
                    >
                      Price
                    </label>
                    <input
                      required
                      type="text"
                      id="defaultForm-pass"
                      className="form-control validate"
                      onChange={(e) => setPrice(e.target.value)}
                      value={price}
                    />
                  </div>
                  <div className="md-form mb-2">
                    <label
                      data-error="wrong"
                      data-success="right"
                      htmlFor="defaultForm-pass"
                    >
                      Description
                    </label>
                    <input
                      type="text"
                      id="defaultForm-pass"
                      className="form-control validate"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  ADD
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
