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
    name: "1",
    price: 0,
    type: "todos",
  });

  // makes the filter work
  const handleFilterChange = (event) => {
    console.log(123)
    const { name, value } = event.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    // fetch data
    const timer = setTimeout(async () => {
      let result = await fetch(
        `http://localhost:5000/getProduct?name=${encodeURIComponent(filterValues.name)}&price=${filterValues.price}&type=${encodeURIComponent(filterValues.type)}`, {
        method: "get",
        headers: {
            "Content-Type": "application/json",
        }
    }).then(response => response.json()
      ).then((data) => {
        
        console.log(data)
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
              imgSrc={"data:image/jpeg;base64," + element.image.data}
              name={element.name}
              description={element.description}
              price={element.price}
            />
          </Link></div>
        ));
        setProductList(filteredProductList);
      }).catch((error) => {
        window.alert("ERROR: Failed to fetch the products list. Error = " + error);
      })}, 100);

      return () => clearTimeout(timer);
  }, [filterValues, products]);

  // const translateImageToJpg = async (base64Data) => {
  //   const base64Image = base64Data.replace(/^data:image\/jpeg;base64,/, "");
  //   const binaryData = Buffer.from(base64Image, "base64");
  //   const url = URL.createObjectURL(new Blob([binaryData], { type: "image/jpeg" }));
  //   return url
  // }

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
