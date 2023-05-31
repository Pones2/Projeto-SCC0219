import React , { useState, useEffect } from "react";

import "./Products.css";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ProductDisplay from "../../Components/ProductDisplay/ProductDisplay";
import Filter from "../../Components/Filter/Filter";

import ProductsData from "../../Data/Products";

// simulate delay
const delay = () => {
  return new Promise(function(resolve) {
    setTimeout(resolve, 100);
  });
};

// set an array of <ProductDisplay /> components
const ProductsPage = ({ products }) => {
  const [productList, setProductList] = React.useState([]);

  const [filterValues, setFilterValues] = useState({
    name: "",
    price: 0,
    type: "todos",
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    delay()
      .then(() => {

        console.log(filterValues);

        let filteredProducts = products;

        // Filter by name
        if (filterValues.name) {
          filteredProducts = filteredProducts.filter((product) =>
            product.name.toLowerCase().includes(filterValues.name.toLowerCase())
          );
        }

        // Filter by price
        if (filterValues.price > 0) {
          filteredProducts = filteredProducts.filter(
            (product) => product.price <= filterValues.price
          );
        }

        // Filter by type
        if (filterValues.type !== "todos") {
          filteredProducts = filteredProducts.filter(
            (product) => product.type === filterValues.type
          );
        }

        const filteredProductList = filteredProducts.map((element) => (
          <ProductDisplay
            key={element.id}
            imgSrc={element.imgSrc}
            name={element.name}
            description={element.description}
            price={element.price}
          />
        ));
        setProductList(filteredProductList);
      })
      .catch((error) => {
        console.log("ERROR: Failed to fetch the products list.", error);
      });
  }, [filterValues, products]);

  return (
    <>
      <Header />
      <Filter filterValues={filterValues} onFilterChange={handleFilterChange}/>
      {productList}
      <Footer />
    </>
  );
};

// sla pq precisa disso, mas se n tiver n roda
const ProductsPageWrapper = () => {
  const products = ProductsData(); // Fetch products data outside the component
  return <ProductsPage products={products} />;
};

export default ProductsPageWrapper;
