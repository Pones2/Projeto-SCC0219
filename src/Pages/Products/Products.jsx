import React from "react";

import "./Products.css";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";
import ProductDisplay from "../../Components/ProductDisplay/ProductDisplay";

import ProductsData from "../../Data/Products";

const delay = () => {
  return new Promise(function(resolve) {
    setTimeout(resolve, 100);
  });
};

const ProductsPage = ({ products }) => {
  const [productList, setProductList] = React.useState([]);

  React.useEffect(() => {
    delay()
      .then(() => {
        const initialProductList = products.map((element) => (
          <ProductDisplay
            imgSrc={element.imgSrc}
            name={element.name}
            description={element.description}
            price={element.price}
          />
        ));
        setProductList(initialProductList);
      })
      .catch((error) => {
        console.log("ERROR: Failed to fetch the products list.", error);
      });
  }, []);

  return (
    <>
      <Header />
      {productList}
      <Footer />
    </>
  );
};

const ProductsPageWrapper = () => {
  const products = ProductsData(); // Fetch products data outside the component
  return <ProductsPage products={products} />;
};

export default ProductsPageWrapper;
