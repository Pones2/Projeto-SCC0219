import { useState } from 'react';

// Temp file to test the products page

class Product {
    constructor(id, name, description, type, imgSrc, price, quantity, sold) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.type = type;
        this.imgSrc = imgSrc;
        this.quantity = quantity;
        this.sold = sold;
    }
}

const Products = () => {
    const [products, setProducts] = useState([
        new Product(1, "Product 1", "Description 1", "Type 1", "https://picsum.photos/200", 100, 10, 2),
        new Product(2, "Product 2", "Description 2", "Type 2", "https://picsum.photos/200", 200, 20, 4),
        new Product(3, "Product 3", "Description 3", "Type 3", "https://picsum.photos/200", 300, 30, 3),
    ]);

    return products;
}

export default Products;