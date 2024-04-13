const mongoose = require('mongoose');
const ReviewSchema = new mongoose.Schema({
    name: {type: String, required:true},
    email: {type: String, required: true},
    slug: {type: String, required: true},
    rating: {type: Number, required: true},
    comment:{type: String}
}, {timestamps: true})
mongoose.models={}
export default mongoose.model("Review", ReviewSchema)