const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategoriesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url_name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Categories", CategoriesSchema);