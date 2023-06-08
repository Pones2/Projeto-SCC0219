import React , { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Products.css";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import ProductDisplay from "../../Components/ProductDisplay/ProductDisplay";
import Filter from "../../Components/Filter/Filter";

const ProductsPage = ({ products }) => {
  const [productList, setProductList] = React.useState([]);

  // array of all filter values
  const [filterValues, setFilterValues] = useState({
    name: "",
    price: 0,
    type: "todos",
  });

  // makes the filter work
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    // fetch data
    fetch('/ProductsData.json',
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }).then(response => response.json()
      ).then((data) => {
        console.log(filterValues);

        let filteredProducts = data;

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

        // filtered products as a html tag
        const filteredProductList = filteredProducts.map((element) => (<div class="product">
          <Link to={`/produtos/${element.id}`} key={element.id} className="productsLink">
            <ProductDisplay
              key={element.id}
              imgSrc={element.imgSrc}
              name={element.name}
              description={element.description}
              price={element.price}
            />
          </Link></div>
        ));
        setProductList(filteredProductList);
      }).catch((error) => {
        window.alert("ERROR: Failed to fetch the products list. Error = " + error);
      });
  }, [filterValues, products]);

  return (
    <>
      <Header />
      <div class="containerProducts">
          <Filter filterValues={filterValues} onFilterChange={handleFilterChange}/>
        <div class="products">
          {productList}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
