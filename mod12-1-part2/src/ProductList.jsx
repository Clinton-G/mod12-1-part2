import React from "react";
import useInventory from "./useInventory";

const ProductList = () => {
  const { products, removeProduct } = useInventory();

  return (
    <div>
      <h2>Products Inventory:</h2>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price.toFixed(2)}
              <button
                onClick={() => removeProduct(product.id)}
                style={{ marginLeft: "10px" }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Products Avalable.</p>
      )}
    </div>
  );
};

export default ProductList;
