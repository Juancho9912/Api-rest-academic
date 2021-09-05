/** packages */
const mongoose = require("mongoose"); //Leer el paquete mongoosee


/**  Schema creation */
const courseSchema = new mongoose.Schema({
    code:{
        type: "String",
        required: true,
    },
    name:{
        type: "String",
        required: true,
    }
});

/** Schema exportation */
module.exports = courseSchema;