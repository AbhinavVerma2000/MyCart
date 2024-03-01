const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true},
    slug: {type: String, required: true, unique: true},
    tagline:{type: String, required: true},
    desc: {type: String, required: true},
    img: {type: String, required: true},
    category: {type: String, required: true},
    size: {type: String},
    color: {type: String},
    price: {type: Number, required: true},
    availableQty: {type: Number, required: true},
    rate: {type: Number, min: 0, max: 5, required: true},
    review: {type: Number, default: 0}
}, {timestamps: true})
mongoose.models={}
export default mongoose.model("Product", ProductSchema)