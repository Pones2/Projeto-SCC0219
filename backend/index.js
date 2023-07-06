const fs = require("fs");

//para conectar com o servidor mongo
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://127.0.0.1:27017/",
  {
    dbName: "petshop",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) =>
    err ? console.log(err) : console.log("Conectado com o Banco De Dados")
);

//esquemas que sao usados no banco de dados

//esquema dos usuarios
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  admin: {
    type: Boolean,
    default: false,
  },
});
const User = mongoose.model("users", UserSchema);
User.createIndexes();

//esquema dos produtos
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  image: {
    data: String,
    contentType: String,
  },
  quantity: {
    type: Number,
    required: true,
    default: 0,
  },
  type: {
    type: String,
    default: "Produto",
  },
  sold: {
    type: Number,
    default: 0,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

//esquema das vendas
const SoldSchema = new mongoose.Schema({
  userEmail: {
    type: String,
  },
  userName: {
    type: String,
  },
  soldDate: {
    type: Date,
    default: Date.now,
  },
  totalPrice: {
    type: Number,
  },
  userAddres: {
    type: String,
  },
  products: {
    type: [productSchema],
  },
  delivered: {
    type: Boolean,
    default: false,
  },
});
const Sold = mongoose.model("Sold", SoldSchema);
module.exports = Sold;

//esquema dos contatos
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  message: {
    type: String,
  },
});
const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;

//express
const express = require("express");
const app = express();
const cors = require("cors");
const { Int32 } = require("mongodb");
console.log("App funcionando na porta 5000");
app.use(express.json());
app.use(cors());

//registrar usuario
app.post("/register", async (req, resp) => {
  try {
    const email = req.body.email;

    //verifica se o usuario ja  esta registrado
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      //caso o email ja esteja cadastrado
      console.log("Email ja cadastrado no Sistema");
      resp.send(JSON.stringify("Email ja cadastrado no Sistema"));
    } else {
      //caso o email nao esteja cadastrado
      //criando um novo usuario
      const user = new User(req.body);
      let result = await user.save();
      result = result.toObject();

      if (result) {
        delete result.password;
        console.log(result);
        resp.send(JSON.stringify("Usuario Cadastrado Com Sucesso"));
      } else {
        console.log("Falha no cadastro de Usuario");
        resp.send(JSON.stringify("Falha no cadastro de Usuario"));
      }
    }
  } catch (e) {
    console.log("Erro de acesso ao banco");
    resp.send(JSON.stringify("Erro de acesso ao banco"));
  }
});

//login de usuario
app.get("/getUserLogin", async (req, resp) => {
  try {
    const email = req.query.email;
    const password = req.query.password;

    //procurando o login correto
    let user = await User.findOne({ email });
    if (user) {
      user = user.toObject();

      if (user.password == password) {
        //verifica se a senha esta correta
        delete user.password;
        resp.send(user);
        console.log(user);
      } else {
        console.log("Senha Incorreta");
        resp.send(JSON.stringify("Senha Incorreta"));
      }
    } else {
      console.log("Email Nao Cadastrado");
      resp.send(JSON.stringify("Email Nao Cadastrado"));
    }
  } catch (e) {
    console.log("Erro de acesso ao banco");
    resp.send(JSON.stringify("Erro de acesso ao banco"));
  }
});

//carrega usuarios
app.get("/getUsers", async (req, resp) => {
  try {
    const quantity = req.query.quantity;
    const name = req.query.name;
    let users;

    //faz um regex do nome para uma melhor pesquisa
    if (name != null && name !== undefined && name !== "" && name !== "") {
      const nameRegex = new RegExp(name, "i");

      users = await User.find({ name: nameRegex }).limit(parseInt(quantity));
    } else {
      users = await User.find().limit(parseInt(quantity));
    }

    resp.send(users);
  } catch (e) {
    console.log("Erro de acesso ao banco", e);
    resp.send(JSON.stringify("Erro de acesso ao banco"));
  }
});

