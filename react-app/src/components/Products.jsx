import React from "react";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";

const Products = () => {
  return (
    <div>
      <div>
        <h1 className="text-center">All Products</h1>
        <AddProduct />
      </div>
      <Pagination />
    </div>
  );
};

export default Products;
