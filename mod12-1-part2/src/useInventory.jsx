import { useState } from "react";

const useInventory = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product A", price: 100 },
    { id: 2, name: "Product B", price: 200 },
  ]);

  const fetchProducts = () => products;

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [
      ...prevProducts,
      { ...newProduct, id: prevProducts.length + 1 },
    ]);
  };

  const removeProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return { products, fetchProducts, addProduct, removeProduct };
};

export default useInventory;
