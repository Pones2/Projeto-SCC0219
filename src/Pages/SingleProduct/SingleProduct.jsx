//since is only cliente side, the delete functionality is not implemented

import React, {useState, useEffect} from "react";
import { Link , useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./SingleProduct.css";

import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Button/Button";
import Label from "../../Components/Label/Label";

const SingleProduct = ({GlobalState}) => {
    const { login, cart, setCart } = GlobalState;

    const navigate = useNavigate();

    // product variables
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("todos");
    const [description, setDescription] = useState("");
    const [imgSrc, setImgSrc] = useState("");
    const [quantity, setQuantity] = useState(0);

    const [cartQuantity, setCartQuantity] = useState(0);
    const [updatedCartQuantity, setUpdatedCartQuantity] = useState(0);

    // updated product variables
    const [updatedName, setUpdatedName] = useState("");
    const [updatedPrice, setUpdatedPrice] = useState(0);
    const [updatedType, setUpdatedType] = useState("todos");
    const [updatedDescription, setUpdatedDescription] = useState("");
    const [updatedImgSrc, setUpdatedImgSrc] = useState("");
    const [updatedQuantity, setUpdatedQuantity] = useState(0);

    const { id } = useParams();

    useEffect(() => {
        // fetch data
        const timer = setTimeout(() => {
            fetch('/ProductsData.json', {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }
            })
            .then(response => response.json())
            .then((data) => {
                // finds the product with the id passed in the url
                const product = data.find((product) => product.id === id);

                setName(product.name);
                setPrice(product.price);
                setType(product.type);
                setDescription(product.description);
                setImgSrc(product.imgSrc);
                setQuantity(product.quantity);

                // doesnt reset the amount of products in the cart
                const counts = {};
                cart.forEach((product) => {
                    counts[product.id] = (counts[product.id] || 0) + 1;
                });
                if(counts[id] !== undefined)
                    setUpdatedCartQuantity(counts[id]);
                else
                    setUpdatedCartQuantity(0);
            })
            .catch(error => {
                window.alert("Erro ao carregar o produto. Erro = " + error)
            });
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const addToCart = () => {
        // product object
        const product = {
            name: name,
            price: price,
            type: type,
            imgSrc: imgSrc,
            id: id
        }

        // counts how many products with the same id are in the cart
        const countProducts = () => {
            const counts = {};
            cart.forEach((product) => {
                counts[product.id] = (counts[product.id] || 0) + 1;
            });
            return counts;
        };

        let tempCartQuantity = cartQuantity;

        if(cartQuantity === 0)
        {
            tempCartQuantity = 1;
            setCartQuantity(1);
        }

        // if there are more products with the same id than the quantity available
        if(countProducts()[id] + tempCartQuantity > quantity)
        {
            window.alert("Não há mais produtos disponíveis");
            return;
        }

        const updatedCart = [...cart];
        
        for (let i = 0; i < tempCartQuantity; i++) {
          updatedCart.push(product);
        }
        
        setUpdatedQuantity(quantity - tempCartQuantity);
        setUpdatedCartQuantity(updatedCartQuantity + tempCartQuantity);
        setCart(updatedCart);
    }

    // form changes 
    const handleSubmit = (event) => {
        event.preventDefault();

        const product = {
            // mantem os valores originais caso o admin não altere
            name: updatedName !== "" ? updatedName : name,
            price: updatedPrice !== "" ? updatedPrice : price,
            type: updatedType !== "" ? updatedType : type,
            description: updatedDescription !== "" ? updatedDescription : description,
            imgSrc: updatedImgSrc !== "" ? updatedImgSrc : imgSrc,
            quantity: updatedQuantity !== "" ? updatedQuantity : quantity
        }

        // convert to JSON
        const productJSON = JSON.stringify(product);

        // simulate POST

        localStorage.setItem("product: " + name, productJSON);

        // OBS: the product is not updated in the ProductsData.json file, only in the localStorage
    }

    const handleNameChange = (event) => {
        setUpdatedName(event.target.value);
    }

    const handlePriceChange = (event) => {
        setUpdatedPrice(event.target.value);
    }

    const handleTypeChange = (event) => {
        setUpdatedType(event.target.value);
    }

    const handleDescriptionChange = (event) => {
        setUpdatedDescription(event.target.value);
    }

    const handleImgSrcChange = (event) => {
        setUpdatedImgSrc(event.target.value);
    }

    const handleQuantityChange = (event) => {
        setUpdatedQuantity(event.target.value);
    }

    const handleCartQuantityChange = (event) => {
        setCartQuantity(parseInt(event.target.value, 10));
    };      

    const generateNumOfProducts = (n) => {
        const options = [];
        for(let i = 1; i <= n; i++)
        {
            options.push(<option value={i}> {i} </option>);
        }
        return options;
    }

    // converts to brl currency
    function toCurrency(value)
    {
        return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }

    if (login !== "admin")
    {
        return (
            <>
                <Header />
                <div id="product">
                    <div id="productImage">
                        <img src={imgSrc} />
                    
                    </div>
                    <div id="productInfo">
                        <div id="productInfoValues">
                            <div id="productInfoValuesPrice">
                                <h1 id="productInfoName"> {name} </h1>
                                <p> Quantidade: {quantity} </p>
                                <p> No Carrinho: {updatedCartQuantity}</p>
                                <h3> {type} </h3>
                            </div>
                            <div id="numberOfProductsDropdown">
                                <h2> Quantidade: </h2>
                                <select id="numberOfProducts" onChange={handleCartQuantityChange} value={cartQuantity}>
                                    {generateNumOfProducts(quantity)}
                                </select>
                            </div>
                            <div id="productInfoValuesButton">
                                <h2 id="productInfoPrice"> {toCurrency(price)} </h2>
                                <Button onClick={addToCart} id="productButton"> Adicionar ao Carrinho </Button>
                            </div>
                        </div>
                        <div id="productInfoDesc">
                            <p> {description} </p>
                        </div>
                    </div>
                
                </div>
                <Footer />
            </>
        );
    }
    else
    {
        return (
            <>
                <Header />
                <div id="product">
                    <div id="productImage">
                        <img src={imgSrc} />
                    
                    </div>
                    <div id="productInfo">
                        <div id="productInfoValues">
                            <div id="productInfoValuesPrice">
                                <h1 id="productInfoName"> {name} </h1>
                                <p> Quantidade: {quantity} </p>
                                <p> No Carrinho: {updatedCartQuantity}</p>
                                <h3> {type} </h3>
                            </div>
                            <div id="numberOfProductsDropdown">
                                <h2> Quantidade: </h2>
                                <select id="numberOfProducts" onChange={handleCartQuantityChange} value={cartQuantity}>
                                    {generateNumOfProducts(quantity)}
                                </select>
                            </div>
                            <div id="productInfoValuesButton">
                                <h2 id="productInfoPrice"> {toCurrency(price)} </h2>
                                <Button onClick={addToCart} id="productButton"> Adicionar ao Carrinho </Button>
                            </div>
                        </div>
                        <div id="productInfoDesc">
                            <p> {description} </p>
                        </div>
                        
                    </div>

                        <div id="editProduct">
                        <form onSubmit={handleSubmit} id="formEditProd">
                            <p id="textEditProd"> Editar produto: </p> <br></br>
                            <Label onChange={handleNameChange}> Nome </Label>
                            <Label onChange={handlePriceChange}> Preço </Label>
                            <Label onChange={handleTypeChange}> Tipo </Label>
                            <Label onChange={handleDescriptionChange}> Descrição </Label>
                            <Label onChange={handleImgSrcChange}> Imagem </Label>
                            <Label onChange={handleQuantityChange}> Quantidade </Label>
                            <Button> Editar </Button>
                        </form>
                        <Button> Deletar </Button>
                        </div>
                </div>
                <Footer />
            </>
        );
    }
}

export default SingleProduct;