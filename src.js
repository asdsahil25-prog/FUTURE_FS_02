const mongoose = require("mongoose");
const connectDB = require("./config/db.js");

connectDB().then(() => console.log("MongoDB connected"))

productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    brand: String,
    img: String,
    category: String,
    quantity: String
})

const Product = mongoose.model("Product", productSchema)

// Product.insertOne({
//     name: "Earbuds",
//     price: 1799,
//     description: "The buds comes with 12.4mm driver unit, which delivers crisp clear and enhanced bass quality sound experience. It allows users to access a plethora of features while playing supported games on a OnePlus handset. They can be accessed at any time while playing games and give players the option to toggle different features and settings. With the OnePlus Nord Buds 2r, you get to choose how heavy or light you want your sound with the help of sound master equalizer's 3 unique audio profiles -Bold, Bass & Balanced.Avoid cutouts and broken audio while gaming with Bluetooth 5.3 transmission and 94ms low latency. The flagship-level battery life for the all-new OnePlus Nord Buds 2r delivers up to 38 hrs of non-stop music on a single charge. Get a fast and seamless listening experience with lightspeed pairing with OnePlus Fast Pair for your OnePlus devices.",
//     brand: "OnePlus",
//     img: "/images/oneplus.webp",
//     category: "Electronics",
//     quantity: 5
// })
//  .then(() => {
//     console.log("Product inserted");
//  })

// Product.insertMany([

//     {
//     name: "Earbuds",
//     price: 1799,
//     description: "The buds comes with 12.4mm driver unit, which delivers crisp clear and enhanced bass quality sound experience. It allows users to access a plethora of features while playing supported games on a OnePlus handset. They can be accessed at any time while playing games and give players the option to toggle different features and settings. With the OnePlus Nord Buds 2r, you get to choose how heavy or light you want your sound with the help of sound master equalizer's 3 unique audio profiles -Bold, Bass & Balanced.Avoid cutouts and broken audio while gaming with Bluetooth 5.3 transmission and 94ms low latency. The flagship-level battery life for the all-new OnePlus Nord Buds 2r delivers up to 38 hrs of non-stop music on a single charge. Get a fast and seamless listening experience with lightspeed pairing with OnePlus Fast Pair for your OnePlus devices.",
//     brand: "OnePlus",
//     img: "/images/oneplus.webp",
//     category: "Electronics",
//     quantity: 5
// },

//     {
//     name: "Wireless Headphones",
//     price: 3499,
//     description: "Experience immersive sound with 40mm drivers, active noise cancellation, and ultra-comfortable ear cushions. Bluetooth 5.2 ensures a stable connection and up to 30 hours of battery life.",
//     brand: "Sony",
//     img: "/images/earbud.jpg",
//     category: "Electronics",
//     quantity: 10
// },

// {
//     name: "Smart Fitness Band",
//     price: 1599,
//     description: "Track your steps, heart rate, sleep, and more with this lightweight, water-resistant fitness band. The vibrant AMOLED display keeps your stats visible even in sunlight.",
//     brand: "Realme",
//     img: "/images/band.jpg",
//     category: "Electronics",
//     quantity: 15
// },

// {
//     name: "Portable Bluetooth Speaker",
//     price: 2499,
//     description: "Compact yet powerful speaker with deep bass and 12-hour battery life. IPX7 waterproof rating makes it perfect for outdoor adventures.",
//     brand: "JBL",
//     img: "/images/speaker.webp",
//     category: "Electronics",
//     quantity: 8
// },

// {
//     name: "True Wireless Earbuds",
//     price: 2199,
//     description: "Enjoy rich audio and clear calls with ENC (Environmental Noise Cancellation) and touch controls. Comes with fast charging and a total playback time of 28 hours.",
//     brand: "boAt",
//     img: "/images/bud.webp",
//     category: "Electronics",
//     quantity: 12
// },

// {
//     name: "Smartwatch",
//     price: 4299,
//     description: "Stay connected with call alerts, message notifications, and health tracking features like SpO2, heart rate, and sleep monitoring. 1.78'' AMOLED display and 7-day battery life.",
//     brand: "Noise",
//     img: "/images/shopping.webp",
//     category: "Electronics",
//     quantity: 6
// },

// {
//     name: "Gaming Mouse",
//     price: 1899,
//     description: "Ergonomic design with 7 programmable buttons, customizable RGB lighting, and a high-precision 16,000 DPI sensor for competitive gaming.",
//     brand: "Logitech",
//     img: "/images/mouse.webp",
//     category: "Electronics",
//     quantity: 20
// },

// {
//     name: "Wireless Keyboard & Mouse Combo",
//     price: 2799,
//     description: "Slim, quiet, and spill-resistant keyboard with a precision mouse. 2.4GHz wireless connectivity and long battery life make it perfect for both office and home use.",
//     brand: "Dell",
//     img: "/images/keymouse.webp",
//     category: "Electronics",
//     quantity: 9
// }


// ])
//  .then(() => {
//     console.log("product inserted")
//  })

module.exports = Product;