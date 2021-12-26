const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String, 
        require: true, 
        unique:true
    },
    description: {
        type: String, 
        require: true
    },
    image: {
        type: String, 
        require: true
    },
    categories: {
        type: Array
    },
    size: {
        type: String, 
        require: true
    },
    price: {
        type: Number, 
        require: true
    },
},
    {timestamps: true}
);

const Product = mongoose.model("Product", ProductSchema);
export {Product}
