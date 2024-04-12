const mongoose = require('mongoose');
const ReviewSchema = new mongoose.Schema({
    name: {type: String, required:true},
    email: {type: String, required: true, unique: true},
    slug: {type: String, required: true, unique: true},
    rating: {type: Number, required: true},
    comment:{type: String}
}, {timestamps: true})
mongoose.models={}
export default mongoose.model("Review", ReviewSchema)