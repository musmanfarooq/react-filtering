import React, { useEffect, useState } from "react";
import Gradient from "./components/Gradient/Gradient.tsx";
import Sidebar from "./components/Sidebar/SideBar.tsx";
import MainContent from "./components/MainContent/MainContent.tsx";
import axios from "axios";
import { products as backupData, Products } from "./data/products.ts";
import Spinner from "./components/Spinner/Spinner.tsx";

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = () => {
    axios
      .get("http://localhost:8000/products")
      .then((response) => {
        setProducts(response.data);
        setError(null);
      })
      .catch((err) => {
        if (err.code === "ERR_NETWORK") {
          setError(
            "Failed to fetch data because Server is not running. Showing backup data."
          );
          setProducts(backupData);
          setTimeout(() => {
            setError(null);
          }, 2000);
        } else {
          setError("Failed to fetch data");
        }

        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-3xl text-center text-gray-800 grid place-content-center h-[100vh]">
        <div className="mx-auto my-5">
          <Spinner />
        </div>
        <p>Fetching Data form API. Make sure Server is Running</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-3xl text-center text-gray-800 grid place-content-center h-[100vh]">
        {error}
      </div>
    );
  }

  return (
    <>
      <Gradient />
      <div className="flex h-[full] ">
        <div className="shadow-lg p-4 min-w-[20%]">
          <Sidebar
            setFilteredProducts={setFilteredProducts}
            products={products}
          />
        </div>
        <div className="flex-grow bg-gray-100 p-4">
          <MainContent filteredProducts={filteredProducts} />
        </div>
      </div>
    </>
  );
};

export default App;
