const mongoose = require("mongoose");

async function connectDB() {
    async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecomm');
}

main()
    .then(res => console.log("connected to mongo"))
    .catch(err => console.log(err))
}


module.exports = connectDB;