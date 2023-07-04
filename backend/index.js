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

//express
const express = require("express");
const app = express();
const cors = require("cors");
const { Int32 } = require("mongodb");
console.log("App funcionando na porta 5000");
app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
  try {
    const email = req.body.email;

    // Verificar se o usuário já está registrado
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      console.log("Email ja cadastrado no Sistema");
      resp.send(JSON.stringify("Email ja cadastrado no Sistema"));
    } else {
      // Criar um novo usuário
      const user = new User(req.body);
      let result = await user.save();
      result = result.toObject();

      if (result) {
        delete result.password;
        //   resp.send(result);
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

app.get("/getUserLogin", async (req, resp) => {
  try {
    const email = req.query.email; // Acessando o parâmetro email da solicitação GET
    const password = req.query.password;

    let user = await User.findOne({ email }); // Passando o email como argumento para o construtor de User
    if (user) {
      console.log(user.password);
      console.log(password);
      user = user.toObject();
      if (user.password == password) {
        delete user.password;
        resp.send(user); // Enviando o resultado da consulta como resposta
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

app.get("/getUsers", async (req, resp) => {
  try {
    const quantity = req.query.quantity;
    const name = req.query.name;

    let users;
    if(name != null && name !== undefined && name !== "" && name !==''){
      const nameRegex = new RegExp(name, "i");

      users = await User.find({ name: nameRegex }).limit(parseInt(quantity));
    }else{
      users = await User.find().limit(parseInt(quantity));
    }

    resp.send(users); // Passando o email como argumento para o construtor de User
  } catch (e) {
    console.log("Erro de acesso ao banco", e);
    resp.send(JSON.stringify("Erro de acesso ao banco"));
  }
});

app.delete("/deleteUser", (req, res) => {
  const userEmail = req.query.email; // Obtém o email do usuário a ser excluído da consulta
  console.log(userEmail)
  User.findOneAndDelete({ email: userEmail })
    .then((deletedUser) => {
      if (deletedUser) {
        console.log("Usuário excluído:", deletedUser);
        res.status(200).json({ message: "Usuário excluído com sucesso." });
      } else {
        console.log("Nenhum usuário encontrado com o email fornecido.");
        res.status(404).json({ error: "Nenhum usuário encontrado com o email fornecido." });
      }
    })
    .catch((error) => {
      console.error("Ocorreu um erro ao excluir o usuário:", error);
      res.status(500).json({ error: "Ocorreu um erro ao excluir o usuário." });
    });
});

const convertImageToBase64 = (imagePath) => {
  const imageBuffer = fs.readFileSync(imagePath);
  const base64Image = imageBuffer.toString("base64");
  const contentType = "image/jpeg"; // Substitua pelo tipo de conteúdo correto da imagem

  return {
    data: base64Image,
    contentType: contentType,
  };
};

app.post("/addProduct", async (req, resp) => {
  try {
    // Ler e converter a imagem em base64
    const imageData = convertImageToBase64(req.body.imgSrc);

    // Criar um novo objeto de produto com os dados e a imagem
    const newProduct = new Product({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      type: req.body.type,
      quantity: req.body.quantity,
      image: imageData,
    });

    // Salvar o produto no banco de dados
    const savedProduct = await newProduct.save();
    // translateImageToJpg(imageData.data,"teste.jpg")

    console.log("Produto inserido com sucesso:", savedProduct);
    resp.send(savedProduct);
  } catch (error) {
    console.error("Erro ao inserir o produto:", error);
  }
});

// const translateImageToJpg = (base64Data, outputPath) => {
//   const base64Image = base64Data.replace(/^data:image\/jpeg;base64,/, "");
//   const binaryData = Buffer.from(base64Image, "base64");

//   fs.writeFile(outputPath, binaryData, "binary", (error) => {
//     if (error) {
//       console.error("Erro ao traduzir a imagem:", error);
//     } else {
//       console.log("Imagem traduzida com sucesso para JPG:", outputPath);
//     }
//   });
// };

app.get("/getProduct", async (req, resp) => {
  try {
    // Ler e converter a imagem em base64
    const name = req.query.name; // Acessando o parâmetro email da solicitação GET
    let price = parseInt(req.query.price);
    const type = req.query.type;
    let limit = 12;

    if (price > 0 || name != "" || type != "todos") limit = 102;
    if (price <= 0) price = 100000;

    const nameRegex = new RegExp(name, "i");
    const filter = {
      name: { $regex: nameRegex },
      price: { $lte: price },
    };

    if (type != "todos") filter["type"] = type;

    // Criar um novo objeto de produto com os dados e a imagem
    const products = await Product.find(filter).limit(limit);
    resp.send(products);
    // console.log("Os 10 primeiros produtos:");
    // products.forEach((product, index) => {
    //   console.log(`Produto ${index + 1}:`, product.name);
    // });
  } catch (error) {
    console.error("Erro ao obter os produtos:", error);
  }
});

app.get("/getOneProduct", async (req, resp) => {
  try {
    const idProduct = req.query.id; // Acessando o parâmetro email da solicitação GET
    console.log(idProduct)
    let product = await Product.findOne({ _id : idProduct }); // Passando o email como argumento para o construtor de User
    if (product) {
      // console.log(product);
      product = product.toObject();
      resp.send(product); // Enviando o resultado da consulta como resposta
      // console.log(product);
    } else {
      console.log("Produto Nao Encontrado");
      resp.send(JSON.stringify("Produto Nao Encontrado"));
    }
  } catch (e) {
    console.log("Erro de acesso ao banco");
    resp.send(JSON.stringify("Erro de acesso ao banco"));
  }
});

app.delete("/deleteOneProduct", (req, res) => {
  const idProduct = req.query.id; // Obtém o email do usuário a ser excluído da consulta
  Product.findOneAndDelete({ _id : idProduct })
    .then((deletedUser) => {
      if (deletedUser) {
        console.log("Produto excluído:", deletedUser);
        res.status(200).json({ message: "Produto excluído com sucesso." });
      } else {
        console.log("Nenhum Produto encontrado com o ID fornecido.");
        res.status(404).json({ error: "Nenhum Produto encontrado com o ID fornecido." });
      }
    })
    .catch((error) => {
      console.error("Ocorreu um erro ao excluir o Produto:", error);
      res.status(500).json({ error: "Ocorreu um erro ao excluir o Produto." });
    });
});

app.listen(5000);