//deletar usuario
app.delete("/deleteUser", (req, res) => {
  const userEmail = req.query.email;

  //procura o usuario com o email e deleta
  User.findOneAndDelete({ email: userEmail })
    .then((deletedUser) => {
      if (deletedUser) {
        //caso tenha encontrado o usuario
        console.log("Usuário excluído:", deletedUser);
        res.status(200).json({ message: "Usuário excluído com sucesso." });
      } else {
        //caso nao tenha encontrado o usuario
        console.log("Nenhum usuário encontrado com o email fornecido.");
        res
          .status(404)
          .json({ error: "Nenhum usuário encontrado com o email fornecido." });
      }
    })
    .catch((error) => {
      console.error("Ocorreu um erro ao excluir o usuário:", error);
      res.status(500).json({ error: "Ocorreu um erro ao excluir o usuário." });
    });
});

//atualizar as informacoes de usuario
app.put("/updateUser", (req, res) => {
  const userEmail = req.query.email;
  const newPassword = req.body.password;
  const newEmail = req.body.email;
  const newAddress = req.body.address;
  const newPhone = req.body.phone;
  const newName = req.body.name;

  //procura com o email e atualiza os dados
  User.findOneAndUpdate(
    { email: userEmail },
    {
      $set: {
        name: newName,
        password: newPassword,
        email: newEmail,
        address: newAddress,
        phone: newPhone,
      },
    }
  )
    .then((updatedUser) => {
      if (updatedUser) {
        //caso tenha encontrado o usuario
        console.log("Dados do usuário atualizados:", updatedUser);
        res
          .status(200)
          .json({ message: "Dados do usuário atualizados com sucesso." });
      } else {
        //caso nao tenha encontrado o usuario
        console.log("Nenhum usuário encontrado com o email fornecido.");
        res
          .status(404)
          .json({ error: "Nenhum usuário encontrado com o email fornecido." });
      }
    })
    .catch((error) => {
      console.error("Ocorreu um erro ao atualizar os dados do usuário:", error);
      res
        .status(500)
        .json({ error: "Ocorreu um erro ao atualizar os dados do usuário." });
    });
});

//funcao para converter a imagem para base64 para poder salvar no banco
const convertImageToBase64 = (imagePath) => {
  const imageBuffer = fs.readFileSync(imagePath);
  const base64Image = imageBuffer.toString("base64");
  const contentType = "image/jpeg";

  return {
    data: base64Image,
    contentType: contentType,
  };
};

//adiciona um novo produto
app.post("/addProduct", async (req, resp) => {
  try {
    //converte o caminho da imagem na imagem em base64
    const imageData = convertImageToBase64(req.body.imgSrc);

    //cria o novo produto com as informacoes passadas
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      type: req.body.type,
      quantity: req.body.quantity,
      image: imageData,
    });

    //salvando o novo produto
    const savedProduct = await newProduct.save();

    console.log("Produto inserido com sucesso:", savedProduct);
    resp.send(savedProduct);
  } catch (error) {
    console.error("Erro ao inserir o produto:", error);
  }
});

//pegando produtos
app.get("/getProduct", async (req, resp) => {
  try {
    const name = req.query.name;
    let price = parseInt(req.query.price);
    const type = req.query.type;
    let limit = 9;

    //dependendo dos dados passados, muda os valores da pesquisa
    if (price > 0 || name != "" || type != "todos") limit = 102;
    if (price <= 0) price = 100000;

    //regex do nome do produto
    const nameRegex = new RegExp(name, "i");
    const filter = {
      name: { $regex: nameRegex },
      price: { $lte: price },
    };

    if (type != "todos") filter["type"] = type;

    //procura os produtos de acordo com o filtro
    const products = await Product.find(filter).limit(limit);
    resp.send(products);
  } catch (error) {
    console.error("Erro ao obter os produtos:", error);
  }
});

//pega somente um produto de acordo com o id
app.get("/getOneProduct", async (req, resp) => {
  try {
    const idProduct = req.query.id;

    //procura o produto
    let product = await Product.findOne({ _id: idProduct });

    if (product) {
      product = product.toObject();
      resp.send(product);
    } else {
      console.log("Produto Nao Encontrado");
      resp.send(JSON.stringify("Produto Nao Encontrado"));
    }
  } catch (e) {
    console.log("Erro de acesso ao banco");
    resp.send(JSON.stringify("Erro de acesso ao banco"));
  }
});

