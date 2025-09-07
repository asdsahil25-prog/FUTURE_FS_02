const express = require("express");
const connectDB = require("./config/db")
const path = require("path")
const ejsMate = require("ejs-mate")
const Product = require("./src");
const session = require("express-session");
const app = express();

connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
    secret: "key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use((req, res, next) => {
    if (!req.session.cart) {
        req.session.cart = [];
    }
    next();
})

app.engine("ejs", ejsMate)


app.get("/product/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("show.ejs", { product });
})

app.post("/cart/update/:id", (req, res) => {
    const { id } = req.params;
    const { qty } = req.body;

    const item = req.session.cart.find(p => String(p._id) == String(id));

    if (item && qty > 0) {
        item.qty = qty;
        console.log("update item", item);

    } else {
        console.log("item not found");
    }

    res.redirect("/cart");
})

app.get("/home", async (req, res) => {
    const products = await Product.find();
    res.render("home.ejs", { products })
})

app.post("/add-to-cart", async (req, res) => {
    const { productId } = req.body;
    const product = await Product.findById(productId);

    if (!product) {
        return res.redirect("/home");
    }

    const cartItemIndex = req.session.cart.findIndex(item => String(product._id) === String(item._id));

    if (cartItemIndex !== -1) {
        req.session.cart[cartItemIndex].qty += 1;
    } else {
        req.session.cart.push({
            _id: productId,
            name: product.name,
            img: product.img,
            price: product.price,
            qty: product.quantity,
            brand: product.brand
        });
    }
    res.redirect("/cart");
})

app.get("/cart", (req, res) => {
    const cart = req.session.cart || [];

     let totalItems = 0;
        let totalPrice = 0;
        for (let item of cart) {
            totalItems += item.qty;
            totalPrice += item.qty * item.price;
        }

    res.render("cart.ejs", { cart, totalItems, totalPrice })
})

// remove from cart
app.post("/remove-from-cart", (req, res) => {
    const { productId } = req.body;
    if (req.session.cart) {
        req.session.cart = req.session.cart.filter(item => item._id !== productId);
    }
    res.redirect("/cart");
})

app.get("/checkout", (req, res) => {
    res.render("checkout", { errors: [] });
})

app.post("/remove-from-cart", (req, res) => {
    const { productId } = req.body;
    if (req.session.cart) {
        req.session.cart = req.session.cart.filter(item => item._id !== productId);
    }
    res.redirect("/cart");
})

app.listen(8080, () => {
    console.log(`server is listening to port on 8080`)
})

