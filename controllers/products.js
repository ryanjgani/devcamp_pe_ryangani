import { v4 as uuid } from "uuid";

// price, stock, discount
let products = [];

export const getProducts = (req, res) => {
    console.log(`Products in the database: ${products}`);

    res.send(products);
};

export const createProduct = (req, res) => {
    const product = req.body;

    products.push({ ...product, id: uuid() });

    console.log(`Product [${product.productname}] added to the database.`);
    res.send(`Product [${product.productname}] added to the database.`);
};

export const getProduct = (req, res) => {
    res.send(req.params.id);
};

export const deleteProduct = (req, res) => {
    console.log(`product with id ${req.params.id} has been deleted`);

    products = products.filter((product) => product.id !== req.params.id);
};

export const updateProduct = (req, res) => {
    const product = products.find((product) => product.id === req.params.id);
    const { productname, price, stock, discount } = req.body;
    product.productname = productname;
    product.price = price;
    product.stock = stock;
    product.discount = discount;

    console.log(`Product ${productname} has been updated`);
    res.send(`Product ${productname} has been updated`);
};
