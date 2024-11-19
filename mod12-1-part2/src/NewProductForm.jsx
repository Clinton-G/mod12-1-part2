import React, { useState } from "react";
import useInventory from "./useInventory";

const NewProductForm = () => {
  const { addProduct } = useInventory();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!productName.trim() || !productPrice || isNaN(productPrice)) {
      alert("Please Enter Valid Product Name and Price.");
      return;
    }

    addProduct({
      name: productName.trim(),
      price: parseFloat(productPrice),
    });

    setProductName("");
    setProductPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Product</h2>
      <div>
        <label>
          Product Name:
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter Products Name"
          />
        </label>
      </div>
      <div>
        <label>
          Prodect Price:
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            placeholder="Enter Products Price"
            step="0.01"
          />
        </label>
      </div>
      <button type="submit">Add aProduct</button>
    </form>
  );
};

export default NewProductForm;