//deletar um produto
app.delete("/deleteOneProduct", (req, res) => {
  const idProduct = req.query.id;

  //procura de acordo com o id e apaga se encontrar
  Product.findOneAndDelete({ _id: idProduct })
    .then((deletedUser) => {
      if (deletedUser) {
        console.log("Produto excluído:", deletedUser);
        res.status(200).json({ message: "Produto excluído com sucesso." });
      } else {
        console.log("Nenhum Produto encontrado com o ID fornecido.");
        res
          .status(404)
          .json({ error: "Nenhum Produto encontrado com o ID fornecido." });
      }
    })
    .catch((error) => {
      console.error("Ocorreu um erro ao excluir o Produto:", error);
      res.status(500).json({ error: "Ocorreu um erro ao excluir o Produto." });
    });
});

//atualizar os dados de um produto
app.put("/updateProduct", async (req, res) => {
  const productID = req.query.id;
  const newName = req.body.name;
  const newPrice = req.body.price;
  const newType = req.body.type;
  const newDescription = req.body.description;

  try {
    let newImage = null;
    //caso tenha uma atualizacao na imagem
    if (req.body.imgSrc != "" || req.body.imgSrc == null) {
      newImage = convertImageToBase64(req.body.imgSrc);
    }

    const newQuantity = req.body.quantity;

    let result = null;
    if (newImage != null) {
      //caso precise atualizar a imagem
      result = await Product.findOneAndUpdate(
        { _id: productID },
        {
          $set: {
            name: newName,
            price: newPrice,
            type: newType,
            description: newDescription,
            image: newImage,
            quantity: newQuantity,
          },
        }
      );
    } else {
      //caso nao precise atualizar a imagem
      result = await Product.findOneAndUpdate(
        { _id: productID },
        {
          $set: {
            name: newName,
            price: newPrice,
            type: newType,
            description: newDescription,
            quantity: newQuantity,
          },
        }
      );
    }

    if (result) {
      console.log("Dados do produto atualizados:", result);
      res
        .status(200)
        .json({ message: "Dados do produto atualizados com sucesso." });
    } else {
      console.log("Nenhum produto encontrado com o ID fornecido.");
      res
        .status(404)
        .json({ message: "Nenhum produto encontrado com o ID fornecido." });
    }
  } catch (err) {
    console.log("Erro ao atualizar o Produto", err);
    res
      .status(500)
      .json({ message: "Erro ao atualizar o Produto, erro: " + err });
  }
});

//adiciona uma nova venda
app.post("/addSold", async (req, resp) => {
  try {
    //criando a nova venda com os dados passados
    const newSold = new Sold({
      userName: req.body.name,
      userEmail: req.body.email,
      totalPrice: req.body.totalPrice,
      userAddres: req.body.address,
      products: req.body.products,
    });

    //salvando no banco
    const savedSold = await newSold.save();
    resp.send(savedSold);
  } catch (error) {
    console.error("Erro ao inserir a venda:", error);
    resp.send(null);
  }
});

//cria uma mensagem de contato
app.post("/addContact", async (req, resp) => {
  try {
    //criando a nova mensagem com os dados passados
    const newContact = new Contact({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });

    //salvando no banco
    const savedContact = await newContact.save();
    if (savedContact) {
      resp.send("Mensagem enviada com Sucesso!");
    } else {
      resp.send(null);
    }
  } catch (error) {
    console.error("Erro ao inserir a mensagem:", error);
    resp.send(null);
  }
});

//carrega as mensagens para o frontend
app.get("/getContact", async (req, resp) => {
  try {
    let quantity = req.query.quantity;

    if (!quantity) {
      quantity = 1000;
    }

    //pega as mensagens
    const contacts = await Contact.find().limit(quantity);
    console.log(contacts);

    if (contacts) {
      resp.send(contacts);
    } else {
      resp.send("Nenhuma mensagem encontrada!");
    }
  } catch (error) {
    console.error("Erro ao obter as mensagens de contato:", error);
  }
});

app.listen(5000);
